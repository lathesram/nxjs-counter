import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IncreaseCounter,
  DecreaseCounter,
  ResetCounter,
} from 'src/app/store/counter/counter.action';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  constructor(private store: Store<IAppState>) {}

  onIncrease() {
    this.store.dispatch(IncreaseCounter());
  }

  onDecrease() {
    this.store.dispatch(DecreaseCounter());
  }

  onReset() {
    this.store.dispatch(ResetCounter());
  }
}
