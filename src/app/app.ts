import { Component, computed, inject } from '@angular/core';

import {HeaderComponent} from './component/layouts/header/header.component';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {FooterComponent} from './component/layouts/footer/footer.component';
import {LoadingComponent} from './component/layouts/loading/loading.component';
import {NavbarComponent} from './component/layouts/navbar/navbar.component';
import {filter} from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoadingComponent, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  rutaActual: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Escuchar cambios de ruta dinámicamente
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.rutaActual = event.urlAfterRedirects;
        console.log('Ruta actual:', this.rutaActual);
      });
  }
}
