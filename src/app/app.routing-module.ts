import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth/auth.component";
import {LessonsComponent} from "./lessons/lessons.component";
import {CreateLessonComponent} from "./lessons/create-lesson.component";
/**
 * Created by alex on 2/7/17.
 */

const routes: Routes = [
    { path: '', redirectTo: '/lessons', pathMatch: 'full' },
    { path: 'auth',  component: AuthComponent },
    { path: LessonsComponent.URL,  component: LessonsComponent },
    { path: CreateLessonComponent.URL,  component: CreateLessonComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}