import { createAction, props } from '@ngrx/store';
import { IAddEditRequest, IIndex, IPost } from './post.model';

export const _getPosts = '[POST] get';
export const _deletePost = '[POST] delete';
export const _addPost = '[POST] add';
export const _updatePost = '[Post] update';

export const getPosts = createAction(_getPosts);
export const deletePost = createAction(_deletePost, props<IIndex>());
export const addPost = createAction(_addPost, props<IAddEditRequest>());
export const updatePost = createAction(_updatePost, props<IPost>());
