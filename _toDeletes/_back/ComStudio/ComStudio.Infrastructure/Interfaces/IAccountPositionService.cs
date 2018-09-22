namespace ComStudio.Infrastructure.Interfaces
{
    using ComStudio.Infrastructure.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface IAccountPositionService
    {
        event EventHandler<AccountPositionModelEventArgs> Updated;

        IList<AccountPosition> GetAccountPositions();
    }
}