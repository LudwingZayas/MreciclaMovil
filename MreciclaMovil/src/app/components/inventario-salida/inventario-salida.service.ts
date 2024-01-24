import { style } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventarioSalidaService {

  private etiquetas: string[] = [];
  private botones: string[] = [];
  private inputs: string[] = [];

  obtenerBotones(): string[] {
    return this.botones;
  }

  agregarBoton(nombre: string, propiedades: any): void {
    this.botones.push(nombre,propiedades);
  }

  obtenerInputs(): string[] {
    return this.inputs;
  }

  agregarInput(input: string): void {
    this.inputs.push(input);
  }

  obtenerEtiquetas(): string[] {
    return this.etiquetas;
   }
   agregarEtiqueta(etiqueta: string): void {
    this.etiquetas.push(etiqueta);
  }

  constructor() { }
}
