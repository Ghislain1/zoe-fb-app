namespace ComStudio.Modules.Position.ViewModels
{
    using ComStudio.Infrastructure.Messaging;
    using ComStudio.Modules.Position.Interfaces;
    using Prism.Events;
    using Prism.Mvvm;
    using System;
    using System.Windows.Input;

    public class PositionSummaryViewModel : BindableBase, IPositionSummaryViewModel
    {
        private readonly IEventAggregator eventAggregator;
        private PositionSummaryItem currentPositionSummaryItem;

        public PositionSummaryViewModel(IOrdersController ordersController, IEventAggregator eventAggregator, IObservablePosition observablePosition)
        {
            if (ordersController == null)
            {
                throw new ArgumentNullException("ordersController");
            }

            this.eventAggregator = eventAggregator;
            this.Position = observablePosition;

            BuyCommand = ordersController.BuyCommand;
            SellCommand = ordersController.SellCommand;

            this.CurrentPositionSummaryItem = new PositionSummaryItem("FAKEINDEX", 0, 0, 0);
        }

        public ICommand BuyCommand { get; private set; }

        public PositionSummaryItem CurrentPositionSummaryItem
        {
            get { return currentPositionSummaryItem; }
            set
            {
                if (SetProperty(ref currentPositionSummaryItem, value))
                {
                    if (currentPositionSummaryItem != null)
                    {
                        eventAggregator.GetEvent<TickerSymbolSelectedEvent>().Publish(
                            CurrentPositionSummaryItem.TickerSymbol);
                    }
                }
            }
        }

        public string HeaderInfo
        {
            get { return "POSITION"; }
        }

        public IObservablePosition Position { get; private set; }
        public ICommand SellCommand { get; private set; }
    }
}