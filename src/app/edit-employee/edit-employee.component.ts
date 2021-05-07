import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeEditForm!: FormGroup;
  employeeID!: string;
  employee!: Employee;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router : Router
  ) {
    this.employeeEditForm = this.fb.group({
      'id':[''],
      'employeeName': [''],
      'email': [''],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.employeeID = params['id'];
      this.employeeService.getEmployee(this.employeeID).subscribe((res) => {
        this.employee = res;
        this.employeeEditForm = this.fb.group({
          'id':[this.employee.id],
          'employeeName': [this.employee.employeeName],
          'email': [this.employee.employeeName],
        });
      });
    });
  }

  editEmployee() {
    this.employeeService.editEmployee(this.employeeEditForm.value).subscribe(res=>{
      this.router.navigate(["employees"])
    })
  }
}
