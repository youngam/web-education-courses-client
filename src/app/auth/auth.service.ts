import {Injectable} from "@angular/core";
import {Profile} from "../entity/profile";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import {Md5} from "ts-md5/dist/md5";
/**
 * Created by alex on 2/7/17.
 */

@Injectable()
export class AuthService {
    private headers = new Headers({'Content-Type': 'application/json'});
    url: string = 'http://localhost:8080/getUser';

    constructor(private http: Http) { }

    signInUser(profile: Profile) : Observable<Profile> {
        let request = {
            name: profile.name,
            password: Md5.hashStr(profile.password)
        };

        return this.http.post(this.url, request, {headers: this.headers})
            .map(response => response.json() as Profile);
    }
}