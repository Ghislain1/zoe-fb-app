using OnlyGui.DataAccessLib.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlyGui.DataAccessLib
{
    public interface IAccountRepository
    {
        Task<bool> Authenticate(string username, string password);

        Task<User> AuthenticateAndLoadUser(string username, string password);
    }
}