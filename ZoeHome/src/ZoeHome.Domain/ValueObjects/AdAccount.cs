using System;
using System.Collections.Generic;
using System.Text;
using ZoeHome.Domain.Exceptions;

namespace ZoeHome.Domain.ValueObjects
{
    public class AdAccount : ValueObject
    {
        private AdAccount()
        {
        }

        public string Domain { get; private set; }

        public string Name { get; private set; }

        public static explicit operator AdAccount(string accountString)
        {
            return For(accountString);
        }

        public static AdAccount For(string accountString)
        {
            var account = new AdAccount();

            try
            {
                var index = accountString.IndexOf("\\", StringComparison.Ordinal);
                account.Domain = accountString.Substring(0, index);
                account.Name = accountString.Substring(index + 1);
            }
            catch (Exception ex)
            {
                throw new AdAccountInvalidException(accountString, ex);
            }

            return account;
        }

        public static implicit operator string(AdAccount account)
        {
            return account.ToString();
        }

        public override string ToString()
        {
            return $"{Domain}\\{Name}";
        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return Domain;
            yield return Name;
        }
    }
}