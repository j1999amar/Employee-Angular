import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  
})
export class AddEmployeeComponent { 
  code=""
  name=""
  designation=""
  salary=""
  address=""
  dateofjoin=""
  company=""
 readValue =()=>{
  let data=[{
    "Name":this.name,
    "Designation":this.designation,
    "Salary":this.salary,
    "Address":this.address,
    "Date of join" : this.dateofjoin,
  }]
  console.log(data)

}
  


}
