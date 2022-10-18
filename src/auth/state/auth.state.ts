import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { ILoginUserDTO } from "src/service/user/dto/login-user.dto";
import { AuthActions } from "./auth.action";


export interface AuthModel {
    name: string;
    isLoggedIn: boolean;
}

export const AUTH_STATE_TOKEN = new StateToken<AuthModel>('auth');

@State<AuthModel>({
    name: AUTH_STATE_TOKEN,
    defaults: {
        name: '',
        isLoggedIn: false
    }
})
@Injectable()
export class AuthState {


    constructor(
    ) { }



    @Action(AuthActions.getInputs)
    getInputs(state: StateContext<AuthModel>, formData: any) {
        state.patchState({
            name: formData.formData.name,
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
            isLoggedIn: false
        });
        console.log(state)
    }
}