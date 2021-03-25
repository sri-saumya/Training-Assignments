using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery
{
    public class Agent
    {
        public delegate void NotificationHandler(object agent, NotificationEventArgs notificationInfo);
        public event NotificationHandler notificationChanged;
        public delegate bool tasksenddelegate(Message m);
        private bool isTaskCompleted = false;

        public void doTask(tasksenddelegate task, Message m)
        {
            NotificationEventArgs notificationInfo = new NotificationEventArgs(isTaskCompleted);
            if(isTaskCompleted == false)
            {
                if(notificationChanged != null)
                {
                    Console.WriteLine("start");
                    notificationChanged(this, notificationInfo);
                }
            }
            isTaskCompleted = true;
            if (isTaskCompleted)
            {
                var status = task(m);
                if(notificationChanged != null)
                {
                    notificationChanged(this, notificationInfo);
                    Console.WriteLine("ty");
                }
            }
        }
    }
}
