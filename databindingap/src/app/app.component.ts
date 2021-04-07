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
  cmp1 = false;
  cmp2 = false;
  attributeD=false;
  Home=false;
  
  showdemo() : void{
    this.showdatabindingdemo = true;
    this.showdirectivedemo = false;
    this.showmaster = false;
    this.cmp1 = false;
    this.cmp2 = false;
    this.attributeD = false;
    this.Home = false;
    
  

  }
  showd() : void{
    this.showdatabindingdemo = false;
    this.showdirectivedemo = true;
    this.showmaster = false;
    this.cmp1 = false;
    this.cmp2 = false;
    this.attributeD = false;
    this.Home = false;
  

  }
  showmasterdetails() : void{
    this.showdatabindingdemo = false;
    this.showdirectivedemo = false;
    this.showmaster = true;
    this.cmp1 = false;
    this.cmp2 = false;
    this.attributeD = false;
    this.Home = false;

  }

  cmp() : void{
    this.showdatabindingdemo = false;
    this.showdirectivedemo = false;
    this.showmaster = false;
    this.cmp1 = true;
    this.attributeD = false;
    this.Home = false;
    
  }

  attribute() : void{
    this.showdatabindingdemo = false;
    this.showdirectivedemo = false;
    this.showmaster = false;
    this.cmp1 = false;
    this.attributeD = true;
    this.Home = false;

  }
  home() : void{
    this.showdatabindingdemo = false;
    this.showdirectivedemo = false;
    this.showmaster = false;
    this.cmp1 = false;
    this.attributeD = false;
    this.Home = true;

  }

  
}
