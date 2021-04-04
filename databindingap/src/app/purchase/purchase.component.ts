import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Ipurchase } from './Ipurchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchaseproducts : Ipurchase[] = []
  constructor(private DataService:DataserviceService) { }

  ngOnInit(): void {
    this.purchaseproducts = this.DataService.getPurchaseProducts();

  
  }
}
