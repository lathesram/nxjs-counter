import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { addPost } from 'src/app/store/post/post.actions';
import { IAddEditRequest } from 'src/app/store/post/post.model';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss'],
})
export class AddEditPostComponent {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private store: Store<IAppState>) {}

  onSubmitClicked() {
    const newPost: IAddEditRequest = {
      title: this.form.get('title')?.value?.toString() || '',
      description: this.form.get('description')?.value?.toString() || '',
    };

    this.store.dispatch(addPost(newPost));
  }
}
