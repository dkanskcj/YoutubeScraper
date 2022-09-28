import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@ngxs/store';


// SERVICES
import { AuthState } from '../state/auth.state';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.store.selectOnce(appState => appState.auth.user === null || !appState.auth.user.is_confirmed).pipe(
        tap(allowed => {
            const isConfirmed = this.store.selectSnapshot(AuthState.isConfirmed);
            const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
            if (isAuthenticated) {
              this.router.navigateByUrl('/');
            }
          }
        )
      );
  }
}
