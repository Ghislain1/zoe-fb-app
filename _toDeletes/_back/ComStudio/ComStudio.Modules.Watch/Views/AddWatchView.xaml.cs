using ComStudio.Modules.Watch.ViewModels;
using System.Windows.Controls;

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