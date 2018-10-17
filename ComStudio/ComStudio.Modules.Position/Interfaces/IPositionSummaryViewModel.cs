using ComStudio.Infrastructure.Interfaces;
using System.Windows.Input;

namespace ComStudio.Modules.Position.Interfaces
{
    public interface IPositionSummaryViewModel : IHeaderInfoProvider<string>
    {
        // IObservablePosition Position { get; }

        ICommand BuyCommand { get; }

        ICommand SellCommand { get; }
    }
}