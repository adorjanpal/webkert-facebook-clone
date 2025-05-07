import { Component, EventEmitter, inject, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';
import { SpinnerComponent } from "../../../../shared/spinner/spinner.component";
import { finalize } from 'rxjs';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../../../shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatInputModule, CommonModule, ReactiveFormsModule, FormsModule, SpinnerComponent, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() switchToRegister = new EventEmitter();
  isLoading: boolean = false;
  
  snackBar = inject(MatSnackBar);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: 'Invalid email / password!',
      duration: 5000,
    });
  }

  switchPage() {
    this.switchToRegister.emit();
  }

  handleSubmit() {
    const { email, password } = this.form.getRawValue();
    this.isLoading = true;

    this.authService.login(email, password).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: () => {
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 1000);
      },
      error: (error) => {
        this.form.reset();
        this.openSnackBar();
      },
    })
  }
}
