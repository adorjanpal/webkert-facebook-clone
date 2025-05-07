import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log(authService.currentUserSig());
  
  if (!authService.currentUserSig()) {
    router.navigateByUrl('/auth');

    return false;
  }

  return true;
};
