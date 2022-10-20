import { ILoginUserDTO } from "src/service/user/dto/login-user.dto";

export interface GetCommentDTO {
    // push(res: GetCommentDTO): unknown;
    id?: number;
    content: string;
    user: ILoginUserDTO
    createdAt?: Date
}