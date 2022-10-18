import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AuthActions } from 'src/auth/state/auth.action';
import { AuthFacade } from 'src/auth/state/auth.facade';
import { ILoginUserDTO } from 'src/service/user/dto/login-user.dto';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  auth$ = this.authFacade.auth$;

  createForm = new FormGroup({
    name: new FormControl(null),
    password: new FormControl(null)
  })



  constructor(
    private userService: UserService,
    private store: Store,
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
  }
  user: ILoginUserDTO;

  login() {
    const body = this.createForm.getRawValue();
    if (!body.name || !body.password) {
      return alert('아이디와 비밀번호를 입력해 주시기 바랍니다.')
    }
    this.userService.loginUser(body).subscribe({
      next: (res: ILoginUserDTO) => {
        this.user = res;
        console.log(this.user, 'ttt')
        this.store.dispatch(new AuthActions.getInputs(this.user));
        this.createForm.setValue({
          name: '',
          password: ''
        })
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
  logout() {
    this.authFacade.logout();
  }
}
