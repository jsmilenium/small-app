import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalComponent} from '../personal/personal.component';
import {LoginComponent} from '../login/login.component';
import {AddressComponent} from "../address/address.component";
import {PaymentComponent} from "../payment/payment.component";
import {SuccessComponent} from "../success/success.component";

const routes: Routes = [
    { path: 'personal', component: PersonalComponent },
    { path: 'address', component: AddressComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'login', component: LoginComponent },
    { path: 'success', component: SuccessComponent },
    { path : '', component : LoginComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }