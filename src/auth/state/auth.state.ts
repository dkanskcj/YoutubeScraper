import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
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
    ) { }



    @Action(AuthActions.getInputs)
    getInputs(state: StateContext<AuthModel>, formData: any) {
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