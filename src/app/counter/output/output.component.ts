import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';
import {
  getCounterValue,
  getSiteName,
} from 'src/app/store/counter/counter.selector';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  counter$: Observable<number> | undefined;
  siteName$: Observable<string> | undefined;

  constructor(private store: Store<IAppState>) {
    this.counter$ = store.select(getCounterValue);
    this.siteName$ = store.select(getSiteName);
  }
}
