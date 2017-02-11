import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {LessonsService} from "./lessons.service";
import {LessonsComponent} from "./lessons.component";
/**
 * Created by alex on 2/11/17.
 */

@Component({
    moduleId: module.id,
    selector: 'createLesson',
    styleUrls: ['create-lesson.component.css'],
    templateUrl: 'create-lesson.component.html'
})
export class CreateLessonComponent {
    static readonly URL: string = "createLesson";
    title: string = "CreateLessonComponent";
    errorMsg: string;

    constructor(private router: Router,
                private lessonsService: LessonsService) {

    }

    createLesson(title: string, description: string) {
        this.errorMsg = null;
        
        this.lessonsService.createLesson(title, description)
            .subscribe(response => {

            if (response.errorMessage != null) this.errorMsg = response.errorMessage;
            else this.router.navigate([LessonsComponent.URL]);

        });
    }
}