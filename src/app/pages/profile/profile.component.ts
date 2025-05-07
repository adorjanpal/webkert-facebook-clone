import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { MatCardModule } from '@angular/material/card';
import { PostCardComponent } from "../../shared/post-card/post-card.component";
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../types/class/user.class';
import { from, map, Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../types/class/post.class';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SearchModalComponent } from '../../shared/search-modal/search-modal.component';

@Component({
  selector: 'app-profile',
  imports: [MatCardModule, PostCardComponent, AsyncPipe, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  private headerService = inject(HeaderService);
  private userService = inject(UserService);
  private postService = inject(PostService);
  private authService = inject(AuthService);
  private activatedRoute = inject(ActivatedRoute);
  private modal = inject(MatDialog);

  user$: Observable<User> = new Observable<User>();
  userPosts$: Observable<Post[]> = new Observable<Post[]>();

  getUser() {
    const userEmail = this.activatedRoute.snapshot.paramMap.get('email')||this.authService.currentUserSig()!.email;
    this.user$ = this.userService.get(userEmail);
    
    if (this.user$) {
      this.userPosts$ = this.postService.getByUser(userEmail);
    }
  }

  openModal(isFollowers: boolean) {
   this.modal.open(SearchModalComponent, {
      width: '400px',
      data: {
        users: this.user$.pipe(
          map((value) => isFollowers ? value.followers : value.following)
        )
      },
    });
  }

  ngOnInit(): void {
    this.headerService.currentHeader = 'Profile';
    this.getUser();
  }
}
