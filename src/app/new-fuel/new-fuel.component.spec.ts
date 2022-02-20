import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFuelComponent } from './new-fuel.component';

describe('NewFuelComponent', () => {
  let component: NewFuelComponent;
  let fixture: ComponentFixture<NewFuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
