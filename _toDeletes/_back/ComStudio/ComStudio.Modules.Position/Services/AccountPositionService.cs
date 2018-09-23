namespace ComStudio.Modules.Position.Services
{
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Infrastructure.Models;
    using ComStudio.Modules.Position.Properties;
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Xml.Linq;

    public class AccountPositionService : IAccountPositionService
    {
        private List<AccountPosition> positions = new List<AccountPosition>();

        public AccountPositionService()
        {
            InitializePositions();
        }

        public event EventHandler<AccountPositionModelEventArgs> Updated = delegate { };

        public IList<AccountPosition> GetAccountPositions()
        {
            return this.positions;
        }

        private void InitializePositions()
        {
            using (var sr = new StringReader(Resources.AccountPositions))
            {
                XDocument document = XDocument.Load(sr);
                this.positions = document.Descendants("AccountPosition")
                    .Select(
                    x => new AccountPosition(x.Element("TickerSymbol").Value,
                                             decimal.Parse(x.Element("CostBasis").Value, CultureInfo.InvariantCulture),
                                             long.Parse(x.Element("Shares").Value, CultureInfo.InvariantCulture)))
                    .ToList();
            }
        }
    }
}