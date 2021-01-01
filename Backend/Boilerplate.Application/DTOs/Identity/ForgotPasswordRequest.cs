﻿using System.ComponentModel.DataAnnotations;

namespace Boilerplate.Application.DTOs.Identity
{
    public class ForgotPasswordRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}