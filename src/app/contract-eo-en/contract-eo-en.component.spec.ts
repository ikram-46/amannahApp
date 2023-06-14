import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractEOEnComponent } from './contract-eo-en.component';

describe('ContractEOEnComponent', () => {
  let component: ContractEOEnComponent;
  let fixture: ComponentFixture<ContractEOEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractEOEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractEOEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
