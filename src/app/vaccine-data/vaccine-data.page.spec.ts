import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaccineDataPage } from './vaccine-data.page';

describe('VaccineDataPage', () => {
  let component: VaccineDataPage;
  let fixture: ComponentFixture<VaccineDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaccineDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
