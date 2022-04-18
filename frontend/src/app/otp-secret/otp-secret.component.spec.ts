import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpSecretComponent } from './login.component';

describe('LoginComponent', () => {
  let component: OtpSecretComponent;
  let fixture: ComponentFixture<OtpSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpSecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
