import { Injectable } from "@angular/core";
import { delay, Observable, of as observableOf } from "rxjs";
import { testUser } from "src/app/state/auth.model";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() { }

    logIn(user: { email: string, password: string }): Observable<testUser> {
        return observableOf({
            username: 'some user',
            csrfToken: "x-123456",
            userId: 1,
            clientId: 1,
            isConfirmed: true,
            token: '123456'
        }).pipe(
            delay(500)
        );
    }

    logOut(): Observable<any> {
        return observableOf({ "detail": "Successfully logged out." });
    }
}