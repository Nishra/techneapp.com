import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeService } from './services/employee.service';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';
import { DepartmentService } from './services/department.service';
import { CreateDepartmentsComponent } from './create-departments/create-departments.component';
import { GetDepartmentsComponent } from './get-departments/get-departments.component';
import { EditDepartmentsComponent } from './edit-departments/edit-departments.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, ListEmployeeComponent, CreateEmployeeComponent, GetEmployeeComponent, EditEmployeeComponent, DashboardComponent, ListDepartmentsComponent, CreateDepartmentsComponent, GetDepartmentsComponent, EditDepartmentsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule],
  providers: [AuthService, EmployeeService, DepartmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
