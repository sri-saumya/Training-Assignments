import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product/IProduct';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  prod : IProduct= {
    Id : 101,
    Title :"Computer",
    Price : 70000,
    ExpiryDate : "27-09-1999",
    isInStock : true,
    Quantity : 300
  }

  product$ : BehaviorSubject<IProduct>

  constructor() {
      this.product$ = new BehaviorSubject(this.prod);
   }

   setprice(price : number){
      this.prod.Price = price
      //this.product$.next(this.prod);
   }
 

   
   settitle(title : string){
    this.prod.Title = title
    //this.product$.next(this.prod);
 }
}
