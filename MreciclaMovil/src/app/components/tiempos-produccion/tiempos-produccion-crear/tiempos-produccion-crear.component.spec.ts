import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiemposProduccionCrearComponent } from './tiempos-produccion-crear.component';

describe('TiemposProduccionCrearComponent', () => {
  let component: TiemposProduccionCrearComponent;
  let fixture: ComponentFixture<TiemposProduccionCrearComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TiemposProduccionCrearComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiemposProduccionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
