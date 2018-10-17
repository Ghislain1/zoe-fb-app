using System;
using System.Globalization;
using System.Windows.Data;

namespace ComStudio.Infrastructure.Converters
{
    public class EnumToBooleanConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if (value == null || parameter == null)
                return false;

            return value.Equals(parameter);
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if (value == null || parameter == null)
                return null;

            if ((bool)value)
                return parameter;

            return null;
        }
    }
}