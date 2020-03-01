import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{HeadderComponent} from './Shared/HeadderComponent';
import{employeeModule} from './employee/employee.Module'
import{PageNotFoundComponent} from './Shared/PageNotFound.Component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'
import { customerModule } from './customer/customer.Module'

@NgModule({
  declarations: [
    AppComponent,HeadderComponent,PageNotFoundComponent, LoginComponent,RegistrationComponent,
  ],
  imports: [
    BrowserModule,employeeModule,customerModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
