import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../../services/auth/auth.service';
import { Post } from '../../../../../types/class/post.class';
import { User } from '../../../../../types/class/user.class';
import { FirebaseApp } from '@angular/fire/app';
import { PostService } from '../../../../../services/post/post.service';


@Component({
  selector: 'app-create-post-form',
  imports: [MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './create-post-form.component.html',
  styleUrl: './create-post-form.component.scss'
})
export class CreatePostFormComponent {
  form: FormGroup;

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private postService = inject(PostService);

  private dialogRef = inject(MatDialogRef<CreatePostFormComponent>);

  constructor() {
    this.form = this.fb.group({
      content: ['', [ Validators.required ]],
    });
  }

  submit() {
    if (this.form.valid) {
      const { content } = this.form.getRawValue();
      const post = new Post(new User(this.authService.currentUserSig()!.email), content);
      
      this.postService.create(post).subscribe((value: void) => {
        this.dialogRef.close(this.form.value);
      });

      
    }
  }

  close() {
    this.dialogRef.close();
  }
}
