import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../models/Department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-edit-departments',
  templateUrl: './edit-departments.component.html',
  styleUrls: ['./edit-departments.component.css']
})
export class EditDepartmentsComponent implements OnInit {

  departmentEditForm!: FormGroup;
  departmentID!: string;
  department!: Department;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private router : Router
  ) {
    this.departmentEditForm = this.fb.group({
      'id':[''],
      'departmentName': [''],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.departmentID = params['id'];
      this.departmentService.getDepartment(this.departmentID).subscribe((res) => {
        this.department = res;
        this.departmentEditForm = this.fb.group({
          'id':[this.department.id],
          'departmentName': [this.department.departmentName]
        });
      });
    });
  }

  editDepartment() {
    this.departmentService.editDepartment(this.departmentEditForm.value).subscribe(res=>{
      this.router.navigate(["departments"])
    })
  }

}
