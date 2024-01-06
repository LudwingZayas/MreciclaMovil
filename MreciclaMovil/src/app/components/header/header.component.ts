import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(private router:Router) { }

  irInventario(){
    this.router.navigate(['/inventarioEntrada'])
  }
  irTiemposProd(){
    this.router.navigate(['/TiemposProduccion'])
  }

  ngOnInit() {}

}
