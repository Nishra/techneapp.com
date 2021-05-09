import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  viewDepartment(){
    this.router.navigate(["departments"])
  }

  viewEmployee(){
    this.router.navigate(["employees"])
  }

  createEmployee(){
    this.router.navigate(["createEmployee"])
  }

  createDepartment(){
    this.router.navigate(["createDepartment"])
  }

}
