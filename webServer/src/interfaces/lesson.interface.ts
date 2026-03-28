import { UUID } from "node:crypto";

export interface Lesson {
    public_id: UUID,
    slug: string,
    title: string,
    subtitle: string,
    body: Text,
    created_by: Date,
    updated_at: Date
}

export type LessonPartial = Partial<Lesson>