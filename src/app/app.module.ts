import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, RouterOutlet, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { NavbarEmployeeComponent } from './navbar-employee/navbar-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { FormsModule } from '@angular/forms';
const myRouter:Routes=[{
  path:"",
  component:LoginComponent
},{
  path:"add",
  component:AddEmployeeComponent
},
{
  path:"edit",
  component:EditEmployeeComponent
},
{
  path:"search",
  component:SearchEmployeeComponent
},
{
  path:"view",
  component:ViewEmployeeComponent
},{
  path:"delete",
  component:DeleteEmployeeComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    SearchEmployeeComponent,
    DeleteEmployeeComponent,
    NavbarEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
