import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css'],
})
export class GetEmployeeComponent implements OnInit {
  id!: string;
  employee!: Employee;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
      this.employeeService.getEmployee(this.id).subscribe((res) => {
        this.employee = res;
      });
    });
  }

  ngOnInit(): void {
    console.log('Helloo');
  }
}
