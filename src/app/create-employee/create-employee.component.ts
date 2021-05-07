import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeRegisterForm : FormGroup;
  employeeImageURL = "https://th.bing.com/th/id/Raa738e634dc5746a39d6b2217187d049?rik=atMBoQwrp04Alw&pid=ImgRaw";
  constructor(private fb: FormBuilder, private employeeService : EmployeeService) { 
    this.employeeRegisterForm = this.fb.group({
      'employeeName':['', Validators.required],
      'email':['',Validators.required],
      'department':[''],
      'imageURL':['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  createEmployee(){
    this.employeeService.create(this.employeeRegisterForm.value).subscribe(data=>{
      console.log(data)
    })
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
