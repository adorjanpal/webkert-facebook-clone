import { Component, EventEmitter, inject, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth/auth.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { SpinnerComponent } from "../../../../shared/spinner/spinner.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../../../shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-register',
  imports: [MatButtonModule, MatInputModule, CommonModule, FormsModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @Output() switchToLogin = new EventEmitter();
  isLoading: boolean = false;

  snackBar = inject(MatSnackBar)
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

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: 'Email is already taken!',
      duration: 5000,
    });
  }

  handleSubmit() {
    const { firstName, lastName, email, password } = this.form.getRawValue();
    this.isLoading = true;

    this.authService.register(email, firstName, lastName, password).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: () => {
        this.openSnackBar();
      }
    });
  }
}
