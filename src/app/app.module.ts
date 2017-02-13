import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthComponent} from "./auth/auth.component";
import {AppRoutingModule} from "./app.routing-module";
import {AuthService} from "./auth/auth.service";
import {LessonsComponent} from "./lessons/lessons.component";
import {LessonsService} from "./lessons/lessons.service";
import {CreateLessonComponent} from "./lessons/create-lesson.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule],

    declarations: [
        AppComponent,
        AuthComponent,
        LessonsComponent,
        CreateLessonComponent,
        DashboardComponent],

    providers: [
        AuthService,
        LessonsService
    ],

    bootstrap: [AppComponent]
})

export class AppModule {

}
