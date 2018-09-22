namespace ComStudio
{
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Data;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Windows;

    public partial class App : Application
    {
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            ComStudioBootstrapper bootstrapper = new ComStudioBootstrapper();
            bootstrapper.Run();
            this.ShutdownMode = ShutdownMode.OnMainWindowClose;
        }
    }
}