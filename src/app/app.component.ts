import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth/auth.service";
import {Profile} from "./entity/profile";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    currentUser: Profile = this.authService.getSignedInUser();
    title = 'EducationalCourses';

    constructor(private authService: AuthService) {
        authService.signUserEvent.subscribe(user => {
                console.log("OnUser changed" + user.name);
                this.currentUser = user;
            }
        )
    }

    getCurrentUserName () : string  {
        return this.currentUser != null ? this.currentUser.name : '';
    }
}
