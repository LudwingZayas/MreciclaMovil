import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AreasService } from '../areas.service';
import { areasList } from '../areasList';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

//import { ExporterService } from 'src/app/services/exporter.service';
@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
})
export class AreasComponent  implements OnInit {
  @Output() areaChange: EventEmitter<string> = new EventEmitter<string>();

  usuarioTienePermisoSuper: boolean;
  areas: areasList[] = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<areasList>;

  selectedArea: string = '';
  seEncontraronDatos: boolean = false;
  
  onAreaChange(event: CustomEvent): void {
    this.selectedArea = event.detail.value;
    this.areaChange.emit(this.selectedArea);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  verDetalles(element: areasList) {
    // Implementa la lógica para mostrar los detalles del elemento seleccionado aquí
    console.log('Detalles de:');
    // Puedes abrir un modal, mostrar información adicional, etc.
    const idArea = element.idArea;
    this.router.navigateByUrl(`/dashboard/areas/areasedit/${idArea}`);
  }
  constructor(private router:Router,
              private dialog: MatDialog,
              private areasService:AreasService,
             // private excelService:ExporterService
              ) {
                 this.dataSource = new MatTableDataSource<areasList>([]);
                 const nombreUsuarioTipo = this.areasService.getTipoUsuario();
                 this.usuarioTienePermisoSuper = this.verificarPermisosDelUsuarioSuper();
                 if (nombreUsuarioTipo === "SuperAdministrador") {
                  this.displayedColumns = [
                    'idArea',
                    'NombreArea',
                    'DescripcionArea',
                    'EstadoArea',
                    'Empresa',
                    'action'
                  ];
                 } else {
                  this.displayedColumns = [
                    'idArea',
                    'NombreArea',
                    'DescripcionArea',
                    'EstadoArea',
                    'action'
                  ];
                 }
                }

  private verificarPermisosDelUsuarioSuper(): boolean {
    const nombreUsuario = localStorage.getItem("NombreTipoUser");
    // Realiza la lógica para determinar si el usuario tiene permiso basado en su rol
    return ((nombreUsuario === "SuperAdministrador")); // Ejemplo: el usuario con rol "SuperAdmin" tiene permiso
  }

  crearArea(){
    this.router.navigateByUrl('/areascreate');
  }
  eliminarElemento(element: areasList): void {
   const correoSave = this.areasService.getCorreo();
    const index = this.dataSource.data.indexOf(element);
    if (index >= 0) {
      const idArea = element.idArea;
      this.dataSource.data.splice(index, 1);
      this.areasService.eliminarArea(idArea,correoSave).subscribe();
      this.dataSource._updateChangeSubscription(); // Actualizar la vista de la tabla
      // Aquí tienes tanto el índice como el idMaquina
      console.log(`Elemento eliminado en el índice ${index}, ID del area: ${idArea}`);
    }
  }

  mostrarDialogoDeConfirmacion(element: areasList): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: '¿Estás seguro de que deseas eliminar este registro?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eliminarElemento(element);
      }
    });
  }

aplicarFiltro() {
  console.log('Este es el valor del selectedArea:', this.selectedArea);
  if (this.selectedArea) {
    // Convierte el valor del filtro a minúsculas
    const filtro = this.selectedArea.trim().toLowerCase();
    // Filtra los datos y actualiza la vista
    this.dataSource.data = this.areas.filter(area =>
      area.NombreArea.toLowerCase().includes(filtro)
    );
    // Comprueba si se encontraron datos después de aplicar el filtro
    this.seEncontraronDatos = this.dataSource.data.length > 0;
    console.log('Se Encontraron Datos:', this.seEncontraronDatos);
  } else {
    this.dataSource.data = this.areas;
    // Comprueba si se encontraron datos después de aplicar el filtro
    this.seEncontraronDatos = this.dataSource.data.length > 0;
    console.log('Se Encontraron Datos // Si no hay filtro, muestra todos los Datos:', this.seEncontraronDatos);
  }
}


ngOnInit(): void {
  this.areasService.listarAreas().subscribe((respuesta: areasList[]) => {
    console.log(respuesta);
    this.areas = respuesta;
    this.dataSource.data = respuesta; // Actualiza el origen de datos con los resultados
  });
}

//Exportar SIN filtros
/*exportarXLSX(): void {
  this.excelService.exportToExcel(this.dataSource.data, 'reporte-areas');
}*/

//Exportar CON filtros
/*exportarXLSXFilter(): void {
  this.excelService.exportToExcel(this.dataSource.filteredData, 'reporte-areas');
}*/

regresar (){
  this.router.navigateByUrl('/dashboard/catalogos');
}


}
