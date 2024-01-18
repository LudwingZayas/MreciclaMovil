import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventario-entrada-editar',
  templateUrl: './inventario-entrada-editar.component.html',
  styleUrls: ['./inventario-entrada-editar.component.scss'],
})
export class InventarioEntradaEditarComponent  implements OnInit {

  constructor(private router:Router) { }

  actualizarDatos() {
    // Coloca aquí la lógica para actualizar tus datos
    console.log('Actualizando datos...');
    // Puedes agregar la lógica de actualización aquí

    // Por ejemplo, puedes recargar la página actual
    window.location.reload();
  }

  Salir(){

    this.router.navigate(['/inventarioEntrada'])
  }

  ngOnInit() {}

}
