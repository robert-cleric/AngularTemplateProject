import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Handling input with two-way binding
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    // Handling input with two-way binding
    FormsModule
  ]
})
export class SharedModule { }
