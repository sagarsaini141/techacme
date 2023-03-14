import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  paymentId!: string | null;

  payment: any;
  qrCodeUrl!: string;
  
  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.paymentId = this.route.snapshot.queryParamMap.get('payment_id');
    this.db.list('payments', (ref:any) => ref.orderByChild('paymentId').equalTo(this.paymentId)).valueChanges()
      .subscribe((payments:any) => {
        if (payments.length > 0) {
          this.payment = payments[0];
          this.qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(JSON.stringify(this.payment));
        }
      });
  }
}
