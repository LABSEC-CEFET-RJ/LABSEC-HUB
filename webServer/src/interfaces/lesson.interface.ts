import { UUID } from "node:crypto";

export interface Lesson {
    public_id: UUID,
    slug: string,
    title: string,
    subtitle: string,
    body: Text,
    created_at: Date,
    updated_at: Date,
    created_by: string | number,
    updated_by: string | number
}

export type LessonPartial = Partial<Lesson>