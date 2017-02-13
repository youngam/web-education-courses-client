import {Component} from "@angular/core";
/**
 * Created by alex on 2/13/17.
 */
@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent  {
    public static URL: string = "dashboard";
    title = 'EducationalCourses';
}