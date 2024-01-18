import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventario-salida',
  templateUrl: './inventario-salida.component.html',
  styleUrls: ['./inventario-salida.component.scss'],
})
export class InventarioSalidaComponent  implements OnInit {

  InventarioSalida = [
    { id: '1', Producto: 'Tela', Peso: '100'+' kg', Action:'' },
    { id: '2', Producto: 'Borra', Peso: '200'+' kg',Action:'' },
    { id: '3', Producto: 'Hilo', Peso: '120'+' kg',Action:'' },
    { id: '4', Producto: 'Borra', Peso: '200'+' kg',Action:'' },
    { id: '5', Producto: 'Hilo', Peso: '120'+' kg',Action:'' },
    { id: '6', Producto: 'Borra', Peso: '200'+' kg',Action:'' },
    { id: '7', Producto: 'Hilo', Peso: '120'+' kg',Action:'' },
    // ... otros datos ...
  ];

 

  constructor(private router:Router) {
   }

   InventarioEditar(){
    this.router.navigate(['/inventarioEditar'])
  }
  ngOnInit() {}

}
