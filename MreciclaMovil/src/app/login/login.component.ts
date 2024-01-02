import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  formularioLogin: FormGroup;

  Correo: string = '';
  Pass: string ='';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.formularioLogin = this.formBuilder.group({
      Correo: ['', Validators.required],
      Pass: ['', Validators.required],
    });
  }

  enviarFormulario(){
    console.log('Correo: ', this.Correo);
    console.log('Pass: ', this.Pass)
  }

  enviarDatos(): void {
    if (this.formularioLogin.valid) {
      console.log('Se presionó el botón de Ingreso');
      console.log(this.formularioLogin.value);
      this.loginService.verificarUsuario(this.formularioLogin.value).subscribe(

        (response) => {
          if (response.hasOwnProperty('error')) {
            // Se encontró un mensaje de error en la respuesta
            console.log('Error: ' + response.error);
          } else {
            console.log('Se logueó correctamente');
            // Se crea el token de forma ramdon para iniciar sesion
            localStorage.setItem('token', Math.random().toString());
            this.router.navigateByUrl('/dashboard/tablero');
          }
        },
        (error) => {
          // Manejar errores del servicio aquí
          console.log('No se pudo loguear :c');
        }
      );
    }
  }


  ngOnInit():void {}

}
