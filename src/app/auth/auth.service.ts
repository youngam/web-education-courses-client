import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Subject}    from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import {Md5} from "ts-md5/dist/md5";
import {RootRequest} from "../entity/root-request";
import {ApiMethods} from "../entity/api-method";
import {Profile} from "../entity/profile";
/**
 * Created by alex on 2/7/17.
 */

@Injectable()
export class AuthService {
    public static CURRENT_USER = "SignedInUser";

    private headers = new Headers({'Content-Type': 'application/json'});
    url: string = 'http://localhost:8080/auth';
    signUserEvent = new Subject<Profile>();


    constructor(private http: Http) {
    }

    signUpUser(name: string, password: string, userTypeId: number): Observable<any> {
        let request = {
            name: name,
            password : Md5.hashStr(password),
            userTypeId : userTypeId
        };

        let rootRequest: RootRequest = new RootRequest(ApiMethods.SIGN_UP, request);
        console.log("REQUEST: " + JSON.stringify(rootRequest));

        return this.http.post(this.url, rootRequest, {headers: this.headers})
            .map(response => response.json());
    }

    signInUser(name: string, password: string): Observable<any> {
        let request = this.getUserRequestBody(name, password);

        let rootRequest: RootRequest = new RootRequest(ApiMethods.SIGN_IN, request);
        console.log("REQUEST: " + JSON.stringify(rootRequest));

        return this.http.post(this.url, rootRequest, {headers: this.headers})
            .map(response => response.json());
    }

    getSignedInUser(): Profile {
        return JSON.parse(localStorage.getItem(AuthService.CURRENT_USER));
    }

    private getUserRequestBody(name: string, password: string): any {
        return {
            name: name,
            password: Md5.hashStr(password)
        };
    }
}