import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile, user } from '@angular/fire/auth';
import { User } from '../../types/class/user.class';
import { from, Observable } from 'rxjs';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<{email: string} | null | undefined>(undefined);

  constructor() { }

  register(email: string, firstName: string, lastName: string, password: string): Observable<void> {
    const fireRegResult = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
      .then((response) => {
        updateProfile(response.user, {displayName: `${firstName} ${lastName}`});
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
