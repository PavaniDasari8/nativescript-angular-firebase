import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    items: Observable<any[]>;

    constructor(
        db: AngularFirestore
    ) {
        this.items = db.collection('items').valueChanges();
     }

    ngOnInit(): void {
        // const id = +this.route.snapshot.params["id"];
        // this.item = this.itemService.getItem(id);
    }
}
