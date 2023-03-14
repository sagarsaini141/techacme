import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Firestore } from '@angular/fire/firestore';
import { eventModel } from '../events.modle';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // eventsCollection!: AngularFirestoreCollection<any>;
  private dbPath = '/Events';

  tutorialsRef!: AngularFirestoreCollection<eventModel>;
   events: any[] = [];
    category!: string | null;  
    constructor(private route: ActivatedRoute,private db: AngularFirestore,private afDb: AngularFireDatabase,) { }


    ngOnInit() {
       // Get the category parameter from the URL
    this.category = this.route.snapshot.params['category'];
    console.log(this.category)
    // console.log(this.db.collection('items', ref => ref.where('category', '==', 'Technical')).valueChanges());
   this.db
      .collection("events")
      .get()
      .subscribe((ss:any) => {
        ss.docs.forEach((doc:any) => {
          // if(doc.data().category == this.category)
          this.events.push(doc.data());
        });
      })
      console.log(this.events)
    
    }
  
}
    
  
  
  