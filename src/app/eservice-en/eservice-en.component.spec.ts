import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EServiceEnComponent } from './eservice-en.component';

describe('EServiceEnComponent', () => {
  let component: EServiceEnComponent;
  let fixture: ComponentFixture<EServiceEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EServiceEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EServiceEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
