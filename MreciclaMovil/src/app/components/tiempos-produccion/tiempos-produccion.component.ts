import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiempos-produccion',
  templateUrl: './tiempos-produccion.component.html',
  styleUrls: ['./tiempos-produccion.component.scss'],
})
export class TiemposProduccionComponent  implements OnInit {
  
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
  { id: '1', solicitud: 'ajuste de maquina', Tipo: 'maquinaria', Action:'' },
  { id: '2', solicitud: 'Mas insumos', Tipo: 'hilos',Action:'' },
  { id: '3', solicitud: 'material para reparación de maquina', Tipo: 'agujas',Action:'' },
  { id: '4', solicitud: 'presupuesto para ajustar maquina', Tipo: 'ajustes',Action:'' },
  { id: '5', solicitud: 'presupuesto para piezas', Tipo: 'piezas',Action:'' },
  
  // ... otros datos ...
];



  constructor(private router:Router) { }



  irtiemposeditar(){
    this.router.navigate(['/TiemposProduccionEditar'])
  }

  irtiemposcrear(){
    this.router.navigate(['/TiemposProduccionCrear'])
  }

  ngOnInit() {}
  
}
