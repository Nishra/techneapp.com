import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../models/Department';
import { DepartmentService } from '../services/department.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departments!: Array<Department>;
  departmentSelected! : Number;
  employeeRegisterForm : FormGroup;
  employeeImageURL = "https://th.bing.com/th/id/Raa738e634dc5746a39d6b2217187d049?rik=atMBoQwrp04Alw&pid=ImgRaw";
  constructor( private router : Router, private departmentService: DepartmentService,private fb: FormBuilder, private employeeService : EmployeeService) { 
    this.employeeRegisterForm = this.fb.group({
      'employeeID':['', Validators.required],
      'employeeName':['', Validators.required],
      'email':['',Validators.required],
      'department':[this.departmentSelected],
      'imageURL':['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.fetchDepartment();
  }

  fetchDepartment(){
    this.departmentService.getDepartments().subscribe((department) => {
      this.departments = department;
    });
  }

  selectDepartment(event :any){
    this.departmentSelected = event.target.value;
  }

  createEmployee(){
    this.employeeService.create(this.employeeRegisterForm.value).subscribe(data=>{
      this.router.navigate(["employees"])
    })
  }

  get employeeID(){
    return this.employeeRegisterForm.get('employeeID');
  }

  get employeeName(){
    return this.employeeRegisterForm.get('employeeName');
  }

  get email(){
    return this.employeeRegisterForm.get('email');
  }

  get department(){
    return this.employeeRegisterForm.get('department');
  }

  get imageURL(){
    return this.employeeRegisterForm.get('imageURL');
  }

  onSelectImage(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (file : any)=>{
        this.employeeImageURL = file.target.result;
      }
    }
  }

}
