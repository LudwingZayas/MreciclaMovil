import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tiempos-produccion-crear',
  templateUrl: './tiempos-produccion-crear.component.html',
  styleUrls: ['./tiempos-produccion-crear.component.scss'],
})
export class TiemposProduccionCrearComponent  implements OnInit {

  

  botonHabilitado = true;
  

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    { 
      text: 'Yes',
      cssClass: 'alert-button-confirm',
      routerLink: '/TiemposProduccion',
      
    },
  ];

  toggleBoton(): void {
    this.botonHabilitado = !this.botonHabilitado;
  }

  botonHabilitado2 = true;

  toggleBoton2(): void {
    this.botonHabilitado2 = !this.botonHabilitado2;
  }

  botonHabilitado3 = true;

  toggleBoton3(): void {
    this.botonHabilitado3 = !this.botonHabilitado3;
  }

  formulario: FormGroup;

  constructor(private router:Router,private formBuilder: FormBuilder,private navCtrl: NavController ) {
    this.formulario = this.formBuilder.group({
      horaInicio: ['']
    });

    // Establecer la hora actual como valor predeterminado
    const horaActual = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    this.formulario.controls['horaInicio'].setValue(horaActual);
  }

  irtiemposincidencias(){
    this.router.navigate(['\TiemposIncidencias'])
  }
  Salir(){
    this.router.navigate(['/TiemposProduccionCrear'])
  }

  ngOnInit() {}

  
}
