import { Routes } from '@angular/router';
import {LoginComponent} from './component/modulos/login.component/login.component';
import {PersonasComponent} from './component/modulos/personas.component/personas.component';
import {SistemasComponent} from './component/modulos/sistemas.component/sistemas.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path: 'sistemas',
    component: SistemasComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

