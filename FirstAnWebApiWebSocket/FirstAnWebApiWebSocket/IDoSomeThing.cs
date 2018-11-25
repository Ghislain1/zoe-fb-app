using System.Threading.Tasks;

namespace FirstAnWebApiWebSocket
{
    public interface IDoSomeThing
    {
        void DoSome();

        Task DoSomeAsync();
    }
}