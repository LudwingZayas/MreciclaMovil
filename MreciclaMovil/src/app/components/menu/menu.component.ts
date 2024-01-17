import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private router:Router) { }

  irHeader(){
    this.router.navigate(['/header'])
  }

  irCat(){
    this.router.navigate(['/catalogos'])
  }
  irlogin(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {}

}
