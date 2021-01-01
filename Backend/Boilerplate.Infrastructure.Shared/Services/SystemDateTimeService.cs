using Boilerplate.Application.Interfaces.Shared;
using System;

namespace Boilerplate.Infrastructure.Shared.Services
{
    public class SystemDateTimeService : IDateTimeService
    {
        public DateTime NowUtc => DateTime.UtcNow;
    }
}