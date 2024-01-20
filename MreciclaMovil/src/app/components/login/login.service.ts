import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from './login';
@Injectable({
  providedIn: 'root'
})


export class LoginService {
  private apiUrl = 'http://localhost/PhpAngular/MreciclaMovil';

  constructor(private http: HttpClient) {}

  iniciarSesion(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
}
}