import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  constructor(private router : Router, private fb: FormBuilder, private authService : AuthService) { 
    this.registerForm = this.fb.group({
      'username':[''],
      'email':[''],
      'password':['']
    })
  }

  ngOnInit(): void {
  }

  register(){
    this.authService.login(this.registerForm.value).subscribe(data=>{
      this.router.navigate(["login"])
    })
  }
}
