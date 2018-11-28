namespace ComStudio
{
    using ComStudio.Views;
    using ComStudio.Web.WpfControls.Setups;
    using Prism.Ioc;
    using Prism.Modularity;
    using Prism.Unity;
    using System.Windows;

    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>

    public partial class App : PrismApplication
    {
        public App()
        {
            ICefSharpProvider cefSharpProvider = new CefSharpProvider();
            cefSharpProvider.InitializeCefSharp();
        }

        protected override IModuleCatalog CreateModuleCatalog()
        {
            return new ConfigurationModuleCatalog();
        }

        protected override Window CreateShell()
        {
            return Container.Resolve<Shell>();
        }

        protected override void RegisterTypes(IContainerRegistry containerRegistry)
        {
        }
    }
}