namespace ComStudio
{
    using ComStudio.Web.WpfControls.Setups;
    using System.Windows;

    public partial class App : Application
    {
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            ICefSharpProvider cefSharpProvider = new CefSharpProvider();
            cefSharpProvider.InitializeCefSharp();

            ComStudioBootstrapper bootstrapper = new ComStudioBootstrapper();
            bootstrapper.Run();
            this.ShutdownMode = ShutdownMode.OnMainWindowClose;
        }
    }
}