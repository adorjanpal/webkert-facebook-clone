import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile, user } from '@angular/fire/auth';
import { User } from '../../types/class/user.class';
import { from, Observable } from 'rxjs';
import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  firestore = inject(Firestore);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<{email: string} | null | undefined>(undefined);

  constructor() { }

  isAuthenticated() {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      if (user) {
        this.currentUserSig.set({
          email: user.email!,
        })
      }
    })
  }

  register(email: string, firstName: string, lastName: string, password: string): Observable<void> {
    const fireRegResult = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
      .then((response) => {
        const createdUser = new User(email, '', firstName, lastName).toJSON();
        addDoc(collection(this.firestore, 'users'), createdUser);        
      })

      return from(fireRegResult);
  }

  login(email: string, password: string): Observable<void> {
    const fireLoginResult = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});

    return from(fireLoginResult)
  }

  logout(): Observable<void> {
    const fireLogoutRes = signOut(this.firebaseAuth);
    
    return from(fireLogoutRes);
  }
}
