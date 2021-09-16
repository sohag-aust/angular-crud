import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  private _employee!: Employee;

  @Input()
  set employee(emp: Employee) {
    console.log(`Previous Employee Name: ${this.employee ? this.employee.name : 'NULL'}`);
    console.log(`Current Employee Name: ${emp.name}`);
    this._employee = emp;
  }

  get employee(): Employee {
    return this._employee;
  } 

  constructor() { }

  ngOnInit(): void {

  }

}
