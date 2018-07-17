import { Component, OnInit } from "@angular/core";

import * as tnsOAuthModule from "nativescript-oauth";
import {Router} from "@angular/router";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    public onTap() {
        // this._counter--;
        // this.updateMessage();
        tnsOAuthModule
            .ensureValidToken()
            .then((token: string) => {
                console.log("token: " + token);
                this.router.navigate(["item"]);
            })
            .catch(er => {
                //do something with the error
            });
    }
}