import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationComponent } from './components/calculation/calculation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalculationComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [CalculationComponent]
})
export class CalculatorModule { }
