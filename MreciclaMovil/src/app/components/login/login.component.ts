import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { AvisoDialogComponent } from 'src/app/maquinas/aviso-dialog/aviso-dialog.component'
import { MatDialog } from '@angular/material/dialog';
// import { AvisoLoginComponent } from '../aviso-login/aviso-login.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent  implements OnInit {

  formularioLogin: FormGroup;

  constructor( private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService) { 

      this.formularioLogin = this.formBuilder.group({
        Correo: ['', Validators.required],
        Pass: ['', Validators.required],
      });
    
  }

  enviarDatos(): void {
    if (this.formularioLogin.valid) {
      this.loginService.iniciarSesion(this.formularioLogin.value).subscribe(
        (response) => {
          if (response.success) {
            // Inicio de sesión exitoso, puedes redirigir a otra página
            console.log('Inicio de sesión exitoso');
          } else {
            // Credenciales incorrectas
            console.error('Credenciales incorrectas');
          }
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
    }
  }


  login(){
    this.router.navigate(['/header'])
  }

  ngOnInit() {}

}
