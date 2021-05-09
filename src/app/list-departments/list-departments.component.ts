import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/Department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-list-departments',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.css']
})
export class ListDepartmentsComponent implements OnInit {

  departments!: Array<Department>;
  constructor(private departmentService: DepartmentService, private router: Router) {}

  ngOnInit(): void {
    this.fetchDepartment();
  }

  fetchDepartment(){
    this.departmentService.getDepartments().subscribe((department) => {
      this.departments = department;
    });
  }

  deleteDepartment(id) {
    this.departmentService.deleteDepartment(id).subscribe((res) => {
      this.fetchDepartment();
      this.router.navigate(["departments"])
    });
  }

  editDepartment(id){
    this.router.navigate(["departments",id,"edit"])
  }

}
