import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventario-entrada-editar',
  templateUrl: './inventario-entrada-editar.component.html',
  styleUrls: ['./inventario-entrada-editar.component.scss'],
})
export class InventarioEntradaEditarComponent  implements OnInit {

  constructor(private router:Router) { }

  Salir(){
    this.router.navigate(['/inventarioEntrada'])
  }

  ngOnInit() {}

}
