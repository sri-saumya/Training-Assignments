
  import { Component, OnInit } from '@angular/core';
  import { Product } from '../Product';
  
  @Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
  })
  export class HelloComponent implements OnInit {
  
    products: Product[]=[];
    constructor() { }
  
    ngOnInit(): void {
      this.products = this.getProducts();
    }
  
    getProducts(): Product[]
    {
      return [
        {
          ID: 1,
          Title: "Pen",
          Color: "Red",
          Price: 200,
          ExpiryDate: '1-1-2020'
        },
        {
          ID: 2,
          Title: "Pencil",
          Color: "Black",
          Price: 300,
          ExpiryDate: '2-1-2020'
        },
        {
          ID: 3,
          Title: "Bat",
          Color: "Blue",
          Price: 400,
          ExpiryDate: '3-1-2020'
        },
        {
          ID: 4,
          Title: "Cat",
          Color: "Yellow",
          Price: 500,
          ExpiryDate: '4-1-2020'
        },
        {
          ID: 5,
          Title: "Laptop",
          Color: "White",
          Price: 1200,
          ExpiryDate: '5-1-2020'
        }
      ]
    }
  
  }
  
  

