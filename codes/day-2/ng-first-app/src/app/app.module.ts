import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CalculatorModule } from "./calculator/calculator.module";
import { SampleModule } from "./sample/sample.module";

@NgModule({
    //register compoments, directives, pipes
    declarations: [AppComponent],
    //register services
    providers: [],
    //register other child modules and built-in module
    imports: [BrowserModule, SampleModule, CalculatorModule],
    //mention the name of the directives, pipes, modules, components that you want to be exposed to other modules of your application
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('App Module created')
    }
}