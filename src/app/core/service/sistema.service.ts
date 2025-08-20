import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona.model';
import { environment } from '../../../environments/environment';
import { Rol } from '../models/Rol.model';
import {Sistema} from '../models/Sistemas.model';

@Injectable({
  providedIn: 'root'
})
export class SistemasService {
  private apiUrl = `${environment.apiUrl}/sistema`;

  constructor(private http: HttpClient) {}

  getSistemas(): Observable<Sistema[]> {
    return this.http.get<Sistema[]>(`${this.apiUrl}/listarambiente`);
  }

}
