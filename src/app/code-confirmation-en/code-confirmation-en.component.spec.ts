import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeConfirmationEnComponent } from './code-confirmation-en.component';

describe('CodeConfirmationEnComponent', () => {
  let component: CodeConfirmationEnComponent;
  let fixture: ComponentFixture<CodeConfirmationEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeConfirmationEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeConfirmationEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
