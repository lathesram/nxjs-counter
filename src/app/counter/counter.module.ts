import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { CounterComponent } from './counter/counter.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { OutputComponent } from './output/output.component';
import { CounterRoutingModule } from './counter-router.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CounterComponent,
    OutputComponent,
    ButtonsComponent,
    CustomCounterComponent,
  ],
  imports: [CommonModule, CounterRoutingModule, FormsModule],
})
export class CounterModule {}
