/**
 * Created by alex on 2/7/17.
 */

import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth.service";
import {Profile} from "../../entity/profile";
import {RouterModule, Router} from "@angular/router";
import {SignUpComponent} from "../sign_up/sign-up.component";
@Component({
    moduleId: module.id,
    selector: 'sign-in-component',
    templateUrl: './sign-in.component.html',
    styleUrls: ['sign-in.component.css']
})

export class SignInComponent {
    static readonly URL: string = "signIn";
    errorMsg: string;

    constructor(private authService: AuthService,
                private router: Router) {

    }

    onSignUpClick(name: string, password: string) : void {
        this.errorMsg = null;
        this.router.navigateByUrl(SignUpComponent.URL);
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
        this.authService.setCurrentUser(userProfile);
    }
}
