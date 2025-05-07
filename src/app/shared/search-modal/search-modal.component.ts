import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { PostService } from '../../services/post/post.service';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {from, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user/user.service';
import { User } from '../../types/class/user.class';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-modal',
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatDialogModule, MatAutocompleteModule, AsyncPipe, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent implements OnInit {
  form: FormGroup;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  loader: { isLoading: boolean, emails: string[] } | null = null;

  users$: Observable<any> = new Observable();
  filteredUsers: [] = [];

  private fb = inject(FormBuilder);
  protected authService = inject(AuthService);
  private userService = inject(UserService);
  private dialogRef = inject(MatDialogRef<SearchModalComponent>);
  private router = inject(Router);
  private dialogData = inject(MAT_DIALOG_DATA);

  constructor() {
    this.form = this.fb.group({
      query: [''],
    });
  }

  submit() {
  }

  close() {
    this.dialogRef.close();
  }

  follow(email: string) {
    this.loader = {
      emails: [],
      isLoading: true,
    };
    this.loader.emails.push(email);

    this.userService.toggleFollow(this.authService.currentUserSig()!.email, email, true).subscribe({
      next: () => {
        setTimeout(() => {
          this.loader!.emails = this.loader!.emails.filter((value: string) => value === email);
        }, 1000);
      }
    });
  }

  unfollow(email: string) {
    this.loader = {
      emails: [],
      isLoading: true,
    };
    this.loader.emails.push(email);

    this.userService.toggleFollow(this.authService.currentUserSig()!.email, email, false).subscribe({
      next: () => {
        setTimeout(() => {
          this.loader!.emails = this.loader!.emails.filter((value: string) => value === email);
        }, 1000);
      }
    });
  }

  getUsers() {
    if (this.dialogData.users) {
      this.users$ = this.dialogData.users;  
    } else {
      this.users$ = this.userService.getMany();
    }
  }

  navToUser(email: string) {
    this.router.navigate(['profile', email]);
  }

  ngOnInit() {
    this.getUsers();
  }
}
