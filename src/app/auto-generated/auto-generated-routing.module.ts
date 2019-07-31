import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AutoGeneratedComponentTns } from "./auto-generated.component.tns";

const routes: Routes = [
    { path: "", component: AutoGeneratedComponentTns }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AutoGeneratedRoutingModule { }
