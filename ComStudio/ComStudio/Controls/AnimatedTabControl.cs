using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Threading;

namespace ComStudio.Controls
{
  /// <summary>
  /// Custom Tab control with animations.
  /// </summary>
  /// <remarks>
  /// This customization of the TabControl was required to create the animations for the transition
  /// between the tab items.
  /// </remarks>
  public class AnimatedTabControl : TabControl
  {
    public static readonly RoutedEvent SelectionChangingEvent = EventManager.RegisterRoutedEvent(
        "SelectionChanging", RoutingStrategy.Direct, typeof(RoutedEventHandler), typeof(AnimatedTabControl));

    private DispatcherTimer timer;

    public AnimatedTabControl()
    {
      DefaultStyleKey = typeof(AnimatedTabControl);
    }

    public event RoutedEventHandler SelectionChanging
    {
      add { AddHandler(SelectionChangingEvent, value); }
      remove { RemoveHandler(SelectionChangingEvent, value); }
    }

    /// <summary>
    /// When overridden in a derived class, is invoked whenever application code or internal processes call
    /// <see cref="M:System.Windows.FrameworkElement.ApplyTemplate" />.
    /// </summary>
    public override void OnApplyTemplate()
    {
      base.OnApplyTemplate();

      //if (image == null)
      //{
      //  // Create main window
      //  Content = image = CreateImage();
      //}

      //if (popup == null)
      //{
      //  popup = CreatePopup();
      //}
    }

    protected override void OnSelectionChanged(SelectionChangedEventArgs e)
    {
      this.Dispatcher.BeginInvoke(
          (Action)delegate
          {
            this.RaiseSelectionChangingEvent();

            this.StopTimer();

            this.timer = new DispatcherTimer { Interval = new TimeSpan(0, 0, 0, 0, 500) };

            EventHandler handler = null;
            handler = (sender, args) =>
                  {
                    this.StopTimer();
                    base.OnSelectionChanged(e);
                  };
            this.timer.Tick += handler;
            this.timer.Start();
          });
    }

    // This method raises the Tap event
    private void RaiseSelectionChangingEvent()
    {
      var args = new RoutedEventArgs(SelectionChangingEvent);
      RaiseEvent(args);
    }

    private void StopTimer()
    {
      if (this.timer != null)
      {
        this.timer.Stop();
        this.timer = null;
      }
    }
  }
}