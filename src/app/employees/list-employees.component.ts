import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [];
  employeeToDisplay!: Employee;
  private arrayIndex: number = 1;

  constructor(private employeeService: EmployeeService) { 

  }

  ngOnInit(): void {
    this.employees = this.employeeService.employees;
    this.employeeToDisplay = this.employees[0];
  }

  nextEmployee(): void {
    if(this.arrayIndex <= 2) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    }else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }

}
