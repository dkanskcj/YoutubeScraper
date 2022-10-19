import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthFacade } from './auth.facade';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private authFacade: AuthFacade,
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authFacade.isLoggedIn$.pipe(map(isLoggedIn => {
      if (!isLoggedIn) {
        this.router.navigate(['/no-soup-for-you']);
        return false;
      }
      return true;
    }))
  }
  
}
