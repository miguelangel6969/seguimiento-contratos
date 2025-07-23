import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Persona} from '../../../core/models/Persona.model';
import { signal, computed } from '@angular/core';
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
import {PersonaService} from '../../../core/service/persona.service';


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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  modalPersona: Persona | null = null;
  displayedColumns: string[] = ['nombre', 'correo', 'telefono', 'direccion', 'acciones'];
  cargando = signal(true);
  personas = signal<Persona[]>([]);
  dataSource = new MatTableDataSource<Persona>();

  constructor(
    private dialog: MatDialog,
    private personaService: PersonaService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.cargar();
  }

  cargar() {
    this.personaService.getPersonas().subscribe({
      next: (resp) => {
        this.personas.set(resp.map(p => ({
          ...p,
          fecha_creacion: new Date(p.fechaCreacion)
        })));
        this.dataSource.data = this.personas();
      },
      complete: () => this.cargando.set(false),
    });
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

  crearPersona(){

  }
}
