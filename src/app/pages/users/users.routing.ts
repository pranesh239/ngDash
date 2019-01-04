import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  }
];

export const UsersRouting = RouterModule.forChild(routes);
