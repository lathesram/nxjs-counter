export interface ICounterState {
  counter: number;
  siteName: string;
}

export const initialCounter: ICounterState = {
  counter: 0,
  siteName: 'Initial Name'
};
