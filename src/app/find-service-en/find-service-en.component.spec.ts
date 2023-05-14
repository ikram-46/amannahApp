import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindServiceEnComponent } from './find-service-en.component';

describe('FindServiceEnComponent', () => {
  let component: FindServiceEnComponent;
  let fixture: ComponentFixture<FindServiceEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindServiceEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindServiceEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
