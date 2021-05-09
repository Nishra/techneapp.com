import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  employees!: Array<Employee>;
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.fetchEmployee();
  }

  fetchEmployee(){
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      this.fetchEmployee();
      this.router.navigate(["employees"])
    });
  }

  editEmployee(id){
    this.router.navigate(["employees",id,"edit"])
  }
}
