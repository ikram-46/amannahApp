import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEnComponent } from './navbar-en.component';

describe('NavbarEnComponent', () => {
  let component: NavbarEnComponent;
  let fixture: ComponentFixture<NavbarEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
