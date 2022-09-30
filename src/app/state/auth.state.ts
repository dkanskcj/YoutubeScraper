import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { catchError, throwError, tap } from "rxjs";
import { AuthService } from "../core/service/auth.service";
import { LogIn, LogOut } from "./auth.actions";
import { AuthStateModel, testUser } from "./auth.model";



@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        authenticated: false,
        user: null
    }
})
@Injectable()
export class AuthState {
    @Selector()
    static getUser(state: AuthStateModel) {
        return state.user;
    }


    @Selector()
    static isAuthenticated(state: AuthStateModel) {
        return state.authenticated;
    }

    @Selector()
    static isConfirmed(state: AuthStateModel) {
        return !!state.user && state.user.isConfirmed;
    }

    constructor(
        private auth: AuthService
    ) { }

    @Action(LogIn)
    logIn({ setState, patchState }: StateContext<AuthStateModel>, { payload }: any) {
        return this.auth.logIn(payload).pipe(
            catchError((err, caught) => {
                setState({
                    authenticated: false,
                    user: null
                });
                return throwError(err);
            }),
            tap((result: testUser) => {
                setState({
                    authenticated: true,
                    user: result
                });
            })
        );
    }

    @Action(LogOut)
    logOut({ setState }: StateContext<AuthStateModel>) {
        return this.auth.logOut().pipe(
            catchError((err, caught) => {
                setState({
                    authenticated: false,
                    user: null
                });
                return throwError(err);
            }),
            tap((result: testUser) => {
                setState({
                    authenticated: false,
                    user: null
                });
            })
        );
    }
}