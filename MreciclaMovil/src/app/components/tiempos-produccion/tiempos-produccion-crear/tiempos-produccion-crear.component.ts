import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tiempos-produccion-crear',
  templateUrl: './tiempos-produccion-crear.component.html',
  styleUrls: ['./tiempos-produccion-crear.component.scss'],
})
export class TiemposProduccionCrearComponent  implements OnInit {

  constructor(private router:Router ) { }

  Salir(){
    this.router.navigate(['/TiemposProduccionCrear'])
  }

  ngOnInit() {}

  
}
