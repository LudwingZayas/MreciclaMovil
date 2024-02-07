import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesAdminService {
  private apiUrl = 'http://localhost/PhpAngular/MreciclaMovil/Solicitudes/ConsultarSolicitudes.php';

  constructor(private http: HttpClient) { }

  obtenerSolicitudes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
 
}
