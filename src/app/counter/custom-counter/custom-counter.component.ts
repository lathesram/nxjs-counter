import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomIncrease, UpdateTitle } from '../state/counter.action';
import {
  ICounter,
  ICustomCounterValue,
  IUpdateTitle,
} from '../state/counter.model';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
})
export class CustomCounterComponent {
  value = 0;
  siteName = '';

  constructor(private store: Store<{ counter: ICounter }>) {}

  onCustomValueSelected() {
    const customCounterValue: ICustomCounterValue = {
      value: parseInt(this.value.toString()),
    };
    this.store.dispatch(CustomIncrease(customCounterValue));
  }

  onUpdateTitle() {
    const updateTitle: IUpdateTitle = {
      siteName: this.siteName,
    };

    this.store.dispatch(UpdateTitle(updateTitle));
  }
}
