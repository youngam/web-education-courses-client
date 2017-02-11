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

export class AuthComponent implements OnInit{
    currentUser: Profile;

    constructor(private authService: AuthService) {

    }

    ngOnInit(): void {
/*        this.authService.fetchUser().subscribe(profile => {
                console.log(profile);
            }
        );*/
    }

    signInUser(name: string, password: string) : void {
        let profile: Profile = new Profile(name, password);
        console.log("REQUEST: " + profile.name + " " + profile.password);
        this.authService.signInUser(profile).subscribe(
            profile => console.log("RESPONSE user: " + profile.name +" " + profile.id)
        );
    }
}