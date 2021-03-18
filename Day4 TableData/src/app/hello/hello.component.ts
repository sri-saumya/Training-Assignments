import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  products:Product[]=[];

  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
      console.log(this.products);
  }

  getProducts():Product[] {
  return [
    {
      Id: 1,
      Title: "Pen",
      Color: "Red",
      Price:50,
      ExpiryDate:"1-1-2021",
    },

    {
      Id: 2,
      Title: "Pencil",
      Color: "Blue",
      Price:5,
      ExpiryDate:"3-1-2021",
    },
    {
      Id: 3,
      Title: "Pen",
      Color: "Black",
      Price: 100,
      ExpiryDate:"1-2-2021",
    },

    {
      Id: 2,
      Title: "Bottle",
      Color: "Grey",
      Price:5,
      ExpiryDate:"1-5-2021",
    },
    {
      Id: 3,
      Title: "Paper",
      Color: "Black",
      Price: 100,
      ExpiryDate:"1-3-2021",
    },
  ]
}

}
