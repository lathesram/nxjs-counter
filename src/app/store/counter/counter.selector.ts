import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounterState } from './counter.state';

export const getCounterState = createFeatureSelector<ICounterState>('counter');

export const getCounterValue = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getSiteName = createSelector(getCounterState, (state) => {
  return state.siteName;
});
