namespace ComStudio.Modules.Position.ViewModels
{
    using ComStudio.Infrastructure;
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Infrastructure.Models;
    using ComStudio.Modules.Position.Interfaces;
    using ComStudio.Modules.Position.Models;
    using ComStudio.Modules.Position.Properties;
    using Microsoft.Practices.ServiceLocation;
    using Prism.Commands;
    using Prism.Regions;
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;

    public class OrdersController : IOrdersController
    {
        private readonly ComStudioCommandProxy commandProxy;
        private IAccountPositionService accountPositionService;
        private IRegionManager regionManager;

        public OrdersController(IRegionManager regionManager, ComStudioCommandProxy commandProxy, IAccountPositionService accountPositionService)
        {
            if (commandProxy == null)
            {
                throw new ArgumentNullException("commandProxy");
            }

            this.regionManager = regionManager;
            this.accountPositionService = accountPositionService;
            this.commandProxy = commandProxy;
            BuyCommand = new DelegateCommand<string>(OnBuyExecuted);
            SellCommand = new DelegateCommand<string>(OnSellExecuted);
            SubmitAllVoteOnlyCommand = new DelegateCommand(() => { }, SubmitAllCanExecute);
            OrderModels = new List<IOrderCompositeViewModel>();
            commandProxy.SubmitAllOrdersCommand.RegisterCommand(SubmitAllVoteOnlyCommand);
        }

        public DelegateCommand<string> BuyCommand { get; private set; }

        public DelegateCommand<string> SellCommand { get; private set; }

        public DelegateCommand SubmitAllVoteOnlyCommand { get; private set; }

        private List<IOrderCompositeViewModel> OrderModels { get; set; }

        virtual protected void StartOrder(string tickerSymbol, TransactionType transactionType)
        {
            if (String.IsNullOrEmpty(tickerSymbol))
            {
                throw new ArgumentException(string.Format(CultureInfo.CurrentCulture, Resources.StringCannotBeNullOrEmpty, "tickerSymbol"));
            }
            this.ShowOrdersView();

            IRegion ordersRegion = this.regionManager.Regions[RegionNames.OrdersRegion];

            var orderCompositeViewModel = ServiceLocator.Current.GetInstance<IOrderCompositeViewModel>();

            orderCompositeViewModel.TransactionInfo = new TransactionInfo(tickerSymbol, transactionType);
            orderCompositeViewModel.CloseViewRequested += delegate
            {
                OrderModels.Remove(orderCompositeViewModel);
                commandProxy.SubmitAllOrdersCommand.UnregisterCommand(orderCompositeViewModel.SubmitCommand);
                commandProxy.CancelAllOrdersCommand.UnregisterCommand(orderCompositeViewModel.CancelCommand);
                commandProxy.SubmitOrderCommand.UnregisterCommand(orderCompositeViewModel.SubmitCommand);
                commandProxy.CancelOrderCommand.UnregisterCommand(orderCompositeViewModel.CancelCommand);
                ordersRegion.Remove(orderCompositeViewModel);
                if (ordersRegion.Views.Count() == 0)
                {
                    this.RemoveOrdersView();
                }
            };

            ordersRegion.Add(orderCompositeViewModel);
            OrderModels.Add(orderCompositeViewModel);

            commandProxy.SubmitAllOrdersCommand.RegisterCommand(orderCompositeViewModel.SubmitCommand);
            commandProxy.CancelAllOrdersCommand.RegisterCommand(orderCompositeViewModel.CancelCommand);
            commandProxy.SubmitOrderCommand.RegisterCommand(orderCompositeViewModel.SubmitCommand);
            commandProxy.CancelOrderCommand.RegisterCommand(orderCompositeViewModel.CancelCommand);

            ordersRegion.Activate(orderCompositeViewModel);
        }

        virtual protected bool SubmitAllCanExecute()
        {
            Dictionary<string, long> sellOrderShares = new Dictionary<string, long>();

            if (OrderModels.Count == 0) return false;

            foreach (var order in OrderModels)
            {
                if (order.TransactionInfo.TransactionType == TransactionType.Sell)
                {
                    string tickerSymbol = order.TransactionInfo.TickerSymbol.ToUpper(CultureInfo.CurrentCulture);
                    if (!sellOrderShares.ContainsKey(tickerSymbol))
                        sellOrderShares.Add(tickerSymbol, 0);

                    //populate dictionary with total shares bought or sold by tickersymbol
                    sellOrderShares[tickerSymbol] += order.Shares;
                }
            }

            IList<AccountPosition> positions = this.accountPositionService.GetAccountPositions();

            foreach (string key in sellOrderShares.Keys)
            {
                AccountPosition position =
                    positions.FirstOrDefault(
                        x => String.Compare(x.TickerSymbol, key, StringComparison.CurrentCultureIgnoreCase) == 0);
                if (position == null || position.Shares < sellOrderShares[key])
                {
                    //trying to sell more shares than we own
                    return false;
                }
            }

            return true;
        }

        private void OnBuyExecuted(string parameter)
        {
            StartOrder(parameter, TransactionType.Buy);
        }

        private void OnSellExecuted(string parameter)
        {
            StartOrder(parameter, TransactionType.Sell);
        }

        private void RemoveOrdersView()
        {
            IRegion region = this.regionManager.Regions[RegionNames.ActionRegion];

            object ordersView = region.GetView("OrdersView");
            if (ordersView != null)
            {
                region.Remove(ordersView);
            }
        }

        private void ShowOrdersView()
        {
            IRegion region = this.regionManager.Regions[RegionNames.ActionRegion];

            object ordersView = region.GetView("OrdersView");
            if (ordersView == null)
            {
                ordersView = ServiceLocator.Current.GetInstance<IOrdersView>();
                region.Add(ordersView, "OrdersView");
            }

            region.Activate(ordersView);
        }
    }
}