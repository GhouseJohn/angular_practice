import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{PageNotFoundComponent} from './Shared/PageNotFound.Component'
import{LoginComponent} from './login/login.component'
import { RegistrationComponent } from './registration/registration.component'


const routes: Routes = [
{path:'Login',component:LoginComponent},
{path:'Registration',component:RegistrationComponent},
 {path:'',component:LoginComponent},
 {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
