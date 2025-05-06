import { inject, Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { Post } from '../../types/class/post.class';
import { addDoc, collection, doc, orderBy, query, where } from 'firebase/firestore';
import { first, from, map, Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private firestore = inject(Firestore);

  constructor() { }

  create = (post: Post): Observable<void> => {
    const createdPost = addDoc(collection(this.firestore, 'posts'), {
      content: post.content,
      author: post.author.email,
    }).then(() => {});

    return from(createdPost);
  }

  getByUser = (email: string) => {
    const postsRef = collection(this.firestore, 'posts');
    const usersRef = collection(this.firestore, 'users');

    return collectionData(
      query(postsRef, where('author', '==', email)),
    ).pipe(
      first(),
      switchMap((posts: any[]) => {
        if (posts.length === 0) return of([]);
        
        return collectionData(
          query(usersRef, where('email', '==', email)))
        .pipe(
          take(1),
          map((users: any) => {
            
            return posts.map(post => ({
              ...post,
              author: users[0]
            }));
          })
        );
      })
    );
  }
}
