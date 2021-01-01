using System;

namespace Boilerplate.Api.Middlewares.Spa
{
    public static class SpaOptions
    {
        public static int Port { get; } = 8080;
        public static TimeSpan Timeout { get; } = TimeSpan.FromSeconds(120);
        public static string WorkingDirectory { get; } = @"..\..\Frontend";
    }
}
