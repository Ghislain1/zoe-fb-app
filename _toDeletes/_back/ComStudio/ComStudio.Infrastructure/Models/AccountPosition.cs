using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComStudio.Infrastructure.Models
{
    public class AccountPosition
    {
        private decimal _costBasis;

        private long _shares;

        private string _tickerSymbol;

        public AccountPosition()
        {
        }

        public AccountPosition(string tickerSymbol, decimal costBasis, long shares)
        {
            TickerSymbol = tickerSymbol;
            CostBasis = costBasis;
            Shares = shares;
        }

        public event EventHandler<AccountPositionEventArgs> Updated = delegate { };

        public decimal CostBasis
        {
            get
            {
                return _costBasis;
            }
            set
            {
                if (!value.Equals(_costBasis))
                {
                    _costBasis = value;
                    Updated(this, new AccountPositionEventArgs());
                }
            }
        }

        public long Shares
        {
            get
            {
                return _shares;
            }
            set
            {
                if (!value.Equals(_shares))
                {
                    _shares = value;
                    Updated(this, new AccountPositionEventArgs());
                }
            }
        }

        public string TickerSymbol
        {
            get
            {
                return _tickerSymbol;
            }
            set
            {
                if (value == null)
                {
                    value = string.Empty;
                }

                if (!value.Equals(_tickerSymbol))
                {
                    _tickerSymbol = value;
                    Updated(this, new AccountPositionEventArgs());
                }
            }
        }
    }
}