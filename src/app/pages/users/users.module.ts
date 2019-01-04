import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRouting } from './users.routing';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UsersRouting
  ]
})
export class UsersModule { }
