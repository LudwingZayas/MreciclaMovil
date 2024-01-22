import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tiempos-produccion-crear',
  templateUrl: './tiempos-produccion-crear.component.html',
  styleUrls: ['./tiempos-produccion-crear.component.scss'],
})
export class TiemposProduccionCrearComponent  implements OnInit {

  formulario: FormGroup;

  constructor(private router:Router,private formBuilder: FormBuilder ) {
    this.formulario = this.formBuilder.group({
      horaInicio: ['']
    });

    // Establecer la hora actual como valor predeterminado
    const horaActual = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    this.formulario.controls['horaInicio'].setValue(horaActual);
  }

  
  Salir(){
    this.router.navigate(['/TiemposProduccionCrear'])
  }

  ngOnInit() {}

  
}
