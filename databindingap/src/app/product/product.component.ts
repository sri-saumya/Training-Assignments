import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

import { IProduct } from './IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products : IProduct[] = []
  constructor(private DataService:DataserviceService) {

   }
 
  ngOnInit(): void {
    this.products = this.DataService.getProducts();
    
  }

  
}
