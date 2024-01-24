import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tiempos-produccion-editar',
  templateUrl: './tiempos-produccion-editar.component.html',
  styleUrls: ['./tiempos-produccion-editar.component.scss'],
})
export class TiemposProduccionEditarComponent  implements OnInit {

  constructor(private router:Router) { }

  Salir(){
    this.router.navigate(['/TiemposProduccion']);
  }



  ngOnInit() {}

}
