import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEnComponent } from './header-en.component';

describe('HeaderEnComponent', () => {
  let component: HeaderEnComponent;
  let fixture: ComponentFixture<HeaderEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEnComponent]
    });
    fixture = TestBed.createComponent(HeaderEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
