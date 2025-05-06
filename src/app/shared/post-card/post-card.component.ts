import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Post } from '../../types/class/post.class';

@Component({
  selector: 'app-post-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() post: Post = new Post(); 
}
