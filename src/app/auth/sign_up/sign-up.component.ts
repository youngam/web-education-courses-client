import {Component} from "@angular/core";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {UserType} from "../../entity/user-type";
import {Profile} from "../../entity/profile";
import {SignInComponent} from "../sign_in/sign-in.component";
/**
 * Created by alex on 2/18/17.
 */

@Component({
    moduleId: module.id,
    selector: 'sign-up-component',
    templateUrl: './sign-up.component.html',
    styleUrls: ['sign-up.component.css']
})

export class SignUpComponent {
    static readonly URL: string = "signUp";

    errorMsg: string;

    constructor(private authService: AuthService,
                private router: Router) {

    }

    onSignUpClick(name: string, password: string, isAdmin: boolean) : void {
        this.errorMsg = null;

        let userType = isAdmin ? UserType.ADMIN : UserType.READER;

        console.log(userType);

        this.authService.signUpUser(name, password, userType.id).subscribe(response => {

            if (response.errorMessage != null) this.setError(response.errorMessage);

            else this.onSuccessSignUp(response as Profile);
        });
    }

    setError(errorMessage: string) : void {
        console.log("RESPONSE error: " + errorMessage);
        this.errorMsg = errorMessage;
    }

    onSuccessSignUp(userProfile: Profile) : void {
        console.log("RESPONSE user: " + userProfile.name + " " + userProfile.id + " "
            + userProfile.userTypeId);

        this.router.navigateByUrl(SignInComponent.URL);
    }
}