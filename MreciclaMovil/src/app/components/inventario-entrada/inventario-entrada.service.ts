import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventarioEntradaService {
  private apiUrl = 'http://localhost/PhpAngular/MreciclaMovil/ConsultarInventarioEntrada.php';

  constructor(private http: HttpClient) { }

  obtenerInventarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
