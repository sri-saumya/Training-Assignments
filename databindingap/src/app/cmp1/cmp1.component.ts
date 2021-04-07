import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IProduct } from '../product/IProduct';
import { SharingService } from '../sharing.service';


function priceRangeValidator(min:number , max:number) : ValidatorFn{
  return(control:AbstractControl):{[key : string] : boolean} | null => 
  {
    if(control.value !== undefined && (isNaN(control.value) || control.value <min ||control.value >max))
      {
        return{'priceRange':true} ;
      }
      return null;
  };

}

function quantityRangeValidator(min:number , max:number) : ValidatorFn{
  return(control:AbstractControl):{[key : string] : boolean} | null => 
  {
    if(control.value !== undefined && (isNaN(control.value) || control.value <min ||control.value >max))
      {
        return{'priceRange':true} ;
      }
      return null;
  };

}

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {
  prod : IProduct;

  productform : FormGroup;
  min = 100;
  max = 8000;
  qmin = 1;
  qmax = 10000000000000000000;

  constructor(private SharingService :SharingService ) {

   }

  ngOnInit(): void {
      this.SharingService.product$.subscribe(data =>{
        this.prod = data;
      })
      this.productform = new FormGroup(
        {
          Id : new FormControl(this.prod?.Id,[Validators.required]),
          Title : new FormControl(this.prod?.Title,[Validators.required]),
          Price : new FormControl(this.prod?.Price,[priceRangeValidator(this.min,this.max)]),
          Quantity : new FormControl(this.prod?.Quantity,[Validators.required,quantityRangeValidator(this.qmin,this.qmax)]),
          ExpiryDate : new FormControl(this.prod?.ExpiryDate,[Validators.required]),
          inStock : new FormControl(this.prod?.isInStock,[Validators.required]),

        }
      )

    }
    updateProduct(){
        this.SharingService.updateProduct(this.productform.value);
    }

  }


  // Price : number ;
  // getprice():void{
  //   this.SharingService.setprice(this.Price)
  // }



  // Title : string ;
  // gettitle():void{
  // this.SharingService.settitle(this.Title)
  // }


 

