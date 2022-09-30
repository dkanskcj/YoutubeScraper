import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SafePipe } from "./safePipe.component";

@NgModule({
    declarations: [SafePipe],
    imports: [
        CommonModule
    ],
    exports: [SafePipe]
})

export class SafePipeModule {

}