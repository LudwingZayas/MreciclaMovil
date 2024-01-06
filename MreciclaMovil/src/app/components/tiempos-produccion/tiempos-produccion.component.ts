import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiempos-produccion',
  templateUrl: './tiempos-produccion.component.html',
  styleUrls: ['./tiempos-produccion.component.scss'],
})
export class TiemposProduccionComponent  implements OnInit {

  constructor(private router:Router) { }

  irtiemposcrear(){
    this.router.navigate(['/TiemposProduccionCrear'])
  }

  ngOnInit() {}

}
