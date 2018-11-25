using System.Windows.Controls;
using System.Windows;
using System.Windows.Media;
using System.Windows.Data;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System;

namespace ComStudio.ChartControls
{
    public class PiePanel : Panel
    {
        // Using a DependencyProperty as the backing store for BeginFigurePoint. This enables
        // animation, styling, binding, etc...
        public static readonly DependencyProperty BeginFigurePointProperty =
            DependencyProperty.RegisterAttached("BeginFigurePoint", typeof(Point), typeof(PiePanel), new UIPropertyMetadata(null));

        // Using a DependencyProperty as the backing store for LineToPoint. This enables animation,
        // styling, binding, etc...
        public static readonly DependencyProperty LineToPointProperty =
            DependencyProperty.RegisterAttached("LineToPoint", typeof(Point), typeof(PiePanel), new UIPropertyMetadata(null));

        // Using a DependencyProperty as the backing store for ValuePath. This enables animation,
        // styling, binding, etc...
        public static readonly DependencyProperty ValuePathProperty =
            DependencyProperty.RegisterAttached("ValuePath", typeof(PropertyPath), typeof(ContinuousAxisPanel), new UIPropertyMetadata(null));

        // Using a DependencyProperty as the backing store for Values. This enables animation,
        // styling, binding, etc...
        public static readonly DependencyProperty ValuesProperty =
            DependencyProperty.RegisterAttached("Values", typeof(ObservableCollection<double>), typeof(PiePanel), new FrameworkPropertyMetadata(null, new PropertyChangedCallback(OnValuesChanged)));

        // Using a DependencyProperty as the backing store for WedgeAngle. This enables animation,
        // styling, binding, etc...
        public static readonly DependencyProperty WedgeAngleProperty =
            DependencyProperty.RegisterAttached("WedgeAngle", typeof(double), typeof(PiePanel), new UIPropertyMetadata(0.0));

        private ItemsControl ParentControl;

        public PropertyPath ValuePath
        {
            get { return (PropertyPath)GetValue(ValuePathProperty); }
            set { SetValue(ValuePathProperty, value); }
        }

        public static Point GetBeginFigurePoint(DependencyObject obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }

            return (Point)obj.GetValue(BeginFigurePointProperty);
        }

        public static Point GetLineToPoint(DependencyObject obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }

            return (Point)obj.GetValue(LineToPointProperty);
        }

        public static ObservableCollection<double> GetValues(DependencyObject obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }

            return (ObservableCollection<double>)obj.GetValue(ValuesProperty);
        }

        public static double GetWedgeAngle(DependencyObject obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }

            return (double)obj.GetValue(WedgeAngleProperty);
        }

        public static void OnValuesChanged(DependencyObject sender, DependencyPropertyChangedEventArgs args)
        {
            PiePanel p = sender as PiePanel;
            if (p != null && GetValues(p) != null)
            {
                p.InvalidateArrange();
                GetValues(p).CollectionChanged += new NotifyCollectionChangedEventHandler(p.PiePanel_CollectionChanged);
            }
        }

        public static void SetBeginFigurePoint(DependencyObject obj, Point value)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }

            obj.SetValue(BeginFigurePointProperty, value);
        }

        public static void SetLineToPoint(DependencyObject obj, Point value)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }

            obj.SetValue(LineToPointProperty, value);
        }

        public static void SetValues(DependencyObject obj, ObservableCollection<double> value)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }

            obj.SetValue(ValuesProperty, value);
        }

        public static void SetWedgeAngle(DependencyObject obj, double value)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }

            obj.SetValue(WedgeAngleProperty, value);
        }

        public void PiePanel_CollectionChanged(object sender, NotifyCollectionChangedEventArgs e)
        {
            InvalidateArrange();
        }

        protected override Size ArrangeOverride(Size finalSize)
        {
            if (GetValues(this) != null)
            {
                double total = 0.0;
                for (int i = 0; i < InternalChildren.Count; i++)
                {
                    total += (double)(GetValues(this)[i]);
                }
                double offsetAngle = 0.0;

                double radius = finalSize.Width < finalSize.Height ? finalSize.Width / 2 : finalSize.Height / 2;
                //radius -= 2;
                Point beginFigure = new Point(finalSize.Width / 2, finalSize.Height / 2);
                Point lineToBeforeTransform = new Point(beginFigure.X + radius, beginFigure.Y);
                for (int i = 0; i < InternalChildren.Count; i++)
                {
                    ContentControl container = InternalChildren[i] as ContentControl;
                    double wedgeAngle = (double)(GetValues(this)[i]) * 360 / total;
                    RotateTransform rt = new RotateTransform(offsetAngle, beginFigure.X, beginFigure.Y);
                    container.SetValue(PiePanel.BeginFigurePointProperty, beginFigure);
                    container.SetValue(PiePanel.LineToPointProperty, rt.Transform(lineToBeforeTransform));
                    container.SetValue(PiePanel.WedgeAngleProperty, wedgeAngle);
                    offsetAngle += wedgeAngle;
                    Rect r = new Rect(finalSize);
                    container.Arrange(r);
                }
            }
            return finalSize;
        }

        protected override Size MeasureOverride(Size availableSize)
        {
            for (int i = 0; i < InternalChildren.Count; i++)
            {
                InternalChildren[i].Measure(availableSize);
            }
            return base.MeasureOverride(availableSize);
        }

        protected override void OnInitialized(System.EventArgs e)
        {
            ParentControl = ((ItemsControl)((FrameworkElement)VisualTreeHelper.GetParent(this)).TemplatedParent);
            base.OnInitialized(e);
        }
    }
}