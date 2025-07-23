import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/service/auth.service';

@Component({
  selector: 'app-login.component',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (this.usuario && this.clave) {
      this.authService.login(this.usuario, this.clave).subscribe({
        next: (resp) => {
          this.authService.guardarToken(resp.token);
          this.router.navigate(['/personas']);
        },
        error: () => {
          alert('Correo o contraseña inválidos');
        }
      });
    } else {
      alert('Por favor ingresa tu email y contraseña');
    }
  }
}
