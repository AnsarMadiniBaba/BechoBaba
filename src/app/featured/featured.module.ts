import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { FeaturedRoutingModule } from "./featured-routing.module";
import { FeaturedComponent } from "./featured.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeaturedRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        FeaturedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeaturedModule { }
