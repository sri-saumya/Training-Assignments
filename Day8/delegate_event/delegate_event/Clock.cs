using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace delegate_event
{
    public class Clock
    {
        private int hour;
        private int minute;
        private int second;

        public object TimeInfoEventArgs { get; private set; }

        public delegate void SecondChangeHandler(object Clock, TimeInfoEventArgs timeinfo);
        public event SecondChangeHandler SecondChanged;

        public void Run()
        {
            for(; ; )
            {
                Thread.Sleep(200);
                System.DateTime dt = System.DateTime.Now;
                if(dt.Second != second)
                {
                    TimeInfoEventArgs timeInfo = new TimeInfoEventArgs(dt.Hour, dt.Minute, dt.Second);
                    if(SecondChanged != null)
                    {
                        SecondChanged(this, timeInfo);
                    }
                }
                this.second = dt.Second;
                this.minute = dt.Minute;
                this.hour = dt.Hour;
            }
        }

        
            
        }
    }
