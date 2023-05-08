import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEnComponent } from './card-en.component';

describe('CardEnComponent', () => {
  let component: CardEnComponent;
  let fixture: ComponentFixture<CardEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
