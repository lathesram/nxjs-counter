import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounter } from '../state/counter.model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  counter: number = 0;

  constructor(private store: Store<{ counter: ICounter }>) {
    store.select('counter').subscribe((value) => {
      this.counter = value.counter;
    });
  }
}
