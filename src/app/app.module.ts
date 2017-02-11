import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthComponent} from "./auth/auth.component";
import {AppRoutingModule} from "./app.routing-module";
import {AuthService} from "./auth/auth.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule],

    declarations: [
        AppComponent,
        AuthComponent],

    providers: [
        AuthService
    ],

    bootstrap: [AppComponent]
})

export class AppModule {

}
