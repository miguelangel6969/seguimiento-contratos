import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login.component',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login:', this.email, this.password);
    if (this.email && this.password) {
      this.router.navigate(['/personas']);
    } else {
      alert('Por favor ingresa tu email y contraseña');
    }
  }
}
