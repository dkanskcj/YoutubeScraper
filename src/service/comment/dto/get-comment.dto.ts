export interface GetCommentDTO {
    // push(res: GetCommentDTO): unknown;
    id?: number;
    name: string;
    content: string;
    password: string;
    createdAt?: Date
}