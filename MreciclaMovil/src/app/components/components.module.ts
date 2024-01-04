import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { HomePageModule } from '../home/home.module';
import { InventarioEntradaComponent } from './inventario-entrada/inventario-entrada.component';
@NgModule({
  declarations: [
    MenuComponent,HeaderComponent,CatalogosComponent,InventarioEntradaComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
    exports:[
    MenuComponent],
  imports: [
    CommonModule,
     IonicModule,
  ]
})
export class ComponentsModule { }
