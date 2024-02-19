import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesAdminComponent } from './solicitudes-admin.component';
import { SolicitudesAdminCrearComponent } from './solicitudes-admin-crear/solicitudes-admin-crear.component';
import { VerSolicitudesAdminComponent } from './ver-solicitudes-admin/ver-solicitudes-admin.component';


const routes: Routes = [
  {
    path: 'solicitudes',
    component: SolicitudesAdminComponent,
    // canActivate: [authGuard]
  },
  {
    path: 'SolicitudesCrear',
    component: SolicitudesAdminCrearComponent ,
    // canActivate: [authGuard]
  },
  {
    path: 'SolicitudesEdit/:id',
    component: VerSolicitudesAdminComponent ,
    // canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
