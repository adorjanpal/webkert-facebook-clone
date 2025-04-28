import { Component, inject } from '@angular/core';
import { HeaderService } from '../../../services/header/header.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected headerService = inject(HeaderService);
}
