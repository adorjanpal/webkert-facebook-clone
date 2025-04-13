import { Component, inject } from '@angular/core';
import { SvgComponent } from "../../shared/svg/svg.component";
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [SvgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigateByUrl('/auth');
      }
    });
  }
}
