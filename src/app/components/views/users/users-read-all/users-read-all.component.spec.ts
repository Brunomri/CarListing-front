import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersReadAllComponent } from './users-read-all.component';

describe('UsersReadAllComponent', () => {
  let component: UsersReadAllComponent;
  let fixture: ComponentFixture<UsersReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersReadAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
