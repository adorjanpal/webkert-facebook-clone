import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { MatCardModule } from '@angular/material/card';
import { PostCardComponent } from "../../shared/post-card/post-card.component";

@Component({
  selector: 'app-profile',
  imports: [MatCardModule, PostCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  private headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.currentHeader = 'Profile';
  }
}
