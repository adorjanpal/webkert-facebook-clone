import { Component, inject, OnInit } from '@angular/core';
import { SvgComponent } from "../../shared/svg/svg.component";
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header/header.service';
import { PostCardComponent } from "../../shared/post-card/post-card.component";

@Component({
  selector: 'app-home',
  imports: [SvgComponent, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);
  private headerService = inject(HeaderService);
  router = inject(Router);

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigateByUrl('/auth');
      }
    });
  }

  ngOnInit(): void {
    this.headerService.currentHeader = 'Home'
  }
}
