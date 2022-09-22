export interface User {
    id: number,
    name?: string,
    password: string,
    contents?: [],
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null;
}
