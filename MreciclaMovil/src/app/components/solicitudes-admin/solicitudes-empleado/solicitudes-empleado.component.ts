import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudesEmpeadoService } from './solicitudes-empeado.service';
@Component({
  selector: 'app-solicitudes-empleado',
  templateUrl: './solicitudes-empleado.component.html',
  styleUrls: ['./solicitudes-empleado.component.scss'],
})
export class SolicitudesEmpleadoComponent  implements OnInit {

  Solicitudes: any[] = [];

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];
 


  constructor(private router:Router) { }

  ngOnInit():void {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes() {

}
}