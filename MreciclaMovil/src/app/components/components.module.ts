import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { HomePageModule } from '../home/home.module';
import { InventarioEntradaComponent } from './inventario-entrada/inventario-entrada.component';
import { TiemposProduccionComponent } from './tiempos-produccion/tiempos-produccion.component';
import { TiemposProduccionCrearComponent } from './tiempos-produccion/tiempos-produccion-crear/tiempos-produccion-crear.component';
import { SolicitudesAdminComponent } from './solicitudes-admin/solicitudes-admin.component';
import { LoginComponent } from './login/login.component';
import { InventarioEntradaEditarComponent } from './inventario-entrada/inventario-entrada-editar/inventario-entrada-editar.component';
import { InventarioSalidaComponent } from './inventario-salida/inventario-salida.component';
import { SolicitudesEditarComponent } from './solicitudes-admin/solicitudes-editar/solicitudes-editar.component';
import { TiemposProduccionEditarComponent } from './tiempos-produccion/tiempos-produccion-editar/tiempos-produccion-editar.component';
import { SolicitudesAdminCrearComponent } from './solicitudes-admin/solicitudes-admin-crear/solicitudes-admin-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AreasComponent } from './areas/areas/areas.component';
import { AreasCreateComponent } from './areas/areas-create/areas-create.component';
import { AvisoDialogComponent } from './aviso-dialog/aviso-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MenuComponent,HeaderComponent,
    CatalogosComponent,
    InventarioEntradaComponent,
    TiemposProduccionComponent,
    TiemposProduccionCrearComponent,
    SolicitudesAdminComponent,
    LoginComponent,
    InventarioEntradaEditarComponent,
    InventarioSalidaComponent,
    SolicitudesEditarComponent,
    TiemposProduccionEditarComponent,
    SolicitudesAdminCrearComponent,
    AreasComponent,
    AreasCreateComponent,
    AvisoDialogComponent,
    ConfirmationDialogComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
    exports:[LoginComponent,
    MenuComponent,
    ReactiveFormsModule, ],
  imports: [
    CommonModule,
     IonicModule,
     ReactiveFormsModule,
     RouterModule,
     MatIconModule

  ]
})
export class ComponentsModule { }
