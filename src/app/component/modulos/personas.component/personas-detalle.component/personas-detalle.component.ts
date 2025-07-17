import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Persona } from '../../../../core/models/Persona.model';

@Component({
  selector: 'app-personas-detalle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personas-detalle.component.html',
})
export class PersonasDetalleComponent implements OnInit {
  @Input() persona!: Persona;
  @Output() cerrar = new EventEmitter<void>();

  personaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      nombre: [this.persona.nombre, Validators.required],
      correo: [this.persona.correo, [Validators.required, Validators.email]],
      telefono: [this.persona.telefono],
      direccion: [this.persona.direccion],
      fecha_creacion: [this.persona.fecha_creacion],
      id_tipo_documento: [this.persona.id_tipo_documento],
    });
  }

  guardar() {
    if (this.personaForm.valid) {
      console.log('Formulario guardado:', this.personaForm.value);
      this.cerrar.emit(); // Puedes emitir this.personaForm.value si quieres retornar datos
    }
  }
}
