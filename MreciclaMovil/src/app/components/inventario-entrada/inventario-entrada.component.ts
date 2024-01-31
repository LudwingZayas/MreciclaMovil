import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioEntradaService } from './inventario-entrada.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inventario-entrada',
  templateUrl: './inventario-entrada.component.html',
  styleUrls: ['./inventario-entrada.component.scss'],
})
export class InventarioEntradaComponent  implements OnInit {

  Inventarios: any[]=[];

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

  Inventario = [
    { id: '1', Producto: 'Tela', Peso: '100'+' kg', Action:'' },
    { id: '2', Producto: 'Borra', Peso: '200'+' kg',Action:'' },
    { id: '3', Producto: 'Hilo', Peso: '120'+' kg',Action:'' },
    { id: '4', Producto: 'Borra', Peso: '200'+' kg',Action:'' },
    { id: '5', Producto: 'Hilo', Peso: '120'+' kg',Action:'' },
    { id: '6', Producto: 'Borra', Peso: '200'+' kg',Action:'' },
    { id: '7', Producto: 'Hilo', Peso: '120'+' kg',Action:'' },
    // ... otros datos ...
  ];

 

  constructor(private router:Router, private inventarioEntradaService: InventarioEntradaService, private navCtrl: NavController) {
   }

   abrirPantallaDetalle(idInventarioEntrada: number) {
    this.navCtrl.navigateForward(`/inventarioEditar/${idInventarioEntrada}`);
  }

   InventarioEditar(){
    this.router.navigate(['/inventarioEditar'])
  }

  
  ngOnInit() {

      this.obtenerInventarios();                            
      // window.location.reload();

  }
  obtenerInventarios(){
    this.inventarioEntradaService.obtenerInventarios().subscribe(
      data=>{
        this.Inventarios=data;
      },
      error=>{
        console.error(error);
      }
    )
  }

}
