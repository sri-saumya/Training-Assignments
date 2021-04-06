import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'
import { AtrributeComponent } from './app/atrribute/atrribute.component'
import { ErrorComponent } from './app/error/error.component'
import { HomeComponent } from './app/home/home.component'
import { LoginComponent } from './app/login/login.component'
import { ParentDSComponent } from './app/parent-ds/parent-ds.component'
import { ProductComponent } from './app/product/product.component'
import { PurchaseComponent } from './app/purchase/purchase.component'
import { TshirtdatabindingComponent } from './app/tshirtdatabinding/tshirtdatabinding.component'

const routes : Routes =[
    {path  : 'home' , component : HomeComponent },
    {path  : 'login' , component : LoginComponent },
    {path  : 'databinding' , component : TshirtdatabindingComponent },
    {path  : 'product' , component :ProductComponent  },
    {path  : 'masterdetails' , component : PurchaseComponent },
    {path  : 'directive' , component : AtrributeComponent },
    {path  : 'error' , component : ErrorComponent },
    {path  : 'shareddata' , component : ParentDSComponent },
    {path  : '' , redirectTo :'home',pathMatch :'full'  }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}