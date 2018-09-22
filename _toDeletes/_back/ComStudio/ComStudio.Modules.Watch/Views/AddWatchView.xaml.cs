using ComStudio.Modules.Watch.ViewModels;
using System;
using System.Collections.Generic;
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
    /// Interaction logic for AddWatchView.xaml
    /// </summary>
    public partial class AddWatchView : UserControl
    {
        public AddWatchView(AddWatchViewModel viewModel)
        {
            InitializeComponent();
            ViewModel = viewModel;
        }

        public AddWatchViewModel ViewModel
        {
            set
            {
                this.DataContext = value;
            }
        }
    }
}