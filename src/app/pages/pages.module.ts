import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRouting } from './pages.routing';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRouting
  ]
})
export class PagesModule { }
