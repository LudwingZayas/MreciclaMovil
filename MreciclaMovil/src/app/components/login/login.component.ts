import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

// import { AvisoDialogComponent } from 'src/app/maquinas/aviso-dialog/aviso-dialog.component'
import { MatDialog } from '@angular/material/dialog';
// import { AvisoLoginComponent } from '../aviso-login/aviso-login.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent   {

  formularioLogin: FormGroup;

  constructor( 
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private dialog: MatDialog) 
    { 
      this.formularioLogin = this.formBuilder.group({
        Correo: ['', [Validators.required, Validators.email]],
        Pass: ['', [Validators.required]]
      });
    
  }

  enviarDatos2(): void {
    console.log(this.formularioLogin.value); 
    if (this.formularioLogin.valid) {
      this.loginService.verUsuario(this.formularioLogin.value).subscribe(
        (response) => {
          if (response.success===1) {
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

  enviarDatos(): void {
    if (this.formularioLogin.valid) {
      console.log('Se presionó el botón');
      console.log(this.formularioLogin.value);
      this.loginService.verUsuario(this.formularioLogin.value).subscribe(

        (response) => {
          if (response.hasOwnProperty('error')) {
            // Se encontró un mensaje de error en la respuesta
            console.log('Error: ' + response.error);
           // this.mostrarDialogoLoginError(response.error);
          } else {
            console.log('Se logueó correctamente');
            // Se crea el token de forma ramdon para iniciar sesion
            localStorage.setItem('token', Math.random().toString());
            this.router.navigateByUrl('/header');
            // Obtenemos el id del usuario
            let usuario = response.idUsuario;
            localStorage.setItem("id_user", usuario );
            // Obtenemos el nombre del usuario
            let usuarioNombre = response.Nombre;
            localStorage.setItem("Nombre", usuarioNombre );
            // Obtenemos el correo del usuario
            let usuarioCorreo = response.Correo;
            localStorage.setItem("Correo", usuarioCorreo );
            // Obtenemos el tipo del usuario
            let nombreUsuario = response.NombreTipoUser;
            localStorage.setItem("NombreTipoUser", nombreUsuario);
            // Obtenemos el nombre del area del usuario
            let NombreArea = response.NombreArea;
            localStorage.setItem("NombreArea",NombreArea);
            // Obtenemos el id del area del usuario
            let idArea = response.idArea;
            localStorage.setItem("idArea",idArea);
            // Obtenemos el nombre de la fabrica del usuario
            let NombreFabrica = response.NombreFabrica;
            localStorage.setItem("NombreFabrica", NombreFabrica);
            // Obtenemos el id de la fabrica del usuario
            let idFabrica = response.idFabrica;
            localStorage.setItem("idFabrica",idFabrica);
            //Obtener su asignacion
            let asignacion = response.Puesto;
            localStorage.setItem("Puesto",asignacion);
            //Obtener el idAsignacion
            let idAsignacion = response.idAsignacion;
            localStorage.setItem("idAsignacion",idAsignacion);


          }
        },
        (error) => {
          // Manejar errores del servicio aquí
          console.log('No se pudo loguear :c');
         // this.mostrarDialogoLoginError('Hubo un error en el servidor');
        }
      );
    }
  }






  login(){
    this.router.navigate(['/header'])
  }

  ngOnInit() {}

}
