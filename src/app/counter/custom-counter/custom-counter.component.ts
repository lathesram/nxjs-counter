import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { CustomIncrease, UpdateTitle } from 'src/app/store/counter/counter.action';
import { ICustomCounterValue, IUpdateTitle } from 'src/app/store/counter/counter.model';
@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
})
export class CustomCounterComponent {
  value!: number;
  siteName = '';

  constructor(private store: Store<IAppState>) {}

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
