import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioEntradaEditarComponent } from './inventario-entrada-editar.component';

describe('InventarioEntradaEditarComponent', () => {
  let component: InventarioEntradaEditarComponent;
  let fixture: ComponentFixture<InventarioEntradaEditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEntradaEditarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioEntradaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
