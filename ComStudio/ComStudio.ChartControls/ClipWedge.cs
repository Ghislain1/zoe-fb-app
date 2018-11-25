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

namespace ComStudio.ChartControls
{
    public class ClipWedge : ContentControl

    {
        public static readonly DependencyProperty BeginFigurePointProperty =

            DependencyProperty.Register("BeginFigurePoint", typeof(Point), typeof(ClipWedge), new UIPropertyMetadata(new Point(), new PropertyChangedCallback(OnWedgeShapeChanged)));

        public static readonly DependencyProperty LineToPointProperty =

            DependencyProperty.Register("LineToPoint", typeof(Point), typeof(ClipWedge), new UIPropertyMetadata(new Point(), new PropertyChangedCallback(OnWedgeShapeChanged)));

        public static readonly DependencyProperty WedgeAngleProperty =

            DependencyProperty.Register("WedgeAngle", typeof(double), typeof(ClipWedge), new UIPropertyMetadata(0.0, new PropertyChangedCallback(OnWedgeShapeChanged)));

        // Using a DependencyProperty as the backing store for LineTo. This enables animation,
        // styling, binding, etc...
        private static Random r;

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1810:InitializeReferenceTypeStaticFieldsInline")]
        static ClipWedge()

        {
            r = new Random();
        }

        // Using a DependencyProperty as the backing store for WedgeAngle. This enables animation,
        // styling, binding, etc...
        public Point BeginFigurePoint

        {
            get { return (Point)GetValue(BeginFigurePointProperty); }

            set { SetValue(BeginFigurePointProperty, value); }
        }

        // Using a DependencyProperty as the backing store for BeginFigurePoint. This enables
        // animation, styling, binding, etc...
        public Point LineToPoint

        {
            get { return (Point)GetValue(LineToPointProperty); }

            set { SetValue(LineToPointProperty, value); }
        }

        public double WedgeAngle

        {
            get { return (double)GetValue(WedgeAngleProperty); }

            set { SetValue(WedgeAngleProperty, value); }
        }

        public static void OnWedgeShapeChanged(DependencyObject sender, DependencyPropertyChangedEventArgs args)

        {
            ClipWedge c = sender as ClipWedge;

            if (c != null)

                c.InvalidateArrange();
        }

        public StreamGeometry GetClipGeometry(Size arrangeBounds)

        {
            StreamGeometry clip = new StreamGeometry();

            StreamGeometryContext clipGC = clip.Open();

            clipGC.BeginFigure(BeginFigurePoint, true, true);

            clipGC.LineTo(LineToPoint, false, true);

            Vector v = LineToPoint - BeginFigurePoint;

            RotateTransform rt = new RotateTransform(WedgeAngle, BeginFigurePoint.X, BeginFigurePoint.Y);

            bool isLargeArc = WedgeAngle > 180.0;

            clipGC.ArcTo(rt.Transform(LineToPoint), new Size(v.Length, v.Length), WedgeAngle, isLargeArc, SweepDirection.Clockwise, false, true);

            clipGC.Close();

            return clip;
        }

        protected override Size ArrangeOverride(Size arrangeBounds)

        {
            Clip = GetClipGeometry(arrangeBounds);

            return base.ArrangeOverride(arrangeBounds);
        }
    }
}