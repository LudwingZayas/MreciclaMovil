import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { InventarioEntradaComponent } from './components/inventario-entrada/inventario-entrada.component';
import { TiemposProduccionComponent } from './components/tiempos-produccion/tiempos-produccion.component';
import { TiemposProduccionCrearComponent } from './components/tiempos-produccion/tiempos-produccion-crear/tiempos-produccion-crear.component';
import { SolicitudesAdminComponent } from './components/solicitudes-admin/solicitudes-admin.component';
import { InventarioSalidaComponent } from './components/catalogos/inventario-salida/inventario-salida.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'header', component:HeaderComponent,
  },
  {
    path:'catalogos', component:CatalogosComponent,
  },
  {
    path:'inventarioEntrada', component:InventarioEntradaComponent,
  },
  //Rutas para tiempos de proddución--->
  {
    path: 'TiemposProduccion', component:TiemposProduccionComponent,
  },
  {
    path:'TiemposProduccionCrear', component:TiemposProduccionCrearComponent
  },
  {
    path:'SolicitudesAdmin', component:SolicitudesAdminComponent
  },
  {
    path:'InventarioSalida', component:InventarioSalidaComponent
  }
  // --->>>>>>
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
