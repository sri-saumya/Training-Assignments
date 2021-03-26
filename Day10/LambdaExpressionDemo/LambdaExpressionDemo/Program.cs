using System;

namespace LambdaExpressionDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello Lambda Expresion !!");
            Func<int, int> square = (x) => x * x;
            System.Linq.Expressions.Expression<Func<int, int>> e = x => x * x;
            var a = e.Compile();

            Console.WriteLine(a(6));
        }
    }
}
