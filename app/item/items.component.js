"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tnsOAuthModule = require("nativescript-oauth");
var router_1 = require("@angular/router");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(router) {
        this.router = router;
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent.prototype.onTap = function () {
        var _this = this;
        // this._counter--;
        // this.updateMessage();
        tnsOAuthModule
            .ensureValidToken()
            .then(function (token) {
            console.log("token: " + token);
            _this.router.navigate(["item"]);
        })
            .catch(function (er) {
            //do something with the error
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELG1EQUFxRDtBQUNyRCwwQ0FBdUM7QUFPdkM7SUFFSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFdkMsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQUEsaUJBWUM7UUFYRyxtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLGNBQWM7YUFDVCxnQkFBZ0IsRUFBRTthQUNsQixJQUFJLENBQUMsVUFBQyxLQUFhO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxFQUFFO1lBQ0wsNkJBQTZCO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXJCUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQUs4QixlQUFNO09BSnpCLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0ICogYXMgdG5zT0F1dGhNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1vYXV0aFwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIC8vIHRoaXMuX2NvdW50ZXItLTtcbiAgICAgICAgLy8gdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gICAgICAgIHRuc09BdXRoTW9kdWxlXG4gICAgICAgICAgICAuZW5zdXJlVmFsaWRUb2tlbigpXG4gICAgICAgICAgICAudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW46IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIml0ZW1cIl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlciA9PiB7XG4gICAgICAgICAgICAgICAgLy9kbyBzb21ldGhpbmcgd2l0aCB0aGUgZXJyb3JcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=