import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SampleComponent } from "./sample.component";

@NgModule({
    declarations: [SampleComponent],
    exports: [SampleComponent],
    imports: [CommonModule]
})
export class SampleModule {

}