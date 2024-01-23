import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from './login';
@Injectable({
  providedIn: 'root'
})


export class LoginService {
  API: string = 'https://recicladora.arvispace.com/PhpAngular/'

  constructor( private clientService:HttpClient) { }

  verUsuario(datosUsuario:usuario):Observable<any>{
    return this.clientService.post(this.API+"?login=",datosUsuario);
  }
}