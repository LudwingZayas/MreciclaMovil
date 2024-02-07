import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudesAdminService } from './solicitudes-admin.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-solicitudes-admin',
  templateUrl: './solicitudes-admin.component.html',
  styleUrls: ['./solicitudes-admin.component.scss'],
})
export class SolicitudesAdminComponent  implements OnInit {
  Solicitudes: any[] = [];

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
 



  constructor(private router:Router, private solicitudesAdminService:SolicitudesAdminService, private navCtrl: NavController) { }

  abrirPantallaDetalle(idSol: number) {
    this.navCtrl.navigateForward(`/VerSolicitudes/${idSol}`);
  }

  SolicitudesCrear(){
    this.router.navigate(['/SolicitudesCrear'])
  }
  SolicitudesAdmin(){
    this.router.navigate(['/VerSolicitudes'])
  }

  ngOnInit() {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes() {
    this.solicitudesAdminService.obtenerSolicitudes().subscribe(
      data => {
        this.Solicitudes = data;
      },
      error => {
        console.error(error);
      }
    );
    }
  



}





