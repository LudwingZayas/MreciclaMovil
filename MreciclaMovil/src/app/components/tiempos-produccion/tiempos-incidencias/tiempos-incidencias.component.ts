import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-tiempos-incidencias',
  templateUrl: './tiempos-incidencias.component.html',
  styleUrls: ['./tiempos-incidencias.component.scss'],
})
export class TiemposIncidenciasComponent  implements OnInit {

  botonHabilitado = true;

  toggleBoton(): void {
    this.botonHabilitado = !this.botonHabilitado;
  }

 
  constructor(private router:Router) {  }
  Salir(){
    this.router.navigate(['/TiemposProduccionCrear'])
  }
  ngOnInit() {}

}
