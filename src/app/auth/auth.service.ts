import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import {Md5} from "ts-md5/dist/md5";
import {RootRequest} from "../entity/root-request";
import {ApiMethods} from "../entity/api-method";
/**
 * Created by alex on 2/7/17.
 */

@Injectable()
export class AuthService {
    private headers = new Headers({'Content-Type': 'application/json'});
    url: string = 'http://localhost:8080/getUser';

    constructor(private http: Http) {
    }

    signUpUser(name: string, password: string): Observable<any> {
        let request = this.getUserRequestBody(name, password);

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

    private getUserRequestBody(name: string, password: string): any {
        return {
            name: name,
            password: Md5.hashStr(password)
        };
    }
}