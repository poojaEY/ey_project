// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoginFormVisible: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      alert('Login successful! Redirecting to the new page.');
      this.router.navigate(['/new-page']);
    } else {
      alert('Invalid username or password');
    }
  }

  showLoginForm() {
    this.isLoginFormVisible = true;
  }

  hideLoginForm() {
    this.isLoginFormVisible = false;
  }
}
