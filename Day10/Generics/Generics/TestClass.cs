using System;
using System.Collections.Generic;
using System.Text;

namespace Generics
{
    public class TestClass<T>
    {

        T[] obj = new T[5];
        int count = 0;
        public void add(T item)
        {
            if (count + 1 < 6)
            {
                obj[count + 1] = item;
            }
            count++;
        }
        //indexer use to iterate as a array
        public T this[int index]
        {
            get { return obj[index]; }
            set { obj[index] = value; }
        }
        //static void swap<T>(ref T a , ref T b)
        //{
        //    T temp;
        //    temp = a;
        //    a = b;
        //    b = temp;
        //} 

    }
   

    
}
