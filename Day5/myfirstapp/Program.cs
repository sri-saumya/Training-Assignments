using System;

namespace myfirstapp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("Enter your name : ");

            var date = DateTime.Now;
            Console.WriteLine($"Hello {name} on {date}");
            Console.ReadKey(true);
        }
    }
}
