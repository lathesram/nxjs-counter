import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecreaseCounter, IncreaseCounter, ResetCounter } from '../state/counter.action';
import { ICounter } from '../state/counter.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  constructor(private store: Store<{ counter: ICounter }>) {}

  onIncrease() {
    this.store.dispatch(IncreaseCounter())
  }

  onDecrease() {
    this.store.dispatch(DecreaseCounter())
  }

  onReset() {
    this.store.dispatch(ResetCounter())
  }
}
