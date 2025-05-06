import { Component, inject, OnInit } from '@angular/core';
import { SvgComponent } from "../../shared/svg/svg.component";
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header/header.service';
import { PostCardComponent } from "../../shared/post-card/post-card.component";
import { PostService } from '../../services/post/post.service';
import { Post } from '../../types/class/post.class';

@Component({
  selector: 'app-home',
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private authService = inject(AuthService);
  private headerService = inject(HeaderService);
  private postService = inject(PostService);
  private router = inject(Router);

  posts: Array<Post> = [];

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigateByUrl('/auth');
      }
    });
  }

  getPosts() {
    this.postService.getByUser(this.authService.currentUserSig()!.email).subscribe({
      next: (response: any) => {        
        this.posts = response;        
      },
      error: (error) => {
        console.log(error);
        
      }
    });
  }

  ngOnInit(): void {
    this.headerService.currentHeader = 'Home';
    this.getPosts();
  }
}
