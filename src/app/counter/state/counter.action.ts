import { createAction, props } from '@ngrx/store';
import { ICustomCounterValue } from './counter.model';

export const IncreaseCounter = createAction('Increase');
export const DecreaseCounter = createAction('Decrease');
export const ResetCounter = createAction('Reset');
export const CustomIncrease = createAction(
  'CustomIncrease',
  props<ICustomCounterValue>()
);
