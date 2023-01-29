import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounter } from './counter.model';

export const getCounterState = createFeatureSelector<ICounter>('counter');

export const getCounterValue = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getSiteName = createSelector(getCounterState, (state) => {
  return state.siteName;
});
