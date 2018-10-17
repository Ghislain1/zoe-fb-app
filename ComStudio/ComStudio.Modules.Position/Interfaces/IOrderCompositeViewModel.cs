using ComStudio.Modules.Position.Models;
using System;
using System.Windows.Input;

namespace ComStudio.Modules.Position.Interfaces
{
    public interface IOrderCompositeViewModel
    {
        event EventHandler CloseViewRequested;

        ICommand CancelCommand { get; }
        int Shares { get; }
        ICommand SubmitCommand { get; }
        TransactionInfo TransactionInfo { get; set; }
    }
}