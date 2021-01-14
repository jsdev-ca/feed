import Post from './post';
import Posts from './index';

export default [
  {
    path: '/posts',
    component: Posts,
    exact: true
  },
  {
    path: '/posts/:id',
    component: Post
  }
];
