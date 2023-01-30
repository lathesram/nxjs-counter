import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';
import { addPost, updatePost } from 'src/app/store/post/post.actions';
import { IAddEditRequest, IPost } from 'src/app/store/post/post.model';
import { getPosts } from 'src/app/store/post/post.selector';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss'],
})
export class AddEditPostComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  isEdit = false;
  id: string;

  post$: Subscription;
  post: IPost | undefined;

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isEdit = route?.snapshot?.data?.['isEdit'];
    this.id = route?.snapshot?.paramMap?.get('id') || '';
    this.post$ = this.store.select(getPosts).subscribe((data) => {
      this.post = data.find((_post) => _post.id.toString() === this.id);
    });
  }

  ngOnDestroy(): void {
    this.post$.unsubscribe();
  }

  ngOnInit(): void {
    if (this.isEdit && this.id && this.post) {
      this.form.get('title')?.setValue(this.post.title);
      this.form.get('description')?.setValue(this.post.description);
    }
  }

  onSubmitClicked() {
    const newPost: IAddEditRequest = {
      title: this.form.get('title')?.value?.toString() || '',
      description: this.form.get('description')?.value?.toString() || '',
    };

    if (this.isEdit) {
      this.store.dispatch(
        updatePost({
          id: parseInt(this.id),
          title: newPost.title,
          description: newPost.description,
        })
      );
      this.router.navigate(['posts']);
    } else {
      this.store.dispatch(addPost(newPost));
    }
  }
}
