/**
 * Created by alex on 2/11/17.
 */
import {Component, OnInit} from '@angular/core';
import {Lesson} from "../entity/lesson";
import {LessonsService} from "./lessons.service";
import {Router} from "@angular/router";
import {CreateLessonComponent} from "./create-lesson.component";

@Component({
    moduleId: module.id,
    selector: 'lessons',
    templateUrl: 'lessons.component.html'
})
export class LessonsComponent implements OnInit {
    static readonly URL: string = "lessons";
    title: string = "LessonsComponent";
    lessons: Lesson[];

    constructor(private lessonsService: LessonsService,
                private router: Router) {

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

    addLesson() {
        this.router.navigate([CreateLessonComponent.URL]);
    }
}