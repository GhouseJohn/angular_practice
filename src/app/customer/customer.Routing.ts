import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CustomerComponent } from './customer.component';
import {  customerdetailComponent} from './customerdetail';


const appRoutes: Routes = [
    { path: 'ListofCustomer', component: CustomerComponent },
    { path: 'editcustomer/:id', component: customerdetailComponent },
  ];


  @NgModule({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [ RouterModule ]
  })
  export class CustomerRoutingModule { }