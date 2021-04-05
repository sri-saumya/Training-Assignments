import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/IProduct';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {

  product : IProduct; 
   
  constructor(private SharingService : SharingService) {
  }
  ngOnInit() {

      this.SharingService.product$.subscribe(c => {
         this.product = c; 
      });
  }
 
}

 
