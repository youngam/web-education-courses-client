/**
 * Created by alex on 2/11/17.
 */
import {Component, OnInit} from '@angular/core';
import {Lesson} from "../entity/lesson";
import {LessonsService} from "./lessons.service";
import {Router} from "@angular/router";
import {CreateLessonComponent} from "./create-lesson.component";
import {AuthService} from "../auth/auth.service";
import {Profile} from "../entity/profile";
import {UserType} from "../entity/user-type";
import {validateFull, validateNonEmpty} from "../utils/validator";

@Component({
    moduleId: module.id,
    selector: 'lessons',
    styleUrls: ['lessons.component.css'],
    templateUrl: 'lessons.component.html'
})
export class LessonsComponent implements OnInit {
    static readonly URL: string = "lessons";
    title: string = "Lessons";
    lessons: Lesson[];
    selectedLesson: Lesson;
    errorMsg: string;
    currentUser: Profile = this.authService.getSignedInUser();

    constructor(private lessonsService: LessonsService,
                private router: Router,
                private authService: AuthService) {

    }

    ngOnInit() {
        this.readLessons();
    }

    readLessons() {
        this.lessonsService.readLessons().subscribe(
            response => {
                console.log(response);
                this.lessons = response;
            }
        )
    }

    onSelect(lesson: Lesson): void {
        this.selectedLesson = lesson;
    }

    onDelete(lesson: Lesson): void {
        this.lessonsService.deleteLesson(lesson.id).subscribe(
            response => {
                console.log(response);
                this.removeLesson(response.id);
            }
        )
    }

    onUpdateLesson(title: string, description: string): void {

        let titleValidError = validateNonEmpty(title, "Title") != null ? validateNonEmpty(title, "Title") : "";
        let descriptionValidError = validateNonEmpty(description, "Description") ? validateNonEmpty(description, "Description") : "";
        this.errorMsg = titleValidError + descriptionValidError;

        if(this.errorMsg.length == 0) {
            let lesson = new Lesson(this.selectedLesson.id, title, description, this.currentUser.id);

            this.lessonsService.updateLesson(lesson).subscribe(
                response => {
                    this.selectedLesson = null;
                    console.log(response);
                    this.replaceLesson(response);
                }
            )
        }
    }

    private replaceLesson(lessonForReplacing: Lesson): void {
        this.lessons.forEach(lesson => {
                if (lesson.id == lessonForReplacing.id) {
                    let indexToReplace = this.lessons.indexOf(lesson);
                    this.lessons[indexToReplace] = lessonForReplacing;
                }
            }
        )
    }

    private removeLesson(id: number): void {
        this.lessons.forEach(lesson => {
                if (lesson.id == id) {
                    this.lessons.splice(this.lessons.indexOf(lesson), 1)
                }
            }
        )
    }

    addLesson() {
        this.router.navigate([CreateLessonComponent.URL]);
    }

    userHasWritePermission(): boolean {
        let userHasWritePermissions = this.currentUser != null && this.currentUser.userTypeId == UserType.ADMIN.id;
        console.log("User can modify " + userHasWritePermissions);
        return userHasWritePermissions;
    }

}