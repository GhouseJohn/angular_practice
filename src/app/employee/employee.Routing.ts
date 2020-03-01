import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import{EmployeeComponent} from './employee.component';
import{employeedetailComponent} from './employeedetail';
import{employeeGuard} from   './employee.Guard'

const appRoutes: Routes = [
    { path: 'ListofEmployee', component: EmployeeComponent,canActivate:[employeeGuard] },
    { path: 'editemployee/:id', component: employeedetailComponent },
  ];


  @NgModule({
    imports: [ RouterModule.forChild(appRoutes)],
    exports: [ RouterModule ]
  })
  export class EmployeeRoutingModule { }