using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.SpaServices;

namespace Boilerplate.Api.Middlewares.Spa
{
    public static class VueDevelopmentServerMiddleware
    {
        public static void UseVueDevelopmentServer(this ISpaBuilder spa, string scriptName)
        {
            spa.UseProxyToSpaDevelopmentServer(async () =>
            {
                var nodeRunner = new NodeProccessRunner(scriptName);
                return await nodeRunner.LaunchProccess();
            });
        }
    }
}
