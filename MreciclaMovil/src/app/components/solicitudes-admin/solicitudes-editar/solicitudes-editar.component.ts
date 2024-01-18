import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-solicitudes-editar',
  templateUrl: './solicitudes-editar.component.html',
  styleUrls: ['./solicitudes-editar.component.scss'],
})
export class SolicitudesEditarComponent  implements OnInit {

  constructor(private router:Router) { }

  Salir(){

    this.router.navigate(['/Solicitudes'])
  }


  ngOnInit() {}

}
