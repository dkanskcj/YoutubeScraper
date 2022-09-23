export interface Comment {
    context: string,
    userId: number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null 
}
