import { IPost } from './post.model';

export interface IPostState {
  posts: IPost[];
}

export const initialPost: IPostState = {
  posts: [
    {
      id: 1,
      title: 'The First Post',
      description: 'Description of First Post',
    },
    {
      id: 2,
      title: 'The Second Post',
      description: 'Description of Second Post',
    },
  ],
};
