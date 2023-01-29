import { ICounterState, initialCounter } from './counter/counter.state';
import { initialPost, IPostState } from './post/post.state';

export interface IAppState {
  counter: ICounterState;
  posts: IPostState;
}

export const AppState: IAppState = {
  counter: initialCounter,
  posts: initialPost,
};
