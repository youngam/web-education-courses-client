import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth/auth.service";
import {Profile} from "./entity/profile";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    currentUser: Profile = this.authService.getSignedInUser();
    title = 'EducationalCourses';

    constructor(private authService: AuthService) {
        authService.signUserEvent.subscribe(user => {
                console.log("OnUser changed" + user.name);
                this.currentUser = user;
            }
        )
    }

    ngOnInit(): void {
        console.log("Current user " + this.currentUser.name);
    }

}
