using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery
{
    public class Manager
    {
        public delegate bool sendmszDelegate(Message m);
        private Agent.tasksenddelegate td;
        Agent a;
        public Manager()
        {
            a = new Agent();

        }
        public void RequestDelivery(Message m, sendmszDelegate t)
        {
            td = new Agent.tasksenddelegate(t);
            a.doTask(td, m);
            a.notificationChanged += new Agent.NotificationHandler((o,e)=>
            {
                Console.WriteLine(e.status);

            });
        }
    }
}
