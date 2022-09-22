import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';
import { PostsServices } from './posts.services';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title : 'First post', content : 'this is the first post\'s content'},
  //   {title : 'Second post', content : 'this is the Second post\'s content'},
  //   {title : 'Third post', content : 'this is the Third post\'s content'},
  // ];
 @Input () posts : Post[]= [];

  constructor(public postsServices : PostsServices) {
    // this.postsServices = postsServices;
   }

  ngOnInit(): void {
    this.posts = this.postsServices.getPosts();
  }

}
