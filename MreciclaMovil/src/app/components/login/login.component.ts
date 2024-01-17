import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { AvisoDialogComponent } from 'src/app/maquinas/aviso-dialog/aviso-dialog.component'
import { MatDialog } from '@angular/material/dialog';
// import { AvisoLoginComponent } from '../aviso-login/aviso-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  
  constructor(private router:Router) { 
  }

  

  login(){
    this.router.navigate(['/header'])
  }

  ngOnInit() {}

}
