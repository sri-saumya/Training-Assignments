using System;
using System.Collections.Generic;
using System.Text;

namespace Generics
{
    class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }


        public int Price { get; set; }

        public override string ToString()
        {
            return ($"id : {Id} title : {Title} price : {Price}");
        }

    }
}
