import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.scss'],
})
export class CatalogosComponent  implements OnInit {

  constructor(private router:Router) { }
  Areas(){
    this.router.navigate(['/areas'])
  }
  ngOnInit() {}

}
