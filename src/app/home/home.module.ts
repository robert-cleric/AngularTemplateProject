import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// Handling input with two-way binding
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    // Handling input with two-way binding
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
