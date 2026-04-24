import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'student' && this.password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password. Use student / 1234';
    }
  }
}