import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';
import {MatInputModule} from '@angular/material/input';
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-left-sidebar',
  imports: [
    MatButtonModule, 
    MatIconModule, 
    RouterModule,
    MatInputModule,
  ],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  private modal = inject(MatDialog);
  private authService = inject(AuthService);

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        window.location.reload();
      }
    });
  }

  openCreatePost() {
    const modalRef = this.modal.open(CreatePostFormComponent, {
      width: '400px',
      data: {},
    });

    modalRef.afterClosed().subscribe((result: any) => {
        window.location.reload();
    })
  }
}
