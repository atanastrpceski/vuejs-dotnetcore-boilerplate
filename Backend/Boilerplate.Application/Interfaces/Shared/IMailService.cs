using Boilerplate.Application.DTOs.Mail;
using System.Threading.Tasks;

namespace Boilerplate.Application.Interfaces.Shared
{
    public interface IMailService
    {
        Task SendAsync(MailRequest request);
    }
}