import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  name ="Amarnath";
  designation="Traine";
  salary=25000;
  emailID="amarnath@nestgroup.net";
  company="NeST Digital"
}
