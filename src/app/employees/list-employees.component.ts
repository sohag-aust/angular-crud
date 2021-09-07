import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreferance: 'Email',
      email: 'kudvenkat@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/p1.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreferance: 'Phone',
      phoneNumber: 1944556677,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/p2.jpg'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreferance: 'Phone',
      phoneNumber: 1966998801,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/p3.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
