import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  fullName!: string;
  email!: string;
  gender: string = 'male'; // check male by default, default value should be same as value property in html
  phoneNumber!: number;
  contactPreference!: string;

  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee(empForm: NgForm): void {
    console.log('form is submitted !');
    console.log(empForm);
  }
}
