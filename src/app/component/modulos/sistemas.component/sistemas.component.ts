import {AfterViewInit, Component, signal, ViewChild} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Ambiente, Sistema} from '../../../core/models/Sistemas.model';
import {MatButton} from '@angular/material/button';
import {SistemasDetalleComponent} from './sistemas-detalle.component/sistemas-detalle.component';
import {Persona} from '../../../core/models/Persona.model';
import {SistemasService} from '../../../core/service/sistema.service';
import {MatDialog} from '@angular/material/dialog';
import {PersonaService} from '../../../core/service/persona.service';
import {PersonasDetalleComponent} from '../personas.component/personas-detalle.component/personas-detalle.component';

@Component({
  selector: 'app-sistemas.component',
  imports: [
    MatPaginator,
    MatHeaderRow,
    MatRow,
    MatHeaderCell,
    MatButton,
    MatCell,
    MatColumnDef,
    MatTable,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCellDef,
    SistemasDetalleComponent
  ],
  templateUrl: './sistemas.component.html',
  styleUrl: './sistemas.component.css',
  standalone: true
})

export class SistemasComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'Desarrollo', 'Pruebas', 'Produccion', 'acciones'];
  modalSistema: Sistema | null = null;
  dataSource = new MatTableDataSource<Sistema>();
  sistemas = signal<Sistema[]>([]);
  cargando = signal(true);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private sistemasService: SistemasService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.cargar();
  }

  cargar() {
    this.sistemasService.getSistemas().subscribe({
      next: (resp) => {
        this.sistemas.set(resp); // Guardamos en el signal
        this.dataSource.data = resp; // Alimentamos la tabla
      },
      complete: () => this.cargando.set(false),
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  tieneAmbiente(sistema: Sistema, tipo: string): boolean {
    return sistema.ambientes?.some(
      amb => amb.tipo_ambiente.nombre.toUpperCase() === tipo
    ) ?? false;
  }

  modalAmbiente: Ambiente | null = null;

  verDetalleAmbiente(sistema: Sistema, tipo: string) {
    const ambiente = sistema.ambientes.find(
      amb => amb.tipo_ambiente.nombre.toUpperCase() === tipo
    );
    if (ambiente) {
      this.modalAmbiente = ambiente;
    }
  }

  cerrarModal() {
    this.modalAmbiente = null;
  }

}
