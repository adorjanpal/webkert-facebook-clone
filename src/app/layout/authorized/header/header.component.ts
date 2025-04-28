import { Component, inject } from '@angular/core';
import { HeaderService } from '../../../services/header/header.service';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected headerService = inject(HeaderService);
}
