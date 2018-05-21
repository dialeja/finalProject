import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee/model/employee';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  urlBase:string = 'api';

  constructor(private http:HttpClient) { }


  getEmployees(): Observable<Employee[]>{ 
    return this.http.get<Employee[]>('api/employees');
  }

  getEmployee(id:String): Observable<Employee>{ 
    return this.http.get<Employee>('api/employees/'+id);
  }


  addEmployee(employee:Employee):Observable<Employee>{ 
    console.log(employee);
    return this.http.post<Employee>('api/employees',employee, cudOptions);
  }

  removeEmployee(employeeId:String):Observable<Employee>{ 
    return this.http.delete<Employee>('api/employees/'+employeeId);
  }

  editEmployee(employee:Employee):Observable<Employee>{ 
    return this.http.put<Employee>('api/employees/',employee);
  }
}
