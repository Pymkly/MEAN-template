import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcomponentComponent } from './hcomponent.component';

describe('HcomponentComponent', () => {
  let component: HcomponentComponent;
  let fixture: ComponentFixture<HcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
