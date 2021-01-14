import About from '../domains/about';
import Home from '../domains/home'
import PostsRoutes from '../domains/posts/routes';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    name: 'Home'
  },
  {
    path: '/about',
    component: About,
    name: 'About'
  },
  {
    path: '/posts',
    component: PostsRoutes,
    name: 'Posts'
  }
];
