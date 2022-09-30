import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // @Select(AuthState.isAuthenticated) authenticated$: Observable<boolean>;
  // @Select(AuthState.getUser) user$: Observable<boolean>;
  
  constructor(
    // private actions$: Actions,
    private router: Router
  ) {}

  ngOnInit() {
    // Listen to LogIn actions
    // this.actions$.pipe(ofActionDispatched(LogIn)).subscribe(() => {
    //   console.log('-- ofAction');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/dashboard');
    //   }, 10);
    //   // console.warn('-- LOGGED IN');
    // });

    // // Listen to LogOut actions
    // this.actions$.pipe(ofActionDispatched(LogOut)).subscribe(() => {
    //   this.router.navigateByUrl('/auth/login');
    //   // console.warn('-- LOGGED OUT');
    // });
  }

  // logIn() {
  //   this.store.dispatch(new LogIn({ email: 'mail@mail.com', password: '123456' }));
  // }

  // logOut() {
  //   this.store.dispatch(new LogOut());
  // }
}
