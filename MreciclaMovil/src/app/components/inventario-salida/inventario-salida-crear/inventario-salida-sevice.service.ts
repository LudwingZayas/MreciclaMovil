import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioSalidaSeviceService {

  private etiquetas: string[] = [];
 

  obtenerEtiquetas(): string[] {
    return this.etiquetas;
   }
   agregarEtiqueta(etiqueta: string): void {
    this.etiquetas.push(etiqueta);
  }
  constructor() {
   
  }

 
}