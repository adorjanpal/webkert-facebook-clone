import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  private headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.currentHeader = 'Messages';
  }
}
