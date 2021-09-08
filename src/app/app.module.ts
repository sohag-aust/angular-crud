import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// router module
import {RouterModule, Routes} from '@angular/router';

// forms module
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

// datepicker module
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// declaring routes
const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent},
  { path: 'create', component: CreateEmployeeComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
