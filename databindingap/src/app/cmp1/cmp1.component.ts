import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/IProduct';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {
  prod : IProduct[] = []

  constructor(private SharingService :SharingService ) { }

  ngOnInit(): void {

  }
  price : number ;
  getprice():void{
    this.SharingService.setprice(this.price)
  }



  title : string ;
  gettitle():void{
  this.SharingService.settitle(this.title)
  }
}
