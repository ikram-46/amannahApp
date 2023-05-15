import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractEOComponent } from './contract-eo.component';

describe('ContractEOComponent', () => {
  let component: ContractEOComponent;
  let fixture: ComponentFixture<ContractEOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractEOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractEOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
