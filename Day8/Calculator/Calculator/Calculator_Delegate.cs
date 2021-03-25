using System;
using System.Collections.Generic;
using System.Text;

namespace Calculator
{
    public class Calculator_Delegate
    {
        public delegate int cal_delegate(int num1, int num2);
        public void result(cal_delegate cd , int n1, int n2)
        {
            var ans = cd(n1, n2);
            Console.WriteLine(ans);
        }
    }
}
