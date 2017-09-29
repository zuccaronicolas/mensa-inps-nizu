import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietComponent } from './diet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DietComponent],
  exports: [DietComponent, FormsModule, CommonModule]
})
export class SharedModule { }
