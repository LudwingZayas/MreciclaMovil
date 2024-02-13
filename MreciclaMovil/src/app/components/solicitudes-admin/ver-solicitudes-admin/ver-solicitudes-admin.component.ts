import { Component,  OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ver-solicitudes-admin',
  templateUrl: './ver-solicitudes-admin.component.html',
  styleUrls: ['./ver-solicitudes-admin.component.scss'],
})
export class VerSolicitudesAdminComponent  implements OnInit {
  registro: any;

  constructor(private router:Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private http: HttpClient
    ) { }

    regresar(){
      this.router.navigate(['/SolicitudesAdmin'])
    }


  ngOnInit() {
     // Recupera el ID de la URL usando ActivatedRoute
 this.route.params.subscribe(params => {
  const idSolicitud = params['idSolicitud'];
  this.http.get(`http://localhost/ConsultarSolicitudes.php?id=${idSolicitud}`).subscribe(data => {
        this.registro = data;
      });
});

  }

}
