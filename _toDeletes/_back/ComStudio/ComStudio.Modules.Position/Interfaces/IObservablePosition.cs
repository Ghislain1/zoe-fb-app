namespace ComStudio.Modules.Position.Interfaces
{
    using ComStudio.Modules.Position.ViewModels;
    using System.Collections.ObjectModel;

    public interface IObservablePosition
    {
        ObservableCollection<PositionSummaryItem> Items { get; }
    }
}