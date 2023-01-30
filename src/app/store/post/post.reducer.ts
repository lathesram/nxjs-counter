import { createReducer, on } from '@ngrx/store';
import { addPost, deletePost, updatePost } from './post.actions';
import { IPost } from './post.model';
import { initialPost } from './post.state';

export const postReducer = createReducer(
  initialPost,
  on(deletePost, (state, action) => {
    return {
      ...state,
      posts: state.posts.filter((_post) => _post.id !== action.index),
    };
  }),
  on(addPost, (state, action) => {
    const newPost: IPost = {
      id: state?.posts?.length + 1,
      description: action.description,
      title: action.title,
    };
    return {
      ...state,
      posts: [...state.posts, newPost],
    };
  }),

  on(updatePost, (state, action) => {
    const updatedPost = state?.posts?.map((post) => {
      if (post.id === action.id) {
        return action;
      }
      return post;
    });

    return { ...state, posts: updatedPost };
  })
);
