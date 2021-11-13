import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Component } from './lib3.component';

describe('Lib3Component', () => {
  let component: Lib3Component;
  let fixture: ComponentFixture<Lib3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
