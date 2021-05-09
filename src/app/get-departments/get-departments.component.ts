import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../models/Department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-get-departments',
  templateUrl: './get-departments.component.html',
  styleUrls: ['./get-departments.component.css']
})
export class GetDepartmentsComponent implements OnInit {

  id!: string;
  department!: Department;
  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
      this.departmentService.getDepartment(this.id).subscribe((res) => {
        this.department = res;
      });
      
    });
  }

  ngOnInit(): void {
    console.log('test');
  }

}
