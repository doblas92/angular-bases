import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})
export class CounterComponent {
  public counter: number = 0;

  constructor() {
    this.resetCounter();
  }

  increaseBy( value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }

}
