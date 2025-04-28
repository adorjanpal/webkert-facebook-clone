import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-post-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {

}
