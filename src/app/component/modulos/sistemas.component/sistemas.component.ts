import {AfterViewInit, Component, ViewChild} from '@angular/core';
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
import {Sistema} from '../../../core/models/Sistemas.model';
import {MatButton} from '@angular/material/button';
import {SistemasDetalleComponent} from './sistemas-detalle.component/sistemas-detalle.component';

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
    SistemasDetalleComponent,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCellDef
  ],
  templateUrl: './sistemas.component.html',
  styleUrl: './sistemas.component.css',
  standalone: true
})
export class SistemasComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'version', 'responsable', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Sistema>([
    { nombre: 'CoreBanking', version: '3.2.1', responsable: 'Ana Pérez', estado: 'Activo' },
    { nombre: 'CRM Suite', version: '2.0.5', responsable: 'Carlos López', estado: 'Inactivo' },
    { nombre: 'ERP Nexus', version: '5.1.0', responsable: 'Laura Gómez', estado: 'Mantenimiento' },
    { nombre: 'Inventario Pro', version: '1.8.3', responsable: 'David Ruiz', estado: 'Activo' },
    { nombre: 'Gestión RH', version: '4.0.0', responsable: 'Marta Torres', estado: 'Activo' },
  ]);

  modalSistema: Sistema | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  verDetalle(sistema: Sistema) {
    this.modalSistema = sistema;
  }

  cerrarModal() {
    this.modalSistema = null;
  }
}
