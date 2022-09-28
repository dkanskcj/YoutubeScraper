// import { Comments } from "../comment/comment-interface";
import { Contents } from "../content/content-interface";

export interface User {
    id: number,
    name?: string,
    password: string,
    contents?: Contents[],
    // comments?: Comments[]
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null;
}
