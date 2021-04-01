import { IProduct } from "../product/IProduct";

export interface Ipurchase{
    PId : number,
    PName : string,
    PDate : string,
    PVendorName : string ,
    PItem : IProduct[]
    
}