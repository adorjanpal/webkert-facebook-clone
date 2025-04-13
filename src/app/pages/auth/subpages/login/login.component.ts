import { Component, EventEmitter, inject, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatInputModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() switchToRegister= new EventEmitter();

  formBuilder = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  switchPage() {
    this.switchToRegister.emit();
  }

  handleSubmit() {
    const { email, password } = this.form.getRawValue();

    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error.message);
        this.form.reset();
      }
    })
  }
}
