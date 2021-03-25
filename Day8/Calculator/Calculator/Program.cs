using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Calculator_Delegate cd = new Calculator_Delegate();
            Calculator_Operations co = new Calculator_Operations();
            Calculator_Delegate.cal_delegate d1 = co.div;
            cd.result(d1, 10, 0);
        }
    }
}
