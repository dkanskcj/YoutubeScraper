export class LogIn {
    static readonly type = '[Auth] Login'
    constructor(
        public payload: { email: string, password: string }
    ) { }
}

export class LogOut {
    static readonly type = '[Auth] Logout'
}