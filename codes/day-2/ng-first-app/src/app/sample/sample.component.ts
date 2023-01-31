import { Component } from "@angular/core";

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.css']
})
export class SampleComponent {
    people?: string[];
    constructor() {
        setTimeout(
            () => {
                this.people = ['anil', 'sunil']
            },
            2000
        )
        console.log('Sample component created')
    }
}