import { Contents } from "../content/content-interface";

export interface User {
    id: number,
    name?: string,
    password: string,
    contents?: Contents[],
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null;
}
