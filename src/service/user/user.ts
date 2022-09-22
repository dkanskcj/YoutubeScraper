export interface User {
    id: Number,
    name?: string,
    password: string,
    contents?: [],
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null;
}
