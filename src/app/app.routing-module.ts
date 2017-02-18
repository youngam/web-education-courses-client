import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SignInComponent} from "./auth/sign_in/sign-in.component";
import {LessonsComponent} from "./lessons/lessons.component";
import {CreateLessonComponent} from "./lessons/create-lesson.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignUpComponent} from "./auth/sign_up/sign-up.component";
/**
 * Created by alex on 2/7/17.
 */

const routes: Routes = [
    { path: '', redirectTo: DashboardComponent.URL, pathMatch: 'full' },
    { path: SignInComponent.URL,  component: SignInComponent },
    { path: SignUpComponent.URL,  component: SignUpComponent },
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