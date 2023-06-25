import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordEnComponent } from './forgot-password-en.component';

describe('ForgotPasswordEnComponent', () => {
  let component: ForgotPasswordEnComponent;
  let fixture: ComponentFixture<ForgotPasswordEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
