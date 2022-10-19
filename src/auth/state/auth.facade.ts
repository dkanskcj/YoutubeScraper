import { Injectable } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AuthActions } from "./auth.action";
import { AuthState, AuthModel } from "./auth.state";

@Injectable()
export class AuthFacade {
    @Select(AuthState) auth$: Observable<AuthModel>;
    @Select(state => state.auth.isLoggedIn) isLoggedIn$: Observable<boolean>;
    
    constructor(
        private store: Store
    ){}

    login(){
        this.store.dispatch(AuthActions.Login);
    }
    
    logout(){
        this.store.dispatch(AuthActions.Logout);
    }
}