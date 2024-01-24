import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioSalidaService } from './inventario-salida.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventario-salida',
  templateUrl: './inventario-salida.component.html',
  styleUrls: ['./inventario-salida.component.scss'],
})
export class InventarioSalidaComponent  implements OnInit {
  //
  botones: any[];
  inputs: string[];
  formulario: FormGroup;

 
  constructor(private router:Router, private inventarioSalService: InventarioSalidaService, private formBuilder: FormBuilder) {
    this.botones = inventarioSalService.obtenerBotones();
    this.inputs = inventarioSalService.obtenerInputs();
    this.formulario = this.formBuilder.group({
      nuevoBotonNombre: ['', Validators.required],
      nuevoBotonPropiedad:[''],
      nuevoInput: ['', Validators.required]
    });
  }

  agregarBoton(): void {
    const nuevoBotonNombre = this.formulario.controls['nuevoBotonNombre'].value;
    const nuevoBotonPropiedad=this.formulario.controls['nuevoBotonPropiedad'].value;

    this.inventarioSalService.agregarBoton(nuevoBotonNombre,{propiedad:nuevoBotonPropiedad});
    this.formulario.reset();
  }
  
  agregarInput(): void {
    const nuevoInput = this.formulario.controls['nuevoInput'].value;
    this.inventarioSalService.agregarInput(nuevoInput);
    this.formulario.reset();
  }



  
   
  ngOnInit() {}

}
