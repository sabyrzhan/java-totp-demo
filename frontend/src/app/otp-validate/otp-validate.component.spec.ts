import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpValidateComponent } from './otp-validate.component';

describe('OtpComponent', () => {
  let component: OtpValidateComponent;
  let fixture: ComponentFixture<OtpValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
