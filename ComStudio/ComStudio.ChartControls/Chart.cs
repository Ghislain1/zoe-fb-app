namespace ComStudio.ChartControls
{
    using System.Windows;
    using System.Windows.Controls;

    public class Chart : ItemsControl

    {
        public static readonly DependencyProperty TitleProperty =

            DependencyProperty.Register("Title", typeof(object), typeof(Chart), new UIPropertyMetadata(null));

        public static readonly DependencyProperty TitleTemplateProperty =

            DependencyProperty.Register("TitleTemplate", typeof(DataTemplate), typeof(Chart), new UIPropertyMetadata(null));

        public static readonly DependencyProperty TitleTemplateSelectorProperty =

            DependencyProperty.Register("TitleTemplateSelector", typeof(DataTemplateSelector), typeof(Chart), new UIPropertyMetadata(null));

        public object Title

        {
            get { return (object)GetValue(TitleProperty); }

            set { SetValue(TitleProperty, value); }
        }

        // Using a DependencyProperty as the backing store for Title. This enables animation,
        // styling, binding, etc...
        public DataTemplate TitleTemplate

        {
            get { return (DataTemplate)GetValue(TitleTemplateProperty); }

            set { SetValue(TitleTemplateProperty, value); }
        }

        // Using a DependencyProperty as the backing store for TitleTemplate. This enables animation,
        // styling, binding, etc...
        public DataTemplateSelector TitleTemplateSelector

        {
            get { return (DataTemplateSelector)GetValue(TitleTemplateSelectorProperty); }

            set { SetValue(TitleTemplateSelectorProperty, value); }
        }

        protected override System.Windows.DependencyObject GetContainerForItemOverride()

        {
            return new ChartItem();
        }

        protected override bool IsItemItsOwnContainerOverride(object item)

        {
            return item is ChartItem;
        }

        // Using a DependencyProperty as the backing store for TitleTemplateSelector. This enables
        // animation, styling, binding, etc...
    }
}