import { Injectable } from '@angular/core';

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