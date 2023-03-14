import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { SuccessComponent } from './buy-tickets/success/success.component';
import { ListComponent } from './events/list/list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buy-tickets', component: BuyTicketsComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
