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
  showmaster = false;
  
  showdemo() : void{
    this.showdatabindingdemo = true;
    this.showdirectivedemo = false;
    this.showmaster = false;
  

  }
  showd() : void{
    this.showdatabindingdemo = false;
    this.showdirectivedemo = true;
    this.showmaster = false;
  

  }
  showmasterdetails() : void{
    this.showdatabindingdemo = false;
    this.showdirectivedemo = false;
    this.showmaster = true;
  

  }
  
}
