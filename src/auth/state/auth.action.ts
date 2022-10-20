import { ILoginUserDTO } from "src/service/user/dto/login-user.dto";

export namespace AuthActions{
    export class Login{
        static readonly type = '[Auth] Login';
    }

    export class Logout{
        static readonly type = '[Auth] Logout';
    }

    export class getInputs{
        constructor(
            public formData: any,
        ){}
        static readonly type = '[Auth] getInputs';
    }

    export class setUserName{
        constructor(
            public name: string
        ){}
        static readonly type = '[Storage] SetUsetName'
    }
}