import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular, Testing Service, Check Console Please';
   public employees = [];

   constructor( public _empservice : EmployeeService ){

   }
   ngOnInit(){
     this.employees = this._empservice.getEmployees();
     console.log(this.employees);
   }
}
