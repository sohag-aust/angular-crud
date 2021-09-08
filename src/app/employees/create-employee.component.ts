import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Department } from '../models/department.model';

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
  isActive!: boolean;
  department: string = '3';
  dateOfBirth: Date = new Date(1990, 0, 1);

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Paroll' }
  ];

  datePickerConfig!: Partial<BsDatepickerConfig>;

  photoPath!: string;

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

  saveEmployee(empForm: NgForm): void {
    console.log('form is submitted !');
    console.log(empForm);
  }

  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
}
