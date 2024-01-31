import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inventario-entrada-editar',
  templateUrl: './inventario-entrada-editar.component.html',
  styleUrls: ['./inventario-entrada-editar.component.scss'],
})
export class InventarioEntradaEditarComponent  implements OnInit {

  constructor(private router:Router,
    private route: ActivatedRoute,
    private navCtrl: NavController
    
    ) { }

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

  ngOnInit() {
 // Recupera el ID de la URL usando ActivatedRoute
 this.route.params.subscribe(params => {
  const idInventarioEntrada = params['idInventarioEntrada'];
  if (idInventarioEntrada) {
    // Haz lo que necesites con el ID, por ejemplo, mostrarlo en la consola
    console.log('ID recuperado:', idInventarioEntrada);
  }
});

  }

}
