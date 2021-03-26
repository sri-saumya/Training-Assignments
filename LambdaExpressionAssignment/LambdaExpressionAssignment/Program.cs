using System;
using System.Linq;
using System.Collections;

namespace LambdaExpressionAssignment
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Find word in paragraph");
            string paragraph = "Coding is basically to the computer language " +
                "used to develop apps, websites, and software. Without it, we’d" +
                " have none of the to most popular technology we’ve come to rely on such " +
                "as Facebook, our smartphones the browser we choose to view our" +
                " favorite blogs, or even the blogs themselves. It all runs on code.";

            string word = "to";
            
            var arr = paragraph.Split(" ");

            var count = (from i in arr where i == word select i).ToList();
            Console.WriteLine("Lambda expression : ");
            Console.WriteLine(count.Count());

            var count2 = arr.Where(x => x==word);
            foreach (string element in count2)
            {
                Console.WriteLine($"Element : {element}");

            }
            Console.WriteLine("Linq : ");
            Console.WriteLine(count2.Count());



        }
    }
}
