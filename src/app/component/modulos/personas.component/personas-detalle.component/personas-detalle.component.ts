import {Component, EventEmitter, Input, Output, OnInit, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Persona } from '../../../../core/models/Persona.model';
import {PersonaService} from '../../../../core/service/persona.service';
import {Rol} from '../../../../core/models/Rol.model';

@Component({
  selector: 'app-personas-detalle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personas-detalle.component.html',
})
export class PersonasDetalleComponent implements OnInit {
  @Input() persona!: Persona;
  @Input() crear!: boolean;
  @Output() cerrar = new EventEmitter<void>();

  personaForm!: FormGroup;
  roles: Rol[] = [];
  esCreacion : Boolean = false;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.esCreacion = this.crear;

    if (this.esCreacion) {
      this.personaService.getRoles().subscribe({
        next: (resp) => (this.roles = resp)
      });
    }

    this.personaForm = this.fb.group({
      nombre: [this.persona?.nombre ?? '', Validators.required],
      numero_documento: [this.persona?.numero_documento ?? '', Validators.required],
      idTipoDocumento: [this.persona?.idTipoDocumento ?? null, Validators.required],
      correo: [
        this.persona?.correo ?? '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@sic\.gov\.co$/)]
      ],
      telefono: [this.persona?.telefono ?? ''],
      direccion: [this.persona?.direccion ?? ''],
      fecha_nacimiento: [this.persona?.fecha_nacimiento ?? null],
      fechaCreacion: [this.esCreacion ? null : this.persona?.fechaCreacion ?? new Date()],
      responsable_iva: [this.persona?.responsable_iva ?? '0'],
      genera_factura: [this.persona?.genera_factura ?? '0'],

      // Solo para creación
      usuario: [this.esCreacion ? '' : null],
      idRoles: [this.esCreacion ? [] : null]
    });

    if (this.esCreacion) {
      this.personaForm.get('correo')?.valueChanges.subscribe(val => {
        const usuario = val?.split('@')[0] ?? '';
        this.personaForm.get('usuario')?.setValue(usuario, { emitEvent: false });
      });
    }
  }

  guardar(): void {
    if (this.personaForm.invalid) return;

    const form = this.personaForm.value;
    this.esCreacion = this.crear;

    if (!form.correo.endsWith('@sic.gov.co')) {
      form.correo = form.correo.split('@')[0] + '@sic.gov.co';
    }

    if (this.esCreacion) {
      const payload = {
        nombre: form.nombre,
        numero_documento: form.numero_documento,
        telefono: form.telefono,
        correo: form.correo,
        direccion: form.direccion,
        idTipoDocumento: form.idTipoDocumento,
        responsable_iva: form.responsable_iva ?? '0',
        genera_factura: form.genera_factura ?? '0',
        fecha_nacimiento: form.fecha_nacimiento,
        usuario: form.usuario,
        clave: form.numero_documento,
        fechaCreacion: new Date(),
        idRoles: [form.idRoles]
      };

      this.personaService.crearPersona(payload).subscribe({
        next: () => this.cerrar.emit()
      });
    } else {
      const payload = {
        ...form,
        id_persona: this.persona.id_persona,
        numero_documento: form.numero_documento
      };

      this.personaService.actualizarPersona(payload).subscribe({
        next: () => this.cerrarYLimpiar()
      });
    }
  }

  cerrarYLimpiar(): void {
    this.personaForm.reset();
    this.cerrar.emit();
  }
}
