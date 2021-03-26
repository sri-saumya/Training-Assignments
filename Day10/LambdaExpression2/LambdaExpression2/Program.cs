using System;
using System.Linq;
using System.Collections.Generic;
namespace LambdaExpression2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("!--------------!");

            List<Product> product = new List<Product>()
            {

                new Product
                {
                    Id = 01,
                    Owner = "a1",
                    Price = 400
                },

                new Product
                {
                Id = 02,
                Owner = "a2",
                Price = 500
                },

                new Product
                {
                Id = 03,
                Owner = "a3",
                Price = 200
                }
            
            };
            Console.WriteLine("expression: ");
            var owner = product.Where(p => p.Price > 300).Select(p => (p.Id,p.Owner )).ToList();
            owner.ForEach(o => Console.WriteLine(o));

            //var id = product.Where(p => p.Price > 300).Select(p => p.Id).ToList();
            //id.ForEach(i => Console.WriteLine(i));

            Console.WriteLine("Linq: ");
            var owner2 = (from p in product where (p.Price > 300 && p.Id == 1 )select new { p.Id, p.Owner }).ToList();
            owner2.ForEach(o => Console.WriteLine(o));

        }
    }
}
