import { User } from "../user/user-interface";

export interface Contents {
    thumbNail?: string,
    genre?: string,
    videoLength?: string,
    hashTag?: string,
    author?: User[],
    authorId?: number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt?: Date | null
}