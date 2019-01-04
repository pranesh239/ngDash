import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: './users/users.module#UsersModule'},
      {path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsModule'}
    ]
  }
];

export const PagesRouting = RouterModule.forChild(routes);




