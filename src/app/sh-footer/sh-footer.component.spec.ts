import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShFooterComponent } from './sh-footer.component';

describe('ShFooterComponent', () => {
  let component: ShFooterComponent;
  let fixture: ComponentFixture<ShFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
