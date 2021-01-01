using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.NetworkInformation;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace Boilerplate.Api.Middlewares.Spa
{
    public class NodeProccessRunner : IDisposable
    {
        private Process _proccess;
        private readonly Uri _developmentServerEndpoint;
        private readonly string _scriptName;
        public NodeProccessRunner(string scriptName)
        {
            _scriptName = scriptName;
            _developmentServerEndpoint = new Uri($"http://localhost:{SpaOptions.Port}");
        }

        public async Task<Uri> LaunchProccess()
        {
            if (IsRunning())
            {
                return _developmentServerEndpoint;
            }
            var isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
            var processInfo = new ProcessStartInfo
            {
                FileName = isWindows ? "cmd" : "npm",
                Arguments = $"{(isWindows ? "/c npm run " : "")}{_scriptName}",
                WorkingDirectory = SpaOptions.WorkingDirectory,
                RedirectStandardError = true,
                RedirectStandardInput = true,
                RedirectStandardOutput = true,
                UseShellExecute = false,
            };

            var process = Process.Start(processInfo);
            var tcs = new TaskCompletionSource<int>();
            _ = Task.Run(() =>
            {
                try
                {
                    string line;
                    while ((line = process.StandardOutput.ReadLine()) != null)
                    {
                        if (!string.IsNullOrEmpty(line))
                        {
                            Debug.WriteLine(line);
                        }

                        if (!tcs.Task.IsCompleted && line.Contains("DONE  Compiled successfully in"))
                        {
                            tcs.SetResult(1);
                        }
                    }
                }
                catch (EndOfStreamException ex)
                {
                    Debug.WriteLine(ex.ToString());
                    tcs.SetException(new InvalidOperationException($"npm run {_scriptName} failed.", ex));
                }
            });
            _ = Task.Run(() =>
            {
                try
                {
                    string line;
                    while ((line = process.StandardError.ReadLine()) != null)
                    {
                        Debug.WriteLine(line);
                    }
                }
                catch (EndOfStreamException ex)
                {
                    Debug.WriteLine(ex.ToString());
                    tcs.SetException(new InvalidOperationException($"npm run {_scriptName} failed.", ex));
                }
            });

            var timeout = Task.Delay(SpaOptions.Timeout);
            if (await Task.WhenAny(timeout, tcs.Task) == timeout)
            {
                throw new TimeoutException();
            }

            return _developmentServerEndpoint;

        }
        private static bool IsRunning() => IPGlobalProperties.GetIPGlobalProperties()
               .GetActiveTcpListeners()
               .Select(x => x.Port)
               .Contains(SpaOptions.Port);
        public void Dispose()
        {
            if (_proccess != null && !_proccess.HasExited)
            {
                _proccess.Kill();
                _proccess = null;
            }
        }
    }
}
