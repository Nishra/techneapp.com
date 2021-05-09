import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentsComponent } from './create-departments/create-departments.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditDepartmentsComponent } from './edit-departments/edit-departments.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { GetDepartmentsComponent } from './get-departments/get-departments.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'createEmployee',component:CreateEmployeeComponent},
  {path:'employees',component:ListEmployeeComponent},
  {path:'employees/:id',component:GetEmployeeComponent},
  {path:'employees/:id/edit',component:EditEmployeeComponent},
  {path:'createDepartment',component:CreateDepartmentsComponent},
  {path:'departments',component:ListDepartmentsComponent},
  {path:'departments/:id',component:GetDepartmentsComponent},
  {path:'departments/:id/edit',component:EditDepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
