import { Component,  OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-ver-solicitudes-admin',
  templateUrl: './ver-solicitudes-admin.component.html',
  styleUrls: ['./ver-solicitudes-admin.component.scss'],
})
export class VerSolicitudesAdminComponent  implements OnInit {

  constructor(private router:Router,
    private route: ActivatedRoute,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
     // Recupera el ID de la URL usando ActivatedRoute
 this.route.params.subscribe(params => {
  const idSolicitud = params['idSolicitud'];
  if (idSolicitud) {
    // Haz lo que necesites con el ID, por ejemplo, mostrarlo en la consola
    console.log('ID recuperado:', idSolicitud);
  }
});

  }

}
