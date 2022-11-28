import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
data:any =  [{"name":"Amarnath", 
"designation":"Traine",
"salary":25000,
"emailID:":"amarnath@nestgroup.net",
"company":"NeST Digital"},
{"name":"Jude",
  "designation":"Ceo",
  "salary":50000,
  "emailID:":"jude@nestgroup.net",
  "company":"NeST Digital"},
  {"name":"Sam",
  "designation":"HR",
  "salary":35000,
  "emailID:":"amarnath@nestgroup.net",
  "company":"NeST Digital"},
  {"name":"StanLee",
  "designation":"Manager",
  "salary":75000,
  "emailID:":"stanlee@nestgroup.net",
  "company":"NeST Digital"},
  {"name":"Hendry",
  "designation":"Traine",
  "salary":26000,
  "emailID:":"henry@nestgroup.net",
  "company":"NeST Digital"},
  {"name":"Hellboy",
  "designation":"Traine",
  "salary":28000,
  "emailID:":"hellboy@nestgroup.net",
  "company":"NeST Digital"},
  {"name":"Jennie",
  "designation":"Traine",
  "salary":24500,
  "emailID:":"jennie@nestgroup.net",
  "company":"NeST Digital"}]
}
