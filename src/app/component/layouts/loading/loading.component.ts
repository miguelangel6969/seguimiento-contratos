import { Component, OnInit } from '@angular/core';
import {LoadingService} from '../../../core/service/loading.service';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  imports: [
    AsyncPipe
  ]
})
export class LoadingComponent {
  loading$: Observable<boolean>;

  constructor(public loader: LoadingService) {
    this.loading$ = this.loader.loading$;
  }

  ngOnInit() {}
}
