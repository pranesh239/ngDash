import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsRouting } from './transactions.routing';

@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    TransactionsRouting
  ]
})
export class TransactionsModule { }
