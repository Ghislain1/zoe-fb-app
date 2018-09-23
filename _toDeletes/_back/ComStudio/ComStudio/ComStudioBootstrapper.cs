namespace ComStudio
{
    using ComStudio.ViewModels;
    using ComStudio.Views;
    using Microsoft.Practices.ServiceLocation;
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;
    using Prism.Unity;

    using System.Windows;

    public class ComStudioBootstrapper : UnityBootstrapper
    {
        protected override Prism.Regions.IRegionBehaviorFactory ConfigureDefaultRegionBehaviors()
        {
            var factory = base.ConfigureDefaultRegionBehaviors();
            return factory;
        }

        protected override void ConfigureModuleCatalog()
        {
            base.ConfigureModuleCatalog();

            //TODO: GHislain Why Reihenfolge spielt eine große role--->
            ModuleCatalog moduleCatalog = (ModuleCatalog)this.ModuleCatalog;
            moduleCatalog.AddModule(typeof(ComStudio.Modules.Output.OutputModule));
            moduleCatalog.AddModule(typeof(ComStudio.Modules.Startpage.StartpageModule));

            moduleCatalog.AddModule(typeof(ComStudio.Modules.Market.MarketModule));
            moduleCatalog.AddModule(typeof(ComStudio.Modules.Position.PositionModule));

            moduleCatalog.AddModule(typeof(ComStudio.Modules.Watch.WatchModule));
        }

        /// <summary>
        /// Configures the LocatorProvider for the <see cref="Microsoft.Practices.ServiceLocation.ServiceLocator"/>.
        /// </summary>
        protected override void ConfigureServiceLocator()
        {
            // ServiceLocator.SetLocatorProvider();
            UnityServiceLocator locator = new UnityServiceLocator(this.Container);
            ServiceLocator.SetLocatorProvider(() => locator);
            var ff = ServiceLocator.Current;
            IRegionManager regionManager = ServiceLocator.Current.GetInstance<IRegionManager>();
        }

        protected override DependencyObject CreateShell()
        {
            // Use the container to create an instance of the shell.
            Shell view = this.Container.TryResolve<Shell>();
            view.DataContext = new ShellViewModel();
            return view;
        }

        protected override void InitializeShell()
        {
            base.InitializeShell();
            App.Current.MainWindow = (Window)this.Shell;
            App.Current.MainWindow.Show();
        }
    }
}