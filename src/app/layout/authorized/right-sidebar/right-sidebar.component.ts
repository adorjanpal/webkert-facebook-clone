import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../../services/user/user.service';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../types/class/user.class';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-sidebar',
  imports: [MatCardModule, AsyncPipe],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss'
})
export class RightSidebarComponent implements OnInit {
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private router = inject(Router);

  users$: Observable<User[]> = new Observable();

  getUsers() {
    this.users$ = this.userService.getMany().pipe(
      map((users: User[]) => users.filter((user: User) => user.email !== this.authService.currentUserSig()!.email)),
    );
  }

  navToUser(email: string) {
    this.router.navigate(['/profile', email]).then(() => window.location.reload());
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
