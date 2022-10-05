export interface GetCommentDTO {
    id?: number;
    name: string;
    content: string;
    password: string;
    createdAt?: Date
}