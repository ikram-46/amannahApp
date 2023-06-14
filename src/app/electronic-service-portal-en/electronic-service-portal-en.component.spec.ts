import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicServicePortalEnComponent } from './electronic-service-portal-en.component';

describe('ElectronicServicePortalEnComponent', () => {
  let component: ElectronicServicePortalEnComponent;
  let fixture: ComponentFixture<ElectronicServicePortalEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicServicePortalEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicServicePortalEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
