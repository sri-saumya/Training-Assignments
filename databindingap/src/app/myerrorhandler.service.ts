import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyerrorhandlerService  implements ErrorHandler{

  constructor() { }
  handleError(error){
    console.log("Here i handle the error !!");
  }
}
