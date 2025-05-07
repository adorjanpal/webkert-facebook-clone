import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Post } from '../../types/class/post.class';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-post-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() post: Post = new Post(); 
}
