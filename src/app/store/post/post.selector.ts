import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostState } from './post.state';

export const getPostsState = createFeatureSelector<IPostState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

