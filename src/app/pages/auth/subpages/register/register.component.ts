import { Component, EventEmitter, inject, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth/auth.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [MatButtonModule, MatInputModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @Output() switchToLogin = new EventEmitter();

  authService = inject(AuthService);
  router = inject(Router);
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  switchPage() {
    this.switchToLogin.emit();
  }

  handleSubmit() {
    const { firstName, lastName, email, password } = this.form.getRawValue();

    this.authService.register(email, firstName, lastName, password).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
    });
  }
}
