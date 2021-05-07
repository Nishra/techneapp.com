import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'createemployee',component:CreateEmployeeComponent},
  {path:'employees',component:ListEmployeeComponent},
  {path:'employees/:id',component:GetEmployeeComponent},
  {path:'employees/:id/edit',component:EditEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
