/**
 * Created by alex on 2/7/17.
 */

import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";
import {Profile} from "../entity/profile";
@Component({
    moduleId: module.id,
    selector: 'auth-component',
    templateUrl: './auth.component.html',
    styleUrls: ['auth.component.css']
})

export class AuthComponent {
    errorMsg: string;

    constructor(private authService: AuthService) {

    }

    onSignUpClick(name: string, password: string) : void {
        this.errorMsg = null;

        this.authService.signUpUser(name, password).subscribe(response => {

            if (response.errorMessage != null) this.showError(response.errorMessage);

            else this.setUserInfo(response as Profile);
        });
    }

    onSignInClick(name: string, password: string) : void {
        this.errorMsg = null;

        this.authService.signInUser(name, password).subscribe(response => {

            if (response.errorMessage != null) this.showError(response.errorMessage);

            else this.setUserInfo(response as Profile);
        });
    }

    showError(errorMessage: string) : void {
        console.log("RESPONSE error: " + errorMessage);
        this.errorMsg = errorMessage;
    }

    setUserInfo(userProfile: Profile) : void {
        console.log("RESPONSE user: " + userProfile.name + " " + userProfile.id);
    }
}
