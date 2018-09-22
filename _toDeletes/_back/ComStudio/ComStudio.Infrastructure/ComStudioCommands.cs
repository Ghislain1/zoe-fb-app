namespace ComStudio.Infrastructure
{
    using Prism.Commands;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public static class ComStudioCommands
    {
        private static CompositeCommand cancelAllOrdersCommand = new CompositeCommand();
        private static CompositeCommand cancelOrderCommand = new CompositeCommand(true);
        private static CompositeCommand submitAllOrdersCommand = new CompositeCommand();
        private static CompositeCommand submitOrderCommand = new CompositeCommand(true);

        public static CompositeCommand CancelAllOrdersCommand
        {
            get { return cancelAllOrdersCommand; }
            set { cancelAllOrdersCommand = value; }
        }

        public static CompositeCommand CancelOrderCommand
        {
            get { return cancelOrderCommand; }
            set { cancelOrderCommand = value; }
        }

        public static CompositeCommand SubmitAllOrdersCommand
        {
            get { return submitAllOrdersCommand; }
            set { submitAllOrdersCommand = value; }
        }

        public static CompositeCommand SubmitOrderCommand
        {
            get { return submitOrderCommand; }
            set { submitOrderCommand = value; }
        }
    }
}