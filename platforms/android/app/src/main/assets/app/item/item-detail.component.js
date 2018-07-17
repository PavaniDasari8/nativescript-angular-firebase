"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firestore_1 = require("angularfire2/firestore");
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(db) {
        this.items = db.collection('items').valueChanges();
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        // const id = +this.route.snapshot.params["id"];
        // this.item = this.itemService.getItem(id);
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELG9EQUEwRDtBQVExRDtJQUdJLDZCQUNJLEVBQW9CO1FBRXBCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUYsc0NBQVEsR0FBUjtRQUNJLGdEQUFnRDtRQUNoRCw0Q0FBNEM7SUFDaEQsQ0FBQztJQVpRLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FLVSw0QkFBZ0I7T0FKZixtQkFBbUIsQ0FhL0I7SUFBRCwwQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSAnYW5ndWxhcmZpcmUyL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZGI6IEFuZ3VsYXJGaXJlc3RvcmVcbiAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGRiLmNvbGxlY3Rpb24oJ2l0ZW1zJykudmFsdWVDaGFuZ2VzKCk7XG4gICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICAvLyB0aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0oaWQpO1xuICAgIH1cbn1cbiJdfQ==