import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerSolicitudesAdminComponent } from './ver-solicitudes-admin.component';

describe('VerSolicitudesAdminComponent', () => {
  let component: VerSolicitudesAdminComponent;
  let fixture: ComponentFixture<VerSolicitudesAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSolicitudesAdminComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerSolicitudesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
