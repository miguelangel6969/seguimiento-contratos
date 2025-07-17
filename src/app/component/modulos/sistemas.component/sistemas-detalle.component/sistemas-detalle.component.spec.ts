import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasDetalleComponent } from './sistemas-detalle.component';

describe('SistemasDetalleComponent', () => {
  let component: SistemasDetalleComponent;
  let fixture: ComponentFixture<SistemasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemasDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
