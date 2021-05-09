import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-create-departments',
  templateUrl: './create-departments.component.html',
  styleUrls: ['./create-departments.component.css']
})
export class CreateDepartmentsComponent implements OnInit {
  departmentRegisterForm : FormGroup;
  constructor(private fb: FormBuilder, private departmentService : DepartmentService,private router: Router) { 
    this.departmentRegisterForm = this.fb.group({
      'departmentID':['', Validators.required],
      'departmentName':['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  createDepartment(){
    this.departmentService.create(this.departmentRegisterForm.value).subscribe(data=>{
      this.router.navigate(["departments"])
    })
  }

  get departmentName(){
    return this.departmentRegisterForm.get('departmentName');
  }

  get departmentID(){
    return this.departmentRegisterForm.get('departmentID');
  }

}
