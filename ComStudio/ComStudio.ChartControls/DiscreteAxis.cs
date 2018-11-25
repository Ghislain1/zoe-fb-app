using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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

namespace ComStudio.ChartControls
{
    public class DiscreteAxis : ItemsControl

    {
        public static readonly DependencyProperty OrientationProperty =

            DependencyProperty.Register("Orientation", typeof(Orientation), typeof(DiscreteAxis), new UIPropertyMetadata(Orientation.Horizontal));

        public static readonly DependencyProperty OriginProperty =

            DependencyProperty.Register("Origin", typeof(double), typeof(DiscreteAxis), new UIPropertyMetadata(0.0));

        public static readonly DependencyProperty TickLengthProperty =

            DependencyProperty.Register("TickLength", typeof(double), typeof(DiscreteAxis), new UIPropertyMetadata(null));

        public static readonly DependencyProperty TickPositionsProperty =

            DependencyProperty.Register("TickPositions", typeof(ObservableCollection<double>), typeof(DiscreteAxis), new UIPropertyMetadata(null));

        static DiscreteAxis()

        {
            DefaultStyleKeyProperty.OverrideMetadata(typeof(DiscreteAxis), new FrameworkPropertyMetadata(typeof(DiscreteAxis)));
        }

        // Using a DependencyProperty as the backing store for Origin. This enables animation,
        // styling, binding, etc...
        public Orientation Orientation

        {
            get { return (Orientation)GetValue(OrientationProperty); }

            set { SetValue(OrientationProperty, value); }
        }

        // Using a DependencyProperty as the backing store for DiscreteAxisTickPositions. This
        // enables animation, styling, binding, etc...
        public double Origin

        {
            get { return (double)GetValue(OriginProperty); }

            set { SetValue(OriginProperty, value); }
        }

        // Using a DependencyProperty as the backing store for Orientation. This enables animation,
        // styling, binding, etc...
        public double TickLength

        {
            get { return (double)GetValue(TickLengthProperty); }

            set { SetValue(TickLengthProperty, value); }
        }

        public ObservableCollection<double> TickPositions

        {
            get { return (ObservableCollection<double>)GetValue(TickPositionsProperty); }

            set { SetValue(TickPositionsProperty, value); }
        }

        protected override DependencyObject GetContainerForItemOverride()

        {
            //return new DiscreteAxisItem();

            return new ContentControl();
        }

        protected override bool IsItemItsOwnContainerOverride(object item)

        {
            return item is ContentControl;

            //return item is DiscreteAxisItem;
        }

        // Using a DependencyProperty as the backing store for TickLength. This enables animation,
        // styling, binding, etc...
    }
}