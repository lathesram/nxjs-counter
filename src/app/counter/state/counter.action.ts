import { createAction, props } from '@ngrx/store';
import { ICustomCounterValue, IUpdateTitle } from './counter.model';

export const IncreaseCounter = createAction('Increase');
export const DecreaseCounter = createAction('Decrease');
export const ResetCounter = createAction('Reset');
export const CustomIncrease = createAction(
  'CustomIncrease',
  props<ICustomCounterValue>()
);
export const UpdateTitle = createAction('UpdateTitle', props<IUpdateTitle>());
