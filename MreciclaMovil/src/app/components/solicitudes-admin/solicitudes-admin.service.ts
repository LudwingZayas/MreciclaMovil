import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { solicitud } from './Solicitud';
import { PeriodicElement } from './PeriodicElement';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesAdminService {

  API: string = 'http://localhost/PhpAngular/solicitudes/';

  private correo: string | undefined;
  private nombre: string | undefined;
  private fabrica: string | undefined;
  private tipoUsuario: string | undefined;


  private apiUrl = 'http://localhost/PhpAngular/MreciclaMovil/Solicitudes/ConsultarSolicitudes.php';
  clientService: any;


  constructor(private http: HttpClient) { }

  agregarSolicitud(datosSolicitud:solicitud):Observable<any>{
    return this.http.post(this.API+"?insertarSolicitud=1",datosSolicitud);
  }

  listarSolicitud(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.API+"?Solicitudes=1");
  }

  /*borrarSolicitud(id:any):Observable<any>{
    return this.clientService.delete(this.API+"?borrarSolicitud="+id);
  }*/

  borrarSolicitud(id: any, usuarioEliminador: any): Observable<any> {
    return this.http.delete(`${this.API}?borrarSolicitud=${id}&UsuarioEliminador=${usuarioEliminador}`);
  }


  //Actualizar y consultar
  consultarSolicitudes(id:any): Observable<PeriodicElement> {
    return this.http.get<PeriodicElement>(this.API+"?consultarSolicitudes="+id);

  }

  editarSolicitud(id:any, datosSolicitud:solicitud):Observable<any>{
    return this.http.post(this.API+"?editarSolicitud="+id,datosSolicitud);

  }
  enviarSolicitud(Estado:any):Observable<any>{
    return this.http.get(this.API+"?editarSolicitud="+Estado);

  }
  selectProveedor(){
    return this.http.get<any[]>(this.API+"?selectProveedor")
  }

   // OBTENEMOS EL CORREO DEL LOCALSTORAGE  A LA LISTA DE LOS REGISTROS
   getCorreo(): string {
    return this.correo = localStorage.getItem("Correo") || '';
  }

  // OBTENEMOS EL NOMBRE DEL LOCALSTORAGE  A LA LISTA DE LOS REGISTROS
  getNombre(): string {
    return this.nombre = localStorage.getItem("Nombre") || '';
  }

  getIdFabrica(): string {
    return this.fabrica = localStorage.getItem("idFabrica") || '';
  }

  getTipoUsuario(): string {
    return this.tipoUsuario = localStorage.getItem("NombreTipoUser") || '';
  }





  obtenerSolicitudes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
 
}
