import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  userId!: string;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth, fd: AngularFirestore) {
    this.auth.authState.subscribe((user:any) => {
      if (user) this.userId = user.uid;
    });
  }

  processPayment(name: string, email: string, phone: string, total: number, events: any[]) {
    const payment = {
      name: name,
      email: email,
      phone: phone,
      total: total,
      events: events,
      timestamp: Date.now()
    };
    return this.db.list(`users/${this.userId}/payments`).push(payment);
  }


}
