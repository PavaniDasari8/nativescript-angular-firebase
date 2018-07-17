import { Component } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    items: Observable<any[]>;
    constructor(db: AngularFirestore) {
        this.items = db.collection('items').valueChanges();
    }
}
