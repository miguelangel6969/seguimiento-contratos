import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasDetalleComponent } from './personas-detalle.component';

describe('PersonasDetalleComponent', () => {
  let component: PersonasDetalleComponent;
  let fixture: ComponentFixture<PersonasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonasDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
