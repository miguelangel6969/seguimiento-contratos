import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Persona} from '../../../core/models/Persona.model';

import {MatDialog} from '@angular/material/dialog';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PersonasDetalleComponent} from './personas-detalle.component/personas-detalle.component';


@Component({
  selector: 'app-personas.component',
  imports: [
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatCell,
    MatButton,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    PersonasDetalleComponent,
    MatPaginator,
  ],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements AfterViewInit {
  modalPersona: Persona | null = null;
  displayedColumns: string[] = ['nombre', 'correo', 'telefono', 'direccion', 'acciones'];
  dataSource = new MatTableDataSource<Persona>([
    {
      id_persona: 1,
      nombre: 'Ana María Pérez',
      correo: 'ana.perez@mail.com',
      direccion: 'Calle 45 #10-23 Bogotá',
      telefono: '3111234567',
      fecha_creacion: new Date('2023-02-10'),
      id_tipo_documento: 1
    },
    {
      id_persona: 2,
      nombre: 'Carlos López',
      correo: 'carlos.lopez@mail.com',
      direccion: 'Cra 12 #89-10 Medellín',
      telefono: '3009876543',
      fecha_creacion: new Date('2022-08-15'),
      id_tipo_documento: 2
    },
    {
      id_persona: 3,
      nombre: 'Lucía Torres',
      correo: 'lucia.torres@mail.com',
      direccion: 'Av. Chile #25-45 Cali',
      telefono: '3105678910',
      fecha_creacion: new Date('2024-01-05'),
      id_tipo_documento: 1
    },
    {
      id_persona: 4,
      nombre: 'Julián Sánchez',
      correo: 'julian.sanchez@mail.com',
      direccion: 'Cl 80 #65-12 Barranquilla',
      telefono: '3012223344',
      fecha_creacion: new Date('2023-06-22'),
      id_tipo_documento: 3
    },
    {
      id_persona: 5,
      nombre: 'Camila Rodríguez',
      correo: 'camila.rodriguez@mail.com',
      direccion: 'Cra 11 #102-30 Bogotá',
      telefono: '3129988776',
      fecha_creacion: new Date('2022-12-01'),
      id_tipo_documento: 2
    },
    {
      id_persona: 6,
      nombre: 'David Mendoza',
      correo: 'david.mendoza@mail.com',
      direccion: 'Cl 7 #5-18 Manizales',
      telefono: '3151234567',
      fecha_creacion: new Date('2023-04-10'),
      id_tipo_documento: 1
    },
    {
      id_persona: 7,
      nombre: 'Laura Gómez',
      correo: 'laura.gomez@mail.com',
      direccion: 'Av. Las Palmas #100 Medellín',
      telefono: '3168881122',
      fecha_creacion: new Date('2023-11-19'),
      id_tipo_documento: 1
    },
    {
      id_persona: 8,
      nombre: 'Andrés Ramírez',
      correo: 'andres.ramirez@mail.com',
      direccion: 'Cra 21 #84-09 Cartagena',
      telefono: '3175554433',
      fecha_creacion: new Date('2024-03-28'),
      id_tipo_documento: 2
    },
    {
      id_persona: 9,
      nombre: 'Natalia Suárez',
      correo: 'natalia.suarez@mail.com',
      direccion: 'Cl 52 #26-71 Bucaramanga',
      telefono: '3186677899',
      fecha_creacion: new Date('2022-05-15'),
      id_tipo_documento: 3
    },
    {
      id_persona: 10,
      nombre: 'Felipe Castillo',
      correo: 'felipe.castillo@mail.com',
      direccion: 'Cra 35 #10-15 Pereira',
      telefono: '3192233445',
      fecha_creacion: new Date('2023-08-09'),
      id_tipo_documento: 1
    }
  ]);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  verDetalle(persona: Persona) {
    this.modalPersona = persona;
  }

  cerrarModal() {
    this.modalPersona = null;
  }
}
