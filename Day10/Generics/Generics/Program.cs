using System;

namespace Generics
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            //int a = 10;
            //object b = a;
            //Console.WriteLine(b);
            TestClass<int> intobj = new TestClass<int>();
            intobj.add(5);
            intobj.add(10);

            TestClass<Product> product = new TestClass<Product>();
            Product p1 = new Product()
            {
                Id = 01,
                Title = "abc",
                Price = 10000
            };
            Product p2 = new Product()
            {
                Id = 02,
                Title = "xyz",
                Price = 500000
            };
            for (int i = 0; i < 2; i++)
            {
                Console.WriteLine(intobj[i]);
                Console.WriteLine(product[i]);
            }

            static void swap<T>(ref T p1, ref T p2)
            {
                T temp;
                temp = p1;
                p1 = p2;
                p2 = temp;
            }
            Console.WriteLine($"Before swapping p1 : {p1} p2 : {p2}");
            swap<Product>(ref p1, ref p2);
            Console.WriteLine($"After swapping p1 : {p1} p2 : {p2}");

        }
    }
}
