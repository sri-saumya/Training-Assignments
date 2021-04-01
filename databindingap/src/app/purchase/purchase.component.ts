import { Component, OnInit } from '@angular/core';
import { Ipurchase } from './Ipurchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchaseproducts : Ipurchase[] = []
  constructor() { }

  ngOnInit(): void {
    this.purchaseproducts = this.getPurchaseProducts();
  }

  getPurchaseProducts() : Ipurchase[] 
  {
    return[
      {
        
        PId : 101,
        PName : "Taazaa",
        PDate : "23-10-1999",
        PVendorName : "Purchase for Batch-1",
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
        
        PId : 102,
        PName : "Taazaa",
        PDate : "23-10-1999",
        PVendorName : "Purchase for Batch-2", 
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
        
        PId : 102,
        PName : "Taazaa",
        PDate : "23-10-1999",
        PVendorName : "Purchase for Batch-3", 
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
        
        PId : 103,
        PName : "Taazaa",
        PDate : "23-10-1999",
        PVendorName : "Purchase for Batch-4",
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
