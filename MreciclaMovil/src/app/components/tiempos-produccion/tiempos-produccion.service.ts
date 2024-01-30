import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TiemposProduccionService {
  private apiUrl = 'http://localhost/PhpAngular/MreciclaMovil/consultaHorarios.php';

  constructor(private http: HttpClient) { }

  obtenerHorarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
 
}
