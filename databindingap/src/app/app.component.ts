import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Webpage';

  showdatabindingdemo = true;
  showdirectivedemo = false;
  
  showdemo() : void{
    this.showdatabindingdemo = true;
    this.showdirectivedemo = false;

  }
  showd() : void{
    this.showdatabindingdemo = false;
    this.showdirectivedemo = true;

  }
}
