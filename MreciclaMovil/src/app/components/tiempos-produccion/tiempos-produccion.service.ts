import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiemposProduccionService {

  constructor(private http: HttpClient) { }

  obtenerDatosDesdePHP() {
    const url = 'http://localhost/PhpAngular/MreciclaMovil/index.php';
    return this.http.get(url);
  }

 
}
