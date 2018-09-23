namespace ComStudio
{
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