export interface testUser {
    userId: number;
    clientId: number;
    username: string;
    isConfirmed: boolean;
    csrfToken: string;
    token: string;
}

export class AuthStateModel {
    authenticated: boolean;
    user: testUser;
}