import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientsCertainDoctorComponent } from './list-patients-certain-doctor.component';

describe('ListPatientsCertainDoctorComponent', () => {
  let component: ListPatientsCertainDoctorComponent;
  let fixture: ComponentFixture<ListPatientsCertainDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPatientsCertainDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPatientsCertainDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
