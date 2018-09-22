namespace ComStudio.Infrastructure
{
    using Prism.Commands;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

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