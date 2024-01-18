import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiemposProduccionEditarComponent } from './tiempos-produccion-editar.component';

describe('TiemposProduccionEditarComponent', () => {
  let component: TiemposProduccionEditarComponent;
  let fixture: ComponentFixture<TiemposProduccionEditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TiemposProduccionEditarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiemposProduccionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
