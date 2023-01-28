import { createAction } from '@ngrx/store';

export const IncreaseCounter = createAction('Increase');
export const DecreaseCounter = createAction('Decrease');
export const ResetCounter = createAction('Reset');
