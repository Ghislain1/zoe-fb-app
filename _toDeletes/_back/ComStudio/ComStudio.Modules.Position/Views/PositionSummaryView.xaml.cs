using ComStudio.Modules.Position.Interfaces;
using System.Windows.Controls;

namespace ComStudio.Modules.Position.Views
{
    /// <summary>
    /// Interaction logic for PositionSummaryView.xaml
    /// </summary>
    public partial class PositionSummaryView : UserControl
    {
        public PositionSummaryView(IPositionSummaryViewModel viewModel)
        {
            InitializeComponent();
            Model = viewModel;
        }

        public IPositionSummaryViewModel Model
        {
            get
            {
                return DataContext as IPositionSummaryViewModel;
            }
            set
            {
                DataContext = value;
            }
        }
    }
}