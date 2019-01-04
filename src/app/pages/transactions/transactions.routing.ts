import { TransactionsComponent } from './transactions/transactions.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent
  }
];

export const TransactionsRouting = RouterModule.forChild(routes);
