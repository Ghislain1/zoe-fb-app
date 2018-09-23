using ComStudio.Modules.Watch.ViewModels;
using System.Diagnostics.CodeAnalysis;
using System.Windows.Controls;

namespace ComStudio.Modules.Watch.Views
{
    /// <summary>
    /// Interaction logic for WatchListView.xaml
    /// </summary>
    public partial class WatchListView : UserControl
    {
        public WatchListView(WatchListViewModel viewModel)
        {
            InitializeComponent();
            ViewModel = viewModel;
        }

        [SuppressMessage("Microsoft.Design", "CA1044:PropertiesShouldNotBeWriteOnly", Justification = "Needs to be a property to be composed by MEF")]
        private WatchListViewModel ViewModel
        {
            set
            {
                this.DataContext = value;
            }
        }
    }
}