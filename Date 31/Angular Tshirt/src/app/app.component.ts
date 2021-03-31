import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T Shirt';

  a=100;
  b=100;

  imgSource : string = "../assets/f.jpg";
  onmouse1() : void{
    this.imgSource = "../assets/b.jpg";
  }

  onmouse2() : void{
    this.imgSource = "../assets/f.jpg"
  }
  setwidth() : void{
    this.b = 200
    this.a = 200
  }
  

}
