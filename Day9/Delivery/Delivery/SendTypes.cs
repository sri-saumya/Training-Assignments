using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery
{
    public static class SendTypes
    {
        public static bool SendByEmail(Message m)
        {
            Console.WriteLine($"{m.Content} is deliver by email to :  {m.Address}");
            return true;
        }
        public static bool SendByCar(Message m)
        {
            Console.WriteLine($"{m.Content} is deliver by car to :  {m.Address}");
            return true;
        }
        public static bool SendByShip(Message m)
        {
            Console.WriteLine($"{m.Content} is deliver by ship to :  {m.Address}");
            return true;
        }
    }
}
