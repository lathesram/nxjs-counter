import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';
import { deletePost } from 'src/app/store/post/post.actions';
import { IPost } from 'src/app/store/post/post.model';
import { getPosts } from 'src/app/store/post/post.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts$: Observable<IPost[] | undefined>;

  constructor(private store: Store<IAppState>) {
    this.posts$ = store.select(getPosts);
  }

  onUpdateClicked(index: number) {}

  onDeleteClicked(index: number) {
    this.store.dispatch(deletePost({ index }));
  }
}
