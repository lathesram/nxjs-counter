import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ICounter } from '../state/counter.model';
import { getCounterValue, getSiteName } from '../state/counter.selector';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  counter$: Observable<number> | undefined;
  siteName$: Observable<string> | undefined;

  constructor(private store: Store<{ counter: ICounter }>) {
    this.counter$ = store.select(getCounterValue);
    this.siteName$ = store.select(getSiteName);
  }
}
