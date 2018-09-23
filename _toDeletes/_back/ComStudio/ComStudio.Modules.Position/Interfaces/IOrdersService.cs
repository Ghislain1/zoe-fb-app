namespace ComStudio.Modules.Position.Interfaces
{
    using ComStudio.Modules.Position.Models;

    public interface IOrdersService
    {
        void Submit(Order order);
    }
}