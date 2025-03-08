import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let _userAuthService = inject(UserAuthService);
  let router = inject(Router);
  if (_userAuthService.isLoggedIn()) {
    return true;
  } 
  else {
    router.navigate(['/login']);
    return false;
  }
};
