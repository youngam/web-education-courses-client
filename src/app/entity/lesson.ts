
import {Profile} from "./profile";
export class Lesson {
    id: number;
    title: string;
    description: string;
    author: Profile;
    authorId: number;


    constructor(id: number, title: string, content: string, authorId: number) {
        this.id = id;
        this.title = title;
        this.description = content;
        this.authorId = authorId;
    }
}
