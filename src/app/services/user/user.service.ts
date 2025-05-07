import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, limit, query, updateDoc, where } from 'firebase/firestore';
import { from, map, Observable } from 'rxjs';
import { User } from '../../types/class/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private firestore = inject(Firestore);

  constructor() { }

  getMany = (limit?: number) => {
    const usersRef = collection(this.firestore, 'users');

    return collectionData(
     usersRef
    ).pipe(
      map((users: any) => {
        return users.map((user: any) => User.fromJSON(user));
      })
    )
  }

  get = (email: string) => {
    return collectionData(
      query(collection(this.firestore, 'users'), where('email', '==', email))
    ).pipe(
      map((docData: any) => {
        return User.fromJSON(docData[0]);
      })
    );
  }

  toggleFollow = (currentUser: string, userToFollow: string, isFollow: boolean): Observable<void> => {
    const userCollection = collection(this.firestore, 'users');
    const q1 = query(userCollection, where('email', '==', currentUser), limit(1));
    const q2 = query(userCollection, where('email', '==', userToFollow), limit(1));

    const result = getDocs(q1).then(result => {
      const currentUserRef = doc(this.firestore, 'users', result.docs[0].id);

      if (isFollow) {
        updateDoc(currentUserRef, {
          following: arrayUnion(userToFollow),
        });
      } else {
        updateDoc(currentUserRef, {
          following: arrayRemove(userToFollow),
        });
      }
    }).then(() => {
      getDocs(q2).then(result => {
        const userToFollowRef = doc(this.firestore, 'users', result.docs[0].id);
        
        if (isFollow) {
          updateDoc(userToFollowRef, {
            followers: arrayUnion(currentUser),
          });
        } else {
          updateDoc(userToFollowRef, {
            followers: arrayRemove(currentUser),
          });
        }
      });
    });

    return from(result);
  }
}
