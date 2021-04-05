import { Injectable } from '@angular/core';
import { IProduct } from './product/IProduct';
import { Ipurchase } from './purchase/Ipurchase';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() {

   }

  getProducts() : IProduct[]{
    return[
    {
    Id : 1,
    Title : "Paint",
    Price : 500000,
    ExpiryDate : "12-10-2025",
    isInStock : true,
    Quantity : 600
    },
    {
      Id : 1,
      Title : "Medicine",
      Price : 5000,
      ExpiryDate : "12-10-2050",
      isInStock : true,
      Quantity : 1000
      },
      {
        Id : 2,
        Title : "Bakery",
        Price : 1000,
        ExpiryDate : "12-10-3000",
        isInStock : false,
        Quantity : 0
        },
        {
          Id : 3,
          Title : "Cookies",
          Price : 5000,
          ExpiryDate : "12-10-2060",
          isInStock : false,
          Quantity : 0
          },
          {
            Id : 4,
            Title : "Dairy",
            Price : 34000,
            ExpiryDate : "12-10-3000",
            isInStock : true,
            Quantity : 6000
            },
            {
              Id : 5,
              Title : "Flour",
              Price : 50000,
              ExpiryDate : "12-10-3035",
              isInStock : false,
              Quantity : 0
              },

    ]
  }

  getPurchaseProducts() : Ipurchase[] 
  {
    return[
      {
        
        PId : 1.,
        PName : "Taazaa",
        PDate : "23-10-1999",
        PVendorName : "Microsoft",
        PItem : [
          {
          Id : 1,
          Title : "Medicine",
          Price : 5000,
          ExpiryDate : "12-10-2050",
          isInStock : true,
          Quantity : 1000

          },
          {
            Id : 2,
            Title : "Dairy",
            Price : 10000,
            ExpiryDate : "12-10-2000",
            isInStock : true,
            Quantity : 1000
  
            },
            {
              Id : 1,
              Title : "Grocery",
              Price : 500,
              ExpiryDate : "10-10-2050",
              isInStock : true,
              Quantity : 1000
    
              }

        ]
        
      
      },
      {
        
        PId : 2.,
        PName : "Taazaa",
        PDate : "23-10-1999",
        PVendorName : "Taazaa", 
        PItem : [
          {
            Id : 1,
            Title : "Medicine",
            Price : 5000,
            ExpiryDate : "12-10-2050",
            isInStock : true,
            Quantity : 1000
  
          },
          {
            Id : 1,
            Title : "Medicine",
            Price : 5000,
            ExpiryDate : "12-10-2050",
            isInStock : true,
            Quantity : 1000
  
          },
        ]
      
      },
      {
        
        PId : 3.,
        PName : "Taazaa",
        PDate : "23-10-1999",
        PVendorName : "Google", 
        PItem : [
          {
            Id : 1,
            Title : "Medicine",
            Price : 5000,
            ExpiryDate : "12-10-2050",
            isInStock : true,
            Quantity : 1000
  
          },
          
          {
            Id : 2,
            Title : "Dairy",
            Price : 10000,
            ExpiryDate : "12-10-2000",
            isInStock : true,
            Quantity : 1000
  
            },
            {
              Id : 1,
              Title : "Grocery",
              Price : 500,
              ExpiryDate : "10-10-2050",
              isInStock : true,
              Quantity : 1000
    
              }
        ]
      
      },
      {
        
        PId : 4.,
        PName : "Taazaa",
        PDate : "23-10-1999",
        PVendorName : "HCL",
        PItem : [
          {
            Id : 1,
            Title : "Medicine",
            Price : 5000,
            ExpiryDate : "12-10-2050",
            isInStock : true,
            Quantity : 1000
  
          },
          
          {
            Id : 2,
            Title : "Dairy",
            Price : 10000,
            ExpiryDate : "12-10-2000",
            isInStock : true,
            Quantity : 1000
  
            },
            {
              Id : 1,
              Title : "Grocery",
              Price : 500,
              ExpiryDate : "10-10-2050",
              isInStock : true,
              Quantity : 1000
    
              }
        ] 
      
      },
   
    ]
  }

}
