namespace ComStudio
{
    using ComStudio.Views;
    using ComStudio.Web.WpfControls.Setups;
    using Prism.Ioc;
    using Prism.Modularity;
    using Prism.Unity;
    using System;
    using System.IO;
    using System.Reflection;
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

            //Add Custom assembly resolver
            AppDomain.CurrentDomain.AssemblyResolve += Resolver;
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

        private Assembly Resolver(object sender, ResolveEventArgs args)
        {
            Assembly toReturnAssembly = null;
            if (args.Name.Contains("WebTopology"))
            {
                string assemblyName = args.Name.Split(new[] { ',' }, 2)[0] + ".dll";
                string archSpecificPath = Path.Combine(assemblyName);

                if (File.Exists(args.Name))
                {
                    toReturnAssembly = Assembly.LoadFile(archSpecificPath);
                }
            }

            return toReturnAssembly;
        }
    }
}