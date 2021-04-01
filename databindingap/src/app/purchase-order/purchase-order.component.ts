import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Ipurchase } from '../purchase/Ipurchase';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit ,OnChanges {

  @Input() PurchaseItem : Ipurchase ; 
  Price = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : void{
    console.log(this.PurchaseItem);
    this.PurchaseItem.PItem.forEach(i => {
      this.Price = this.Price + i.Price;
    })
  }

}
