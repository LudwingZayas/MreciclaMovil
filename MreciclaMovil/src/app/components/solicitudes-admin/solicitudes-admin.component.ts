import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SolicitudesAdminService } from './solicitudes-admin.service';
import { solicitud } from './Solicitud';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PeriodicElement } from './PeriodicElement';

@Component({
  selector: 'app-solicitudes-admin',
  templateUrl: './solicitudes-admin.component.html',
  styleUrls: ['./solicitudes-admin.component.scss'],
})
export class SolicitudesAdminComponent  implements OnInit {
  @Output() solicitudesChange: EventEmitter<string> = new EventEmitter<string>();

  UsuarioTienePermisoSuper: boolean;
  solicitudes: PeriodicElement[]=[];
   displayedColumns: string[];
   dataSource: MatTableDataSource<PeriodicElement>;

  selectedSolicitudes: string = '';
  seEncontraronDatos: boolean = false;

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];

  Solicitudes = [
  { id: '1', solicitud: 'ajuste de maquina', Estado: 'pendiente', Action:'' },
  { id: '2', solicitud: 'Mas insumos', Estado: 'pendiente',Action:'' },
  { id: '3', solicitud: 'pendiente', Estado: 'pendiente',Action:'' },
  { id: '4', solicitud: 'presupuesto para ajustar maquina', Estado: 'pendiente',Action:'' },
  { id: '5', solicitud: 'presupuesto para piezas', Estado: 'pendiente',Action:'' },
  
  // ... otros datos ...
];


  constructor(private router:Router,
    private dialog: MatDialog,
    private solicitudesService:SolicitudesAdminService,
    
    ) {
      this.dataSource =new MatTableDataSource<PeriodicElement>([]);
      const nombreUsuario =this.solicitudesService.getTipoUsuario();
      this.UsuarioTienePermisoSuper=this.verificarPermisosDelUsuarioSuper();
      if(nombreUsuario==='SuperAdministrador'){
        this.displayedColumns=[
         'idSolicitud',
         'nombreProducto', 
         'Peso' ,
         'Dimensiones', 
         'FechaPeticion',
         'Calibre',
         'AreaDesignada',
         'Composicion',
         'FechaRecepcion',
         'UsuarioCreador',
         'UsuarioActualizador',
         'idFabrica',
        ]
      }else{
        this.displayedColumns = [
          'idSolicitud',
          'nombreProducto', 
          'Peso' ,
          'Dimensiones', 
          'FechaPeticion',
          'Calibre',
          'AreaDesignada',
          'Composicion',
          'FechaRecepcion',
          'UsuarioCreador',
          'UsuarioActualizador',
          'idFabrica',
        ];
      }
    }
      private verificarPermisosDelUsuarioSuper(): boolean {
        const nombreUsuario = localStorage.getItem("NombreTipoUser");
        // Realiza la lógica para determinar si el usuario tiene permiso basado en su rol
        return ((nombreUsuario === "SuperAdministrador")); // Ejemplo: el usuario con rol "SuperAdmin" tiene permiso
     }
    

  SolicitudesCrear(){
    this.router.navigate(['/SolicitudesCrear'])
  }

  ngOnInit(): void {
    this.solicitudesService.listarSolicitud().subscribe((respuesta: PeriodicElement[]) => {
      console.log(respuesta);
      this.solicitudes = respuesta;
      this.dataSource.data = respuesta; // Actualiza el origen de datos con los resultados
    });
}
}