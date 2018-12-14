using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using OnlyGui.DataAccessLib.Models;
using OnlyGui.DataAccessLib.Extensions;

namespace OnlyGui.DataAccessLib.Services
{
    public class AccountRepository : IAccountRepository
    {
        private readonly IOnlyGuiContext context;

        public AccountRepository(IOnlyGuiContext context)
        {
            this.context = context;
        }

        public async Task<bool> Authenticate(string username, string password)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public async Task<User> AuthenticateAndLoadUser(string username, string password)
        {
            // TODO: Do proper password hashing - for now DEMO CODE
            // var hashedPassword = AppUtils.HashPassword(password);
            var hashedPassword = password;

            var user = await this.context.Users.FirstOrDefaultAsync()
                          .FirstOrDefaultAsync(usr => usr.Username == username &&
                                                 usr.Password == hashedPassword);
            return user;
        }
    }
}