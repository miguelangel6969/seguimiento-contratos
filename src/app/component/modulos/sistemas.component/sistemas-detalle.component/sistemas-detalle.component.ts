import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Sistema {
  nombre: string;
  version: string;
  responsable: string;
  estado: string;
}

@Component({
  selector: 'app-sistemas-detalle',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sistemas-detalle.component.html',
})
export class SistemasDetalleComponent implements OnInit {
  @Input() sistema!: Sistema;
  @Output() cerrar = new EventEmitter<void>();

  sistemaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.sistemaForm = this.fb.group({
      nombre: [this.sistema.nombre, Validators.required],
      version: [this.sistema.version, Validators.required],
      responsable: [this.sistema.responsable, Validators.required],
      estado: [this.sistema.estado, Validators.required],
    });
  }

  guardar() {
    if (this.sistemaForm.valid) {
      console.log('Sistema actualizado:', this.sistemaForm.value);
      this.cerrar.emit();
    }
  }
}

