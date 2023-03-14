import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { PaymentService } from './payments.service';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { PaymentService } from './payments.service';
import { WindowRef } from './window-ref.service';

declare const Razorpay: any;
@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css'],
  providers: [WindowRef]
})
export class BuyTicketsComponent implements OnInit {

  name!: string;
  email!: string;
  phone!: string;
  selectedEvents: number[] = [];

  events: {name: string, price: number}[] = [
    {name: 'Event A', price: 1},
    {name: 'Event B', price: 2},
    {name: 'Event C', price: 3},
  ];



  razorpayOptions: any = {
    key: environment.razorpayKey,
    amount: 0,
    name: 'TechAcme Payment',
    description: 'Payment for TechAcme registration',
    prefill: {
      name: '',
      email: '',
      phone: ''
    },
    image : "https://i.ibb.co/N2Ychjc/Final-Logo-Tech-Acme-removebg-preview.png",
    notes: {
      address: 'Razorpay Corporate Office'
    },
    theme: {
      color: '#080d17'
    },
    handler: this.paymentCallback.bind(this)
  };

  constructor(private db: AngularFireDatabase, private router: Router,private paymentService: PaymentService,private winRef: WindowRef) { }

ngOnInit(): void {
  
}

  calculateTotal(): number {
    let total = 0;
    this.selectedEvents.forEach(event => {
      total += event;
    });
    return total;
  }

  onCheckboxChange(event:any, price:any) {
    if (event.target.checked) {
      this.selectedEvents.push(price);
    } else {
      const index = this.selectedEvents.indexOf(price);
      if (index > -1) {
        this.selectedEvents.splice(index, 1);
      }
    }
    this.razorpayOptions.amount = this.calculateTotal() * 100;
  }

  onSubmit() {
    
//remove this 
// const payment = {
//   paymentId: 'rzp_test_7HdkaZ1xFGPomB',
//   name: this.name,
//   email: this.email,
//   phone: this.phone,
//   events: this.selectedEvents,
//   amount: this.calculateTotal()
// };

// console.log(payment)
// this.db.list('payments').push(payment).then(() => {
// this.router.navigate(['/success']);
// });

// console.log(payment)
// this.db.list('payments').push(payment).then(() => {
// this.router.navigate(['/success'],{ queryParams: { payment_id: payment.paymentId } });
// });

// --------------------- till here ------------ 
    this.razorpayOptions.amount = this.calculateTotal() * 100;
    this.razorpayOptions.prefill.name = this.name;
    this.razorpayOptions.prefill.email = this.email;
    this.razorpayOptions.prefill.phone = this.phone;
    const rzp = new  this.winRef.nativeWindow.Razorpay(this.razorpayOptions);
    rzp.open();
  }

//   paymentCallback(response:any) {
//     if (response.razorpay_payment_id) {
//       const payment = {
//         paymentId: response.razorpay_payment_id,
//         name: this.name,
//         email: this.email,
//         phone: this.phone,
//         events: this.selectedEvents,
//         amount: this.calculateTotal()
//       };
//       console.log(payment)
//       this.db.list('payments').push(payment).then(() => {
// this.router.navigate(['/success']);
// });
// } else {
// alert('Payment failed');
// }
// }





paymentCallback(response:any) {
  if (response.razorpay_payment_id) {
    const payment = {
      paymentId: response.razorpay_payment_id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      events: this.selectedEvents,
      amount: this.calculateTotal()
    };
    console.log(payment)
    this.db.list('payments').push(payment).then(() => {
      this.router.navigate(['/success'], { queryParams: { payment_id: response.razorpay_payment_id } });
    });
  } else {
    alert('Payment failed');
  }
}



}