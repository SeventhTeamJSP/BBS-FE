import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/page/Index';
import SectionPage from '@/page/Section';
import PostPage from '@/page/Post';
import UserPage from '@/page/User';
import TestPage from '@/page/Test'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/section/:id',
      component: SectionPage
    },
    {
      path: '/post/:id',
      component: PostPage
    },
    {
      path: '/user/:id',
      component: UserPage,
//      children: [
//        {
//          // 当 /user/:id/posts 匹配成功
//          // UserPosts 会被渲染在 UserPage 的 <router-view> 中
//          path: 'posts',
//          component: UserPosts
//        }
//      ]
    },
    {
      path: '/test',
      component: TestPage
    },
    {
      path: '*',
      component: IndexPage
    }
  ]
});
