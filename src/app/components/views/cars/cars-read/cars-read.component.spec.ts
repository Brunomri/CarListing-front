import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsReadComponent } from './cars-read.component';

describe('CarsReadComponent', () => {
  let component: CarsReadComponent;
  let fixture: ComponentFixture<CarsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
