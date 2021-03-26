using System;
using System.Collections.Generic;
using System.Text;

namespace Calculator
{
    class Calculator_Operations
    {
        public int number1 { get; set; }
        public int number2 { get; set; }


        public int sum(int n1, int n2)
        {
            var ans = n1 + n2;
            return ans;
        }
        public int sub(int n1, int n2)
        {
            if (n1 > n2)
            {
                var ans = n1 - n2;
                return ans;
            }
            else
            {
                var ans = n2 - n1;
                return ans;
            }

        }
        public int mul(int n1, int n2)
        {
            var ans = n1 * n2;
            return ans;
        }
        public int div(int n1, int n2)

        {   if (n2 == 0)
            {
                Console.WriteLine("Invalid");
                return 0 ;
            }
            else
            {
                var ans = n1 / n2;
                return ans;
            }
        }
    }
}