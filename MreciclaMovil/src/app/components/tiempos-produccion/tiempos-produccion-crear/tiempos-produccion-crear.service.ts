import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiemposProduccionCrearService {
  private apiUrl = 'http://localhost/PhpAngular/MreciclaMovil/horarios.php';

  constructor(private http: HttpClient) {}


  registrarHoraInicio() {
    return this.http.post(`${this.apiUrl}`, { accion: 'inicio' });
  }

  registrarHoraSalida() {
    return this.http.post(`${this.apiUrl}`, { accion: 'salida' });
  }
}
