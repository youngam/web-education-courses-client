import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs";
import {RootRequest} from "../entity/root-request";
import {ApiMethods} from "../entity/api-method";
import {Lesson} from "../entity/lesson";
/**
 * Created by alex on 2/11/17.
 */

@Injectable()
export class LessonsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    url: string = 'http://localhost:8080/lessons';

    constructor(private http: Http) {

    }

    readLessons(): Observable<any> {
        return this.http.get(this.url)
            .map(response => response.json());
    }

    createLesson(title: string, description: string): Observable<any> {
        let request = {
            title: title,
            description: description
        };

        let rootRequest : RootRequest = new RootRequest(ApiMethods.CREATE_LESSON, request);
        return this.http.post(this.url, rootRequest, {headers: this.headers})
            .map(response => response.json());
    }

    deleteLesson(id: number) : Observable<any> {
        let request = {
            id: id
        };

        let rootRequest : RootRequest = new RootRequest(ApiMethods.DELETE_LESSON, request);
        return this.http.post(this.url, rootRequest, {headers: this.headers})
            .map(response => response.json());
    }

    updateLesson(id: number, title: string, description: string) {
        let request = new Lesson(id, title, description);

        let rootRequest : RootRequest = new RootRequest(ApiMethods.UPDATE_LESSON, request);
        return this.http.post(this.url, rootRequest, {headers: this.headers})
            .map(response => response.json());
    }
}