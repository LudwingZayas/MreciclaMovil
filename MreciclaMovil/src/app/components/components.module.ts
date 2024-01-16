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
import { InventarioSalidaComponent } from './catalogos/inventario-salida/inventario-salida.component';

@NgModule({
  declarations: [
    MenuComponent,HeaderComponent,
    CatalogosComponent,
    InventarioEntradaComponent,
    TiemposProduccionComponent,
    TiemposProduccionCrearComponent,
    SolicitudesAdminComponent,
    InventarioSalidaComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
    exports:[
    MenuComponent],
  imports: [
    CommonModule,
     IonicModule,
  ]
})
export class ComponentsModule { }
