import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {

  @Input()
  employee!: Employee;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;

    const previousEmployeeName = previousEmployee ? previousEmployee.name : 'NULL';
    const currentEmployeeName = currentEmployee.name;

    console.log(`Previous Employee Name: ${previousEmployeeName}`);
    console.log(`Current Employee Name: ${currentEmployeeName}`);
  }

}
