
import{NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import{EmployeeRoutingModule} from './employee.Routing'
import{EmployeeComponent} from './employee.component'
import{employeeGuard} from './employee.Guard'

@NgModule({
    imports: [CommonModule,ReactiveFormsModule, EmployeeRoutingModule ],
    

    declarations: [ EmployeeComponent,        
      ],
      providers:[employeeGuard]
  })

export class employeeModule{

}