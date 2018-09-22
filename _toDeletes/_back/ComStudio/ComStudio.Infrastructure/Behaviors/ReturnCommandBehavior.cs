namespace ComStudio.Infrastructure.Behaviors
{
    using Prism.Interactivity;
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Input;

    /// <summary>
    /// Defines a behavior that executes a <see cref="ICommand"/> when the Return key is pressed
    /// inside a <see cref="TextBox"/>.
    /// </summary>
    /// <remarks>This behavior also supports setting a basic watermark on the <see cref="TextBox"/>.</remarks>
    public class ReturnCommandBehavior : CommandBehaviorBase<TextBox>
    {
        /// <summary>
        /// Initializes a new instance of <see cref="ReturnCommandBehavior"/>.
        /// </summary>
        /// <param name="textBox">
        /// The <see cref="TextBox"/> over which the <see cref="ICommand"/> will work.
        /// </param>
        public ReturnCommandBehavior(TextBox textBox)
            : base(textBox)
        {
            if (textBox == null)
            {
                throw new ArgumentNullException("textBox");
            }

            textBox.AcceptsReturn = false;
            textBox.KeyDown += (s, e) => this.KeyPressed(e.Key);
            textBox.GotFocus += (s, e) => this.GotFocus();
            textBox.LostFocus += (s, e) => this.LostFocus();
        }

        /// <summary>
        /// Gets or Sets the text which is set as water mark on the <see cref="TextBox"/>.
        /// </summary>
        public string DefaultTextAfterCommandExecution { get; set; }

        /// <summary>
        /// Executes the <see cref="ICommand"/> when <paramref name="key"/> is <see cref="Key.Enter"/>.
        /// </summary>
        /// <param name="key">The key pressed on the <see cref="TextBox"/>.</param>
        protected void KeyPressed(Key key)
        {
            if (key == Key.Enter && TargetObject != null)
            {
                ExecuteCommand(TargetObject.Text);

                this.ResetText();
            }
        }

        private void GotFocus()
        {
            if (TargetObject != null && TargetObject.Text == this.DefaultTextAfterCommandExecution)
            {
                this.ResetText();
            }
        }

        private void LostFocus()
        {
            if (TargetObject != null && string.IsNullOrEmpty(TargetObject.Text) && this.DefaultTextAfterCommandExecution != null)
            {
                TargetObject.Text = this.DefaultTextAfterCommandExecution;
            }
        }

        private void ResetText()
        {
            TargetObject.Text = string.Empty;
        }
    }
}