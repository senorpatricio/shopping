import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'quantity',
    templateUrl : 'app/products/quantity.component.html',
    outputs: ['quantityChange'],
    inputs: ['value']
})

export class QuantityCounter {
   public quantityValue: number = 0;
    public value: number = 1;
    

    isOn: boolean;


  public quantityChange = new EventEmitter();
  increment() {
    this.quantityValue++;
    if(this.quantityValue > 0) {
      // change checkbox image...
      this.isOn = true;
    }
    this.quantityChange.emit({
      value: this.quantityValue
    })
  }
  decrement() {

    if(this.quantityValue === 0) {
      this.quantityValue = 0;
      this.isOn = false;
    }
    else {
      this.quantityValue--;
    }
    this.quantityChange.emit({
      value: this.quantityValue
    })
  }

  addFromCheckbox (flag) {
    if(flag === true) {
      this.quantityValue++;
    }
    else {
      this.quantityValue = 0;
    }
    // if(this.quantityValue === 1) {
    //   this.decrement();
    // }
    // else {
    //   this.increment();
    // }

  }
}
