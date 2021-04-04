import { Component, OnInit } from '@angular/core';
import { MyerrorhandlerService } from '../myerrorhandler.service';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {
  

  constructor(private MyerrorhandlerService : MyerrorhandlerService) { }
  ab = undefined;
  data: string;

  ngOnInit(): void {
  }
  
  a=400;
  b=300;

  imgSource : string = "../assets/fff.jpg";
  onmouse1() : void{
    this.imgSource = "../assets/bb.jpg";
  }

  onmouse2() : void{
    this.imgSource = "../assets/fff.jpg"
  }
  Onclick()
  {
    this.data = this.ab.indexOf();
  
  }
  setwidth() : void{
    this.b = 400
    this.a = 400
  }

}
