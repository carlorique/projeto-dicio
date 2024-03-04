import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraComponent } from './palavra.component';

describe('PalavraComponent', () => {
  let component: PalavraComponent;
  let fixture: ComponentFixture<PalavraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalavraComponent]
    });
    fixture = TestBed.createComponent(PalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
