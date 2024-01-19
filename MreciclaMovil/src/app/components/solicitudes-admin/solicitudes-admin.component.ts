import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-solicitudes-admin',
  templateUrl: './solicitudes-admin.component.html',
  styleUrls: ['./solicitudes-admin.component.scss'],
})
export class SolicitudesAdminComponent  implements OnInit {

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

  Solicitudes = [
  { id: '1', solicitud: 'ajuste de maquina', Estado: 'pendiente', Action:'' },
  { id: '2', solicitud: 'Mas insumos', Estado: 'pendiente',Action:'' },
  { id: '3', solicitud: 'pendiente', Estado: 'pendiente',Action:'' },
  { id: '4', solicitud: 'presupuesto para ajustar maquina', Estado: 'pendiente',Action:'' },
  { id: '5', solicitud: 'presupuesto para piezas', Estado: 'pendiente',Action:'' },
  
  // ... otros datos ...
];


  constructor(private router:Router) { }


  SolicitudesCrear(){
    this.router.navigate(['/SolicitudesCrear'])
  }

  ngOnInit() {}

}
