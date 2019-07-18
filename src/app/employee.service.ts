import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { 

  }

  getEmployees(){
    return [
        {"firstName":"John", "lastName":"Doe"}, 
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
    ]
  }

}