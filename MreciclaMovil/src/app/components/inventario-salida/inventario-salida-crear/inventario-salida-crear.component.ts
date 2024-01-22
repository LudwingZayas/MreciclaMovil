import { Component, OnInit } from '@angular/core';
import { InventarioSalidaSeviceService } from './inventario-salida-sevice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventario-salida-crear',
  templateUrl: './inventario-salida-crear.component.html',
  styleUrls: ['./inventario-salida-crear.component.scss'],
})
export class InventarioSalidaCrearComponent  implements OnInit {

  etiquetas: string[];
  formulario: FormGroup;
 
  constructor(private inventarioSalService: InventarioSalidaSeviceService, private formBuilder: FormBuilder) {
    this.etiquetas = inventarioSalService.obtenerEtiquetas();
    this.formulario = this.formBuilder.group({
      nuevaEtiqueta: ['', Validators.required]
    });
  }

  agregarEtiqueta(): void {
    const nuevaEtiqueta = this.formulario.controls['nuevaEtiqueta'].value;
    this.inventarioSalService.agregarEtiqueta(nuevaEtiqueta);
    this.formulario.reset();
  }
  
  ngOnInit() {}

}
