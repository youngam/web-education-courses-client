
export class Lesson {
    id: number;
    title: string;
    description: string;


    constructor(id: number, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.description = content;
    }
}
