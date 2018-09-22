using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;

namespace ComStudio.Infrastructure.Converters
{
    public class TransactionTypeToStringConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if (value == null || !(value is TransactionType))
            {
                return null;
            }

            TransactionType transactionType = (TransactionType)value;
            return (transactionType == TransactionType.Buy ? "BUY" : "SELL") + " ";
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new System.NotImplementedException();
        }
    }
}