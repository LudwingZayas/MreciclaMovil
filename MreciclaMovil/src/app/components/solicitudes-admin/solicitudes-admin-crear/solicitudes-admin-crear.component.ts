import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-solicitudes-admin-crear',
  templateUrl: './solicitudes-admin-crear.component.html',
  styleUrls: ['./solicitudes-admin-crear.component.scss'],
})
export class SolicitudesAdminCrearComponent  implements OnInit {

  constructor(private router:Router) { }

  Salir(){
    this.router.navigate(['/SolicitudesAdmin'])
  }

  ngOnInit() {}

}
