
import{NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer.Routing'
import { CustomerComponent } from './customer.component'


@NgModule({
    imports: [CommonModule,ReactiveFormsModule, CustomerRoutingModule ],
    

    declarations: [
        CustomerComponent,
        
      ]
  })

export class customerModule{

}