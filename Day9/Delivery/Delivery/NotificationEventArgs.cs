using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery
{
    public class NotificationEventArgs : EventArgs
    
    {
        public bool status;
        public NotificationEventArgs(bool a)
        {
            status = a;
        }

    }
}
