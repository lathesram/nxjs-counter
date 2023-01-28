import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ICounter } from '../state/counter.model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  counter$: Observable<ICounter> | undefined;

  constructor(private store: Store<{ counter: ICounter }>) {
    this.counter$ = store.select('counter');
  }
}
