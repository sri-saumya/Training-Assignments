import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  a=400;
  b=300;

  imgSource : string = "../assets/b11.jpeg";
  onmouse1() : void{
    this.imgSource = "../assets/f1.jpeg";
  }

  onmouse2() : void{
    this.imgSource = "../assets/b11.jpeg"
  }
  setwidth() : void{
    this.b = 400
    this.a = 400
  }

}
