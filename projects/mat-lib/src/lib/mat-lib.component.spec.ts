import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLibComponent } from './mat-lib.component';

describe('MatLibComponent', () => {
  let component: MatLibComponent;
  let fixture: ComponentFixture<MatLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
