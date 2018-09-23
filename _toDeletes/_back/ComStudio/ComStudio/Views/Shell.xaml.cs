namespace ComStudio.Views
{
    using ComStudio.ViewModels;
    using System.Windows;

    /// <summary>
    /// Interaction logic for Shell.xaml
    /// </summary>
    public partial class Shell : Window
    {
        public Shell()
        {
            InitializeComponent();
        }

        public ShellViewModel ViewModel
        {
            set
            {
                this.DataContext = value;
            }
        }
    }
}