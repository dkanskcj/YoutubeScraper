import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store, Actions, ofActionDispatched } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LogIn, LogOut } from './state/auth.actions';
import { AuthState } from './state/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(AuthState.isAuthenticated) authenticated$: Observable<boolean>;
  @Select(AuthState.getUser) user$: Observable<boolean>;
  
  constructor(
    private store: Store,
    private actions$: Actions,
    private router: Router
  ) {}

  ngOnInit() {
    // Listen to LogIn actions
    this.actions$.pipe(ofActionDispatched(LogIn)).subscribe(() => {
      console.log('-- ofAction');
      setTimeout(() => {
        this.router.navigateByUrl('/dashboard');
      }, 10);
      // console.warn('-- LOGGED IN');
    });

    // Listen to LogOut actions
    this.actions$.pipe(ofActionDispatched(LogOut)).subscribe(() => {
      this.router.navigateByUrl('/auth/login');
      // console.warn('-- LOGGED OUT');
    });
  }

  logIn() {
    this.store.dispatch(new LogIn({ email: 'mail@mail.com', password: '123456' }));
  }

  logOut() {
    this.store.dispatch(new LogOut());
  }
}
