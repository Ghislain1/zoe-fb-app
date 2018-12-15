using System;
using System.Collections.Generic;
using System.Text;
using ZoeHome.Core.Interface;

namespace ZoeHome.Core.Services
{
    public class MachineDateTimeService : IDateTimeService
    {
        public int GetCurrentYear() => DateTime.Now.Year;

        public DateTime GetDateTineNow() => DateTime.Now;
    }
}