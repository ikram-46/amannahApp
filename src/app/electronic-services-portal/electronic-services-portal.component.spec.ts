import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicServicesPortalComponent } from './electronic-services-portal.component';

describe('ElectronicServicesPortalComponent', () => {
  let component: ElectronicServicesPortalComponent;
  let fixture: ComponentFixture<ElectronicServicesPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicServicesPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicServicesPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
