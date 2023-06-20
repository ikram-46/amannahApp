import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EServicesEnComponent } from './e-services-en.component';

describe('EServicesEnComponent', () => {
  let component: EServicesEnComponent;
  let fixture: ComponentFixture<EServicesEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EServicesEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EServicesEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
