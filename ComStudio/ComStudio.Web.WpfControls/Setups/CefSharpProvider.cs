using CefSharp;
using CefSharp.Wpf;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ComStudio.Web.WpfControls.Setups
{
    public class CefSharpProvider : ICefSharpProvider
    {
        private string cefSharpSpecificPath;

        public CefSharpProvider()
        {
            string appBase = AppDomain.CurrentDomain.SetupInformation.ApplicationBase;
            string bitProcess = Environment.Is64BitProcess ? "x64" : "x86";
            this.cefSharpSpecificPath = Path.Combine(appBase, bitProcess);

            //Add Custom assembly resolver
            AppDomain.CurrentDomain.AssemblyResolve += Resolver;
        }

        public string CefSharpSpecificPath { get => this.cefSharpSpecificPath; }

        [MethodImpl(MethodImplOptions.NoInlining)]
        public void InitializeCefSharp()
        {
            var settings = new CefSettings();

            // Set BrowserSubProcessPath based on app bitness at runtime
            settings.BrowserSubprocessPath = Path.Combine(this.cefSharpSpecificPath, "CefSharp.BrowserSubprocess.exe");

            // Make sure you set performDependencyCheck false
            Cef.Initialize(settings, performDependencyCheck: false, browserProcessHandler: null);

            //TODO: Ghislain
            var ds = settings.UserDataPath;
        }

        // Will attempt to load missing assembly from either x86 or x64 subdir Required by CefSharp
        // to load the unmanaged dependencies when running using AnyCPU
        private Assembly Resolver(object sender, ResolveEventArgs args)
        {
            Assembly toReturnAssembly = null;
            if (args.Name.StartsWith("CefSharp"))
            {
                string assemblyName = args.Name.Split(new[] { ',' }, 2)[0] + ".dll";
                string archSpecificPath = Path.Combine(this.cefSharpSpecificPath, assemblyName);

                if (File.Exists(archSpecificPath))
                {
                    toReturnAssembly = Assembly.LoadFile(archSpecificPath);
                }
            }

            return toReturnAssembly;
        }
    }
}