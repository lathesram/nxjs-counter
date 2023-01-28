import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomIncrease } from '../state/counter.action';
import { ICounter, ICustomCounterValue } from '../state/counter.model';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
})
export class CustomCounterComponent {
  value = 0;

  constructor(private store: Store<ICounter>) {}

  onCustomValueSelected() {
    const customCounterValue: ICustomCounterValue = {
      value: parseInt(this.value.toString()),
    };
    this.store.dispatch(CustomIncrease(customCounterValue));
  }
}
