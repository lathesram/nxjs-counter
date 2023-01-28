import { createReducer, on } from '@ngrx/store';
import {
  CustomIncrease,
  DecreaseCounter,
  IncreaseCounter,
  ResetCounter,
} from './counter.action';
import { initialCounter } from './counter.state';

export const counterReducer = createReducer(
  initialCounter,
  on(IncreaseCounter, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(DecreaseCounter, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(ResetCounter, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(CustomIncrease, (state, action) => {
    console.log(action);
    return { ...state, counter: state.counter + action.value };
  })
);
