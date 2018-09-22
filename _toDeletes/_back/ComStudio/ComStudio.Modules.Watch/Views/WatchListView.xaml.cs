using ComStudio.Modules.Watch.ViewModels;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

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