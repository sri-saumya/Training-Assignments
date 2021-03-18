import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {


  n1:number=9;
  n2:number=9;
  height:number=50
  width:number=150
  operator:string="op";
  result:number=0;
  

  constructor() { }

  ngOnInit(): void {
  }
  add(op:string){
    this.result=this.n1 + this.n2;
    this.operator=op;
  }
  sub(op:string){
    this.result=this.n1 - this.n2;
    this.operator=op;
  }
  mul(op:string){
    this.result=this.n1 * this.n2;
    this.operator=op;
  }
  div(op:string){
    this.result=this.n1 / this.n2;
    this.operator=op;
  }
  mod(op:string){
    this.result=this.n1 % this.n2;
    this.operator=op;
  }

  clr(){
    this.result=0;
    this.n1=0;
    this.n2=0;
  }


}
