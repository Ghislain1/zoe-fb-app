namespace ComStudio.Infrastructure.Interfaces
{
    using ComStudio.Infrastructure.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    /// <summary>
    /// Provides an easy way to recognize a class that exposes a HeaderInfo that can be used to bind
    /// to a header from XAML.
    /// </summary>
    /// <typeparam name="T">The HeaderInfo type</typeparam>
    public interface IHeaderInfoProvider<T>
    {
        T HeaderInfo { get; }
    }
}