import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pages'
  }
];

export const  AppRouting =  RouterModule.forRoot(routes);

