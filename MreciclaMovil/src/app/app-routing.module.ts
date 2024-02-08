import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { InventarioEntradaComponent } from './components/inventario-entrada/inventario-entrada.component';
import { TiemposProduccionComponent } from './components/tiempos-produccion/tiempos-produccion.component';
import { TiemposProduccionCrearComponent } from './components/tiempos-produccion/tiempos-produccion-crear/tiempos-produccion-crear.component';
import { SolicitudesAdminComponent } from './components/solicitudes-admin/solicitudes-admin.component';
import { InventarioSalidaComponent } from './components/inventario-salida/inventario-salida.component';
import { MenuController } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { InventarioEntradaEditarComponent } from './components/inventario-entrada/inventario-entrada-editar/inventario-entrada-editar.component';
import { SolicitudesEditarComponent } from './components/solicitudes-admin/solicitudes-editar/solicitudes-editar.component';
import { TiemposProduccionEditarComponent } from './components/tiempos-produccion/tiempos-produccion-editar/tiempos-produccion-editar.component';
import { SolicitudesAdminCrearComponent } from './components/solicitudes-admin/solicitudes-admin-crear/solicitudes-admin-crear.component';
import { AreasComponent } from './components/areas/areas/areas.component';
import { AreasCreateComponent } from './components/areas/areas-create/areas-create.component';
import { AreasEditComponent } from './components/areas/areas-edit/areas-edit.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'menu', component:MenuComponent
  },
  {
    path: 'header', component:HeaderComponent,
  },
  {
    path:'login', component:LoginComponent
  },

  {
    path:'catalogos', component:CatalogosComponent,
  }, 
  //inventarios rutas
  {
    path:'inventarioEntrada', component:InventarioEntradaComponent,
  },
  {
    path:'inventarioEditar', component:InventarioEntradaEditarComponent
  },
  //Rutas para tiempos de proddución--->
  {
    path: 'TiemposProduccion', component:TiemposProduccionComponent,
  },
  {
    path:'TiemposProduccionCrear', component:TiemposProduccionCrearComponent
  },
  {
    path:'TiemposProduccionEditar', component:TiemposProduccionEditarComponent
  },
  //Solicitudes
  {
    path:'SolicitudesAdmin', component:SolicitudesAdminComponent
  },
  {
    path:'SolicitudesEditar', component:SolicitudesEditarComponent
  },
  {
    path:'SolicitudesCrear', component:SolicitudesAdminCrearComponent
  },
  {
    path:'InventarioSalida', component:InventarioSalidaComponent
  },
  {
    path:'areas', component:AreasComponent
  },
  {
    path:'areascreate', component:AreasCreateComponent
  },
  {
    path:'areas-edit/:id', component:AreasEditComponent
  }
  //>
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
