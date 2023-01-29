import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';
import { PostRouterModule } from './post-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostsComponent, AddEditPostComponent],
  imports: [CommonModule, FormsModule, PostRouterModule, ReactiveFormsModule],
})
export class PostModule {}
