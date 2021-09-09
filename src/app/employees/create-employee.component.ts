import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // model binding in create employee form
  employee: Employee = {
    id: null!, // here ! sign is use for avoiding the error = "Type 'null' is not assignable to type T(means any type : string, number etc) "
    name: null!,
    gender: null!,
    email: null!,
    phoneNumber: null!,
    contactPreferance: null!,
    dateOfBirth:new Date(1990, 0, 1),
    department: null!,
    isActive: null!,
    photoPath: null!
  }

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Paroll' }
  ];

  datePickerConfig!: Partial<BsDatepickerConfig>;

  previewPhoto: boolean = false;

  constructor() { 
    this.datePickerConfig = Object.assign(
      {

      },

      { 
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        minDate: new Date(1990,0,1), // month number starts from 0 ends at 11
        maxDate: new Date(2003,0,1)
      }
    );  // here, object.assign() method is very useful for copying property value from one or more source object, 
       // like here, the first parameter is the destination object and the second one is the sources, 
      // here it has one source
  }

  ngOnInit(): void {
  }

  saveEmployee(employee: Employee): void {
    console.log('form is submitted !');
    console.log(employee);
  }

  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
}
