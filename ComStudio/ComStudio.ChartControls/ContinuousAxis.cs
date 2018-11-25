using System;

using System.Windows.Controls;
using System.Windows;
using System.Windows.Data;

using System;

using System.Collections;
using System.Collections.ObjectModel;

namespace ComStudio.ChartControls
{
    public class ContinuousAxis : ItemsControl
    {
        // Using a DependencyProperty as the backing store for Orientation. This enables animation,
        // styling, binding, etc...
        public static readonly DependencyProperty OrientationProperty =
            DependencyProperty.Register("Orientation", typeof(Orientation), typeof(ContinuousAxis), new UIPropertyMetadata(Orientation.Vertical));

        // Using a DependencyProperty as the backing store for ZeroReferenceLinePosition. This
        // enables animation, styling, binding, etc...
        public static readonly DependencyProperty OriginProperty =
            DependencyProperty.Register("Origin", typeof(double), typeof(ContinuousAxis), new UIPropertyMetadata(0.0));

        // Using a DependencyProperty as the backing store for ReferenceLineSeperation. This enables
        // animation, styling, binding, etc...
        public static readonly DependencyProperty ReferenceLineSeperationProperty =
            DependencyProperty.Register("ReferenceLineSeperation", typeof(double), typeof(ContinuousAxis), new UIPropertyMetadata(null));

        // Using a DependencyProperty as the backing store for SourceValues. This enables animation,
        // styling, binding, etc...
        public static readonly DependencyProperty SourceValuesProperty =
            DependencyProperty.Register("SourceValues", typeof(ObservableCollection<double>), typeof(ContinuousAxis), new UIPropertyMetadata(null));

        // Using a DependencyProperty as the backing store for TickPositions. This enables animation,
        // styling, binding, etc...
        public static readonly DependencyProperty TickPositionsProperty =
            DependencyProperty.Register("TickPositions", typeof(ObservableCollection<double>), typeof(ContinuousAxis), new UIPropertyMetadata(null));

        // Using a DependencyProperty as the backing store for Values. This enables animation,
        // styling, binding, etc...
        public static readonly DependencyProperty ValuesProperty =
            DependencyProperty.Register("Values", typeof(ObservableCollection<double>), typeof(ContinuousAxis), new UIPropertyMetadata(new ObservableCollection<double>()));

        static ContinuousAxis()
        {
            DefaultStyleKeyProperty.OverrideMetadata(typeof(ContinuousAxis), new FrameworkPropertyMetadata(typeof(ContinuousAxis)));
        }

        public Orientation Orientation
        {
            get { return (Orientation)GetValue(OrientationProperty); }
            set { SetValue(OrientationProperty, value); }
        }

        public double Origin
        {
            get { return (double)GetValue(OriginProperty); }
            set { SetValue(OriginProperty, value); }
        }

        public double ReferenceLineSeperation
        {
            get { return (double)GetValue(ReferenceLineSeperationProperty); }
            set { SetValue(ReferenceLineSeperationProperty, value); }
        }

        public ObservableCollection<double> SourceValues
        {
            get { return (ObservableCollection<double>)GetValue(SourceValuesProperty); }
            set { SetValue(SourceValuesProperty, value); }
        }

        public ObservableCollection<double> TickPositions
        {
            get { return (ObservableCollection<double>)GetValue(TickPositionsProperty); }
            set { SetValue(TickPositionsProperty, value); }
        }

        public ObservableCollection<double> Values
        {
            get { return (ObservableCollection<double>)GetValue(ValuesProperty); }
            set { SetValue(ValuesProperty, value); }
        }

        protected override DependencyObject GetContainerForItemOverride()
        {
            return new ContentControl();
        }

        protected override bool IsItemItsOwnContainerOverride(object item)
        {
            return item is ContentControl;
        }
    }
}