import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaComponent } from './dia.component';

describe('DiaComponent', () => {
  let component: DiaComponent;
  let fixture: ComponentFixture<DiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaComponent]
    });
    fixture = TestBed.createComponent(DiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
