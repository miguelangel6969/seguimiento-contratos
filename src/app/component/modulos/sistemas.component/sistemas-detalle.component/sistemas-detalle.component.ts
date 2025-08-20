import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Ambiente} from '../../../../core/models/Sistemas.model';

@Component({
  selector: 'app-sistemas-detalle',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sistemas-detalle.component.html',
})
export class SistemasDetalleComponent implements OnInit {
  @Input() ambiente!: Ambiente;
  @Output() cerrar = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
  }

}

