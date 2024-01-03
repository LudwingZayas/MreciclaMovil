import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    MenuComponent,HeaderComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
    exports:[
    MenuComponent],
  imports: [
    CommonModule,
     IonicModule
  ]
})
export class ComponentsModule { }
