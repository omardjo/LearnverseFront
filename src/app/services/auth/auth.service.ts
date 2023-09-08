import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  
  login(data: any):Observable<any>{

    return this.http.post(`${this.apiServerUrl}/login`,data);

  }
}
