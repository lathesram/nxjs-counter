import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  @Output() increase = new EventEmitter<void>();
  @Output() decrease = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  onIncrease() {
    this.increase.emit();
  }

  onDecrease() {
    this.decrease.emit();
  }

  onReset() {
    this.reset.emit();
  }
}
