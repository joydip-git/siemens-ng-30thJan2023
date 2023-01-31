import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ICalculator } from '../../models/calculator';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent {
  // first = 0
  // second = 0
  result = 0
  // updateFirst(a: number) {
  //   this.first = a
  // }
  // updateSecond(b: number) {
  //   this.second = b
  // }
  // addNumbers(a: number, b: number) {
  //   this.result = a + b
  // }
  // addNumbers() {
  //   this.result = this.first + this.second
  // }

  calcForm?: FormGroup;
  constructor() {
    this.calcForm = new FormGroup({
      first: new FormControl(0),
      second: new FormControl(0)
    })
    console.log(this.calcForm)
  }
  get first() {
    return this.calcForm?.get('first')
  }
  get second() {
    return this.calcForm?.get('second')
  }
  get formData() {
    return <ICalculator>this.calcForm?.value
  }
  addNumbers() {
    console.log(typeof this.formData)
    // console.log(this.calcForm?.get('first')?.value)
    //console.log(this.calcForm?.value)
    // this.result = Number(this.first?.value) + Number(this.second?.value)
    this.result = Number(this.formData?.first) + Number(this.formData?.second)
  }
}
