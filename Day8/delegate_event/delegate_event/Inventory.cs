using System;
using System.Collections.Generic;
using System.Text;

namespace delegate_event
{
    public class Inventory

    {
        public void Subscribe(Clock theClock)
        {
            theClock.SecondChanged += new Clock.SecondChangeHandler(InventoryTimeHasChanged);
        }
        public void InventoryTimeHasChanged(object theClock, TimeInfoEventArgs ti )
        {
            Console.WriteLine("Inventory Current time : {0} : {1} : {2}", ti.hour.ToString(), ti.minute.ToString(), ti.second.ToString());
        }
        
    }
}
