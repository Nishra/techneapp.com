import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Department } from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departmentPath = environment.apiUrl + 'Departments';
  constructor(private http: HttpClient) {}

  create(data): Observable<Department> {
    return this.http.post<Department>(this.departmentPath, data);
  }

  getDepartments(): Observable<Array<Department>> {
    return this.http.get<Array<Department>>(this.departmentPath);
  }

  getDepartment(id): Observable<Department> {
    return this.http.get<Department>(this.departmentPath + '/'+ id);
  }

  deleteDepartment(id){
    return this.http.delete<Department>(this.departmentPath + '/'+ id);
  }

  editDepartment(data){
    return this.http.put(this.departmentPath,data);
  }

}
