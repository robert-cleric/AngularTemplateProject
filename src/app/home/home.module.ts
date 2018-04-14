import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// Handling input with two-way binding
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    // Handling input with two-way binding
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
