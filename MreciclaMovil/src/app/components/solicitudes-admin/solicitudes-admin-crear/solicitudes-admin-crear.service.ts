import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesAdminCrearService {

  constructor(private http: HttpClient) { }

  enviarSolicitud(datosSolicitud: any) {
    return this.http.post<any>('http://localhost/PhpAngular/MreciclaMovil/Solicitudes/insertarSolicitud.php', datosSolicitud).toPromise();
  }
}
