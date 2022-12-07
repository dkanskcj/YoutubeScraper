import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { UserService } from "src/service/user/user.service";
import { AuthActions } from "./auth.action";


export interface AuthModel {
    name: string;
    password: string;
    isLoggedIn: boolean;
}

export const AUTH_STATE_TOKEN = new StateToken<AuthModel>('auth');

@State<AuthModel>({
    name: AUTH_STATE_TOKEN,
    defaults: {
        name: '',
        password: '',
        isLoggedIn: false
    }
})
@Injectable()
export class AuthState {


    constructor(
        private userService: UserService,
    ) { }



    @Action(AuthActions.getInputs)
    getInputs(state: StateContext<AuthModel>, formData: any) {
        // this.userService.loginUser(formData.formData.password).subscribe({
        //     next: (res) => {
        //         console.log(res, '!!!')
        //     },
        //     error: (err) => {
        //         console.log(err, ' !!!')
        //     }
        // });
        state.patchState({
            name: formData.formData.name,
            password: formData.formData.password,
            isLoggedIn: true
        })
    }

    @Action(AuthActions.Login)
    login(state: StateContext<AuthModel>) {
        return state.getState();
    }

    @Action(AuthActions.Logout)
    logout(state: StateContext<AuthModel>) {
        state.setState({
            name: '',
            password: '',
            isLoggedIn: false
        });
        console.log(state)
    }
}