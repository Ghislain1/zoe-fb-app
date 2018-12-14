using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlyGui.DataAccessLib.Extensions
{
    public static class CollectionExtensions
    {
        public static async Task<T> FirstOrDefaultAsync<T>(this IEnumerable<T> currentCollection, IEnumerable<Task<T>> tasks)
        {
            await Task.Delay(1000);

            Task<IEnumerable<T>> sas = Task.Factory.StartNew(() => currentCollection);

            IEnumerable<Task<T>> taskCurrentCollection = Task.FromResult(sas);

            var first = await Task.WhenAny(tasks);
            return await first;
        }

        public static Task<T> Gett(this IEnumerable<T> currentCollection)
        {
            foreach (var item in currentCollection)
            {
                yield return item;
            }
        }
    }
}