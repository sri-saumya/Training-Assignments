import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { MyerrorhandlerService } from './myerrorhandler.service';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { ChangecolorDirective } from './changecolor.directive';
import { AtrributeComponent } from './atrribute/atrribute.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { ErrorComponent } from './error/error.component';
import { ParentDSComponent } from './parent-ds/parent-ds.component';

@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    HelloComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
    Cmp1Component,
    Cmp2Component,
    ChangecolorDirective,
    AtrributeComponent,
    HomeComponent,
    ErrorComponent,
    ParentDSComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule
  ],
  providers: [{provide : ErrorHandler, useClass : MyerrorhandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
