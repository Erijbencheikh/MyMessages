import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/post-list/post.model';
import { PostsServices } from 'src/app/post-list/posts.services';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  // newPost = 'NO CONTENT';
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();
  constructor(public postsServices : PostsServices) {}

  ngOnInit(): void {
  }
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsServices.addPost(form.value.title, form.value.content);

  }
}
