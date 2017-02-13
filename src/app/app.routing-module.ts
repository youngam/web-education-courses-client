import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth/auth.component";
import {LessonsComponent} from "./lessons/lessons.component";
import {CreateLessonComponent} from "./lessons/create-lesson.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
/**
 * Created by alex on 2/7/17.
 */

const routes: Routes = [
    { path: '', redirectTo: DashboardComponent.URL, pathMatch: 'full' },
    { path: 'auth',  component: AuthComponent },
    { path: LessonsComponent.URL,  component: LessonsComponent },
    { path: CreateLessonComponent.URL,  component: CreateLessonComponent },
    { path: DashboardComponent.URL,  component: DashboardComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}