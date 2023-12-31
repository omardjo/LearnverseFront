import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'src/app/models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private apiServerUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }


  getAllSubjects() { 

    return this.http.get<Array<Subject>>(`${this.apiServerUrl}/subject/all/`);
  
  }

 getDegreeById(id:any) {  


  return this.http.get(`${this.apiServerUrl}`+'/'+id+'/');


     }

 createDegree(data:any){


  return this.http.post(`${this.apiServerUrl}/course/create`, data);

  
 }    

 
 updateDegree(id:any,data:any){


  return this.http.put(`${this.apiServerUrl}/university/update/`+id, data);

  
 }    


 deleteDegreeById(id:any){


  return this.http.delete(`${this.apiServerUrl}/university/delete/`+id);

}

}
