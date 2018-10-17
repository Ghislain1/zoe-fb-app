using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Interactivity;

namespace ComStudio.Modules.Startpage.Behaviours
{
    public class TextBoxBindingUpdateOnEnterBehaviour : Behavior<TextBox>
    {
        protected override void OnAttached() => AssociatedObject.KeyDown += OnTextBoxKeyDown;

        protected override void OnDetaching() => AssociatedObject.KeyDown -= OnTextBoxKeyDown;

        private void OnTextBoxKeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                var txtBox = sender as TextBox;
                txtBox.GetBindingExpression(TextBox.TextProperty).UpdateSource();
            }
        }
    }
}