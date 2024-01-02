import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'https://recicladora.arvispace.com/PhpAngular/'

  constructor(
    private clientService:HttpClient
  ) { }

  verificarUsuario(datosUsuario:Usuario):Observable<any>{
    return this.clientService.post(this.API+"?login=",datosUsuario);
  }

}
