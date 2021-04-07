import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'
import { AsynccmpComponent } from './app/asynccmp/asynccmp.component'
import { AtrributeComponent } from './app/atrribute/atrribute.component'
import { BehaviorcmpComponent } from './app/behaviorcmp/behaviorcmp.component'
import { ErrorComponent } from './app/error/error.component'
import { HomeComponent } from './app/home/home.component'
import { LoginComponent } from './app/login/login.component'
import { ParentDSComponent } from './app/parent-ds/parent-ds.component'
import { ProductComponent } from './app/product/product.component'
import { PurchaseComponent } from './app/purchase/purchase.component'
import { ReplaycmpComponent } from './app/replaycmp/replaycmp.component'
import { RxJSComponent } from './app/rx-js/rx-js.component'
import { SubjectcompComponent } from './app/subjectcomp/subjectcomp.component'
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
    {path  : 'rxjs' , component : RxJSComponent },
    {path  : 'rxjs_subject' , component : SubjectcompComponent },
    {path  : 'rxjs_replay' , component : ReplaycmpComponent },
    {path  : 'rxjs_async' , component : AsynccmpComponent },
    {path  : 'rxjs_behavior' , component : BehaviorcmpComponent },
    {path  : '' , redirectTo :'home',pathMatch :'full'  }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}