import { Component,  OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SolicitudesAdminService } from '../solicitudes-admin.service';
import { MatDialog } from '@angular/material/dialog';
import { AvisoDialogComponent } from '../../aviso-dialog/aviso-dialog.component';

@Component({
  selector: 'app-solicitudes-admin-crear',
  templateUrl: './solicitudes-admin-crear.component.html',
  styleUrls: ['./solicitudes-admin-crear.component.scss']
})
export class SolicitudesAdminCrearComponent  implements OnInit {
  formularioSolicitudesAdmin: FormGroup;

  constructor(private router:Router,
    private formBuilder:FormBuilder,
    private dialog: MatDialog,
    private solicitudesServiceAdmin: SolicitudesAdminService
    ) {
      const idFabrica= this.solicitudesServiceAdmin.getIdFabrica();
      const correoSave= this.solicitudesServiceAdmin.getCorreo();
      this.formularioSolicitudesAdmin = this.formBuilder.group({
        titulo:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        presupuesto: ['',[Validators.required]],
        fechaPeticion: ['',[Validators.required]],
        idEstado: ['',[Validators.required]],
        UsuarioCreador:[correoSave],
        Fabrica: [idFabrica]
      })
     }

     enviarDatosSolicitud(){
      if(this.formularioSolicitudesAdmin.valid){
        console.log('el formulario esta correctamente llenado');
        console.log(this.formularioSolicitudesAdmin.value);
        this.solicitudesServiceAdmin.agregarSolicitud(this.formularioSolicitudesAdmin.value).subscribe(
          (Response)=>{
            if(Response.success == 1){
              console.log('registro exitoso');
              this.DialogoAviso('registro exitoso');
              this.formularioSolicitudesAdmin.reset();
            }else{
              console.error('error al registrar los datos:', Response.error);
            }
          },
          (error)=>{
            console.error('errores');
          }
        )
      }
     }

  Salir(){
    this.router.navigate(['/SolicitudesAdmin'])
  }

  DialogoAviso(mensaje: string): void {
    const dialogAviso = this.dialog.open(AvisoDialogComponent, {
        data: { message: mensaje }
    });
    dialogAviso.afterClosed().subscribe(result => {
        if (result) {
            this.router.navigateByUrl('/SolicitudesAdmin');
        }
    });
}

  ngOnInit() {}

}
