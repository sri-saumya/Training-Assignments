import { Component, OnInit } from '@angular/core';

import { IProduct } from './IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products : IProduct[] = []
  constructor() {

   }
 
  ngOnInit(): void {
    this.products = this.getProducts();
    
  }

  getProducts() : IProduct[]{
    return[
    {
    Id : 1,
    Title : "Paint",
    Price : 500000,
    ExpiryDate : "12-10-2025",
    isInStock : true,
    Quantity : 600
    },
    {
      Id : 1,
      Title : "Medicine",
      Price : 5000,
      ExpiryDate : "12-10-2050",
      isInStock : true,
      Quantity : 1000
      },
      {
        Id : 2,
        Title : "Bakery",
        Price : 1000,
        ExpiryDate : "12-10-3000",
        isInStock : false,
        Quantity : 0
        },
        {
          Id : 3,
          Title : "Cookies",
          Price : 5000,
          ExpiryDate : "12-10-2060",
          isInStock : false,
          Quantity : 0
          },
          {
            Id : 4,
            Title : "Dairy",
            Price : 34000,
            ExpiryDate : "12-10-3000",
            isInStock : true,
            Quantity : 6000
            },
            {
              Id : 5,
              Title : "Flour",
              Price : 50000,
              ExpiryDate : "12-10-3035",
              isInStock : false,
              Quantity : 0
              },

    ]
  }

}
