using System;
using System.Threading.Tasks;

namespace FirstAnWebApiWebSocket
{
    public class DoSomeThing : IDoSomeThing
    {
        private IServiceProvider serviceProvider;

        public DoSomeThing(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        public void DoSome()
        {
        }

        public async Task DoSomeAsync()
        {
            await Task.Delay(2000);

            await Task.Factory.StartNew(() => this.DoSome());
        }
    }
}