namespace ComStudio.Modules.Position.Interfaces
{
    using Prism.Commands;

    public interface IOrdersController
    {
        DelegateCommand<string> BuyCommand { get; }
        DelegateCommand<string> SellCommand { get; }
    }
}