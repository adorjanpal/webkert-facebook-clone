import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterComponent } from "./subpages/register/register.component";
import { LoginComponent } from "./subpages/login/login.component";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, MatInputModule, MatButtonModule, RegisterComponent, LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  isRegister: boolean = true;

  switchPage() {
    this.isRegister = !this.isRegister;
  }
}
