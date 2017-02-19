import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {LessonsService} from "./lessons.service";
import {LessonsComponent} from "./lessons.component";
import {AuthService} from "../auth/auth.service";
import {Profile} from "../entity/profile";
import {Lesson} from "../entity/lesson";
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
    currentUser: Profile = this.authService.getSignedInUser();

    constructor(private router: Router,
                private lessonsService: LessonsService,
                private authService: AuthService) {

    }

    createLesson(title: string, description: string) {
        this.errorMsg = null;
        let lesson = new Lesson(null, title, description, this.currentUser.id);
        this.lessonsService.createLesson(lesson)
            .subscribe(response => {

            if (response.errorMessage != null) this.errorMsg = response.errorMessage;
            else this.router.navigate([LessonsComponent.URL]);

        });
    }
}