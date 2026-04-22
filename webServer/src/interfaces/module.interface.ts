

export interface RequestModule {
    name: string;
    slug: string;
    desc: string;
    img: string;
}

export interface ResponseModule {
    public_id: string;
    name: string;
    slug: string;
    desc: string;
    img: string;
}

export interface RequestModuleHasLesson {
    module_id: string;
    lesson_id: string;
    position: string;
}

export interface ResponseModuleHasLesson {
    position: string;
}