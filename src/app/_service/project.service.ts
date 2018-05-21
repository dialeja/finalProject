import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project';


const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  urlBase:string = 'api';

  constructor(private http:HttpClient) { }


  getProjects(): Observable<Project[]>{ 
    return this.http.get<Project[]>('api/projects');
  }

  getProject(id:String): Observable<Project>{ 
    return this.http.get<Project>('api/projects/'+id);
  }


  addProject(project:Project):Observable<Project>{ 
    console.log(project);
    return this.http.post<Project>('api/projects',project, cudOptions);
  }

  removeProject(projectId:String):Observable<Project>{ 
    return this.http.delete<Project>('api/projects/'+projectId);
  }

  editProject(project:Project):Observable<Project>{ 
    return this.http.put<Project>('api/projects/',project);
  }
}
