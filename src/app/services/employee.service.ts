import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeePath = environment.apiUrl + 'Employees';
  constructor(private http: HttpClient) {}

  create(data): Observable<Employee> {
    return this.http.post<Employee>(this.employeePath, data);
  }

  getEmployees(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(this.employeePath);
  }

  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.employeePath + '/'+ id);
  }

  getEmployeeDepartment(id): Observable<string> {
    return this.http.get<string>(this.employeePath + '/'+ id + '/'+ 'getEmployeeDepartment');
  }

  deleteEmployee(id){
    return this.http.delete<Employee>(this.employeePath + '/'+ id);
  }

  editEmployee(data){
    return this.http.put(this.employeePath,data);
  }
}
