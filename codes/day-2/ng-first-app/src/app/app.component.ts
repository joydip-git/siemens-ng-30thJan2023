import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    welcomeMessage = 'Welcome to Angular'
    width = 200
    constructor() {
        console.log('App component created')
    }
    changeMessage(newMessage: string) {
        this.welcomeMessage = newMessage
    }
}