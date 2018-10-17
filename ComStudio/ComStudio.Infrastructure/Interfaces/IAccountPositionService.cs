namespace ComStudio.Infrastructure.Interfaces
{
    using ComStudio.Infrastructure.Models;
    using System;
    using System.Collections.Generic;

    public interface IAccountPositionService
    {
        event EventHandler<AccountPositionModelEventArgs> Updated;

        IList<AccountPosition> GetAccountPositions();
    }
}