import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioEntradaCrearComponent } from './inventario-entrada-crear.component';

describe('InventarioEntradaCrearComponent', () => {
  let component: InventarioEntradaCrearComponent;
  let fixture: ComponentFixture<InventarioEntradaCrearComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEntradaCrearComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioEntradaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
