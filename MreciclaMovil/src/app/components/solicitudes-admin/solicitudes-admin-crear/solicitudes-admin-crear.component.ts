import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SolicitudesAdminCrearService } from './solicitudes-admin-crear.service';

@Component({
  selector: 'app-solicitudes-admin-crear',
  templateUrl: './solicitudes-admin-crear.component.html',
  styleUrls: ['./solicitudes-admin-crear.component.scss'],
})
export class SolicitudesAdminCrearComponent  implements OnInit {
  // idSol: any;
  titulo: any;
  descripcion: any;
  estado: any;

  constructor(private router:Router,private toastController: ToastController,private solicitudService:SolicitudesAdminCrearService) { }

  titulo: string;


  async enviarDatos() {
    const datosSolicitud = {
      // idSol: this.idSol,
      titulo: this.titulo,
      descripcion: this.descripcion,
      estado: this.estado
    };
    try {
      await this.solicitudService.enviarSolicitud(datosSolicitud);
      this.mostrarToast('Datos enviados correctamente');
      this.resetearFormulario();
    } catch (error) {
      console.error('Error al enviar datos:', error);
      this.mostrarToast('Error al enviar datos');
    }
  }
  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  resetearFormulario() {
    // this.idSol = '';
    this.titulo = '';
    this.descripcion = '';
    this.estado = '';
  }

  Salir(){
    this.router.navigate(['/SolicitudesAdmin'])
  }

  ngOnInit() {}

}
