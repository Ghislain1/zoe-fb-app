namespace ComStudio.Infrastructure
{
    using Prism.Commands;

    public class ComStudioCommandProxy
    {
        virtual public CompositeCommand CancelAllOrdersCommand
        {
            get { return ComStudioCommands.CancelAllOrdersCommand; }
        }

        virtual public CompositeCommand CancelOrderCommand
        {
            get { return ComStudioCommands.CancelOrderCommand; }
        }

        virtual public CompositeCommand SubmitAllOrdersCommand
        {
            get { return ComStudioCommands.SubmitAllOrdersCommand; }
        }

        virtual public CompositeCommand SubmitOrderCommand
        {
            get { return ComStudioCommands.SubmitOrderCommand; }
        }
    }
}