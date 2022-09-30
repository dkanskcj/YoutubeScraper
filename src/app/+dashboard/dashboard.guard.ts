import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@ngxs/store';
import { AuthState } from '../state/auth.state';

@Injectable({
    providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
    constructor(
        private store: Store,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.selectOnce(appState => appState.auth.user && appState.auth.user.is_confirmed).pipe(
            tap(
                (allowed) => {
                    console.log('-- allowed?', allowed);
                    if (!allowed) {
                        const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
                        console.log('-- isAUTH: ', isAuthenticated);

                        if (isAuthenticated) {
                            this.router.navigateByUrl('/');
                        } else {
                            this.router.navigateByUrl('/auth/login');
                        }
                    }
                }
            )
        );
    }

    /**
     * TODO: Implement `canLoad` guard, if we won't preload the dashboard module
     * Since the dashboard is loaded lazily, there is no need to request the module code
     * if the user doesn't have access anyway
     * Unless we'll include it in the custom PreloadingStrategy, which renders the `canLoad`
     * guard obsolete
     */
}
