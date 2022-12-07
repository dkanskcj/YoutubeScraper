import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthActions } from 'src/auth/state/auth.action';
import { AuthFacade } from 'src/auth/state/auth.facade';
import { AuthState, AuthModel } from 'src/auth/state/auth.state';
import { ILoginUserDTO } from 'src/service/user/dto/login-user.dto';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Select(AuthState) user$:Observable<AuthModel>;

  isLoggedIn$: boolean = false;
  createForm = new FormGroup({
    name: new FormControl(null),
    password: new FormControl(null)
  })



  constructor(
    private userService: UserService,
    private store: Store,
    private authFacade: AuthFacade,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user$.subscribe({
      next: (res) => {
        this.isLoggedIn$ = res.isLoggedIn;
      },
      error: (err) => {
        console.log(err)
      }
    })
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
        console.log(this.user.password)
        console.log(body.password)
        this.store.dispatch(new AuthActions.getInputs(this.user));
        this.createForm.setValue({
          name: '',
          password: ''
        })
        this.router.navigateByUrl('/main');
      },
      error: (err:HttpErrorResponse) => {
        if(err.error.message === '유저 정보를 찾을 수 없습니다.'){
          return alert('등록되지 않은 사용자입니다.')
        }
        else if(err.error.message === '아이디 또는 비밀번호가 일치하지 않습니다.'){
          return alert('아이디 또는 비밀번호가 올바르지 않습니다.')
        }
      }
    });
  }
  logout() {
    if(this.isLoggedIn$ === true){
      this.authFacade.logout();
      return alert('로그아웃 하였습니다.')
    }
    else{
      return alert('로그인을 해주시길 바랍니다.')
    }
  }

  registerUser(){
    const body = this.createForm.getRawValue();
    if(!body.name || !body.password){
      return alert('아이디 또는 비밀번호를 입력해 주시기 바랍니다.')
    }
    else{
      this.userService.createUser(body).subscribe({
        next: (res) => {
          return alert('회원가입이 완료되었습니다. 로그인을 해주시기 바랍니다.')
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
          if(err.error.message === '아이디가 중복됩니다. 다른 아이디를 생성해 주시기 바랍니다.'){
            return alert('이미 가입된 아이디입니다. 다른 아이디를 입력해 주시기 바랍니다.')
          }
        }
      });
    }
  }

  keyupEnter(e: Event){
    if(e['key'] === 'Enter'){
      this.login();
    }
  }
}
