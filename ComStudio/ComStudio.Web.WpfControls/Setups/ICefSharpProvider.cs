using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComStudio.Web.WpfControls.Setups
{
    public interface ICefSharpProvider
    {
        string CefSharpSpecificPath { get; }

        void InitializeCefSharp();
    }
}