namespace ComStudio.Modules.Output
{
    using Microsoft.Practices.Unity;
    using Prism.Ioc;
    using Prism.Modularity;
    using Prism.Regions;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Media;

    public class OutputModule : IModule
    {
        private readonly IContainerRegistry containerRegistry;
        private readonly IRegionManager regionManager;

        public OutputModule(IRegionManager regionManager)
        {
            this.containerRegistry = containerRegistry;
            this.regionManager = regionManager;
        }

        public void Initialize()
        {
            var image = this.CreateImage();
        }

        public void OnInitialized(IContainerProvider containerProvider)
        {
            this.Initialize();
        }

        public void RegisterTypes(IContainerRegistry containerRegistry)
        {
        }

        /// <summary>
        /// Creates the image.
        /// </summary>
        /// <returns>Image.</returns>
        private Image CreateImage()
        {
            var img = new Image();

            BindingOperations.SetBinding(img, RenderOptions.BitmapScalingModeProperty, new Binding
            {
                Path = new PropertyPath(RenderOptions.BitmapScalingModeProperty),
                Source = this,
            });

            img.Stretch = Stretch.None;
            img.HorizontalAlignment = HorizontalAlignment.Left;
            img.VerticalAlignment = VerticalAlignment.Top;

            return img;
        }
    }
}