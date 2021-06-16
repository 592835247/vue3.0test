import {createRouter,createWebHashHistory} from 'vue-router'

const TEST1 = () => import('../pages/test1')
const TEST2 = () => import('../pages/test2')
const TEST3 = () => import('../pages/test3')
const TEST4 = () => import('../pages/test4')
const TEST5 = () => import('../pages/test5')
const routes = [
  {
    path: '/test1',
    name: 'TEST1',
    component: TEST1
  },
  {
    path: '/test2',
    name: 'TEST2',
    meta:{keepAlive:true},
    component: TEST2
  },
  {
    path: '/test3',
    name: 'TEST3',
    component: TEST3
  } ,
  {
    path: '/test4',
    name: 'TEST4',
    meta:{keepAlive:true},
    redirect: '/test4/todoList',
    component: TEST4,
    children: [
      {
        path: 'todoList',
        name: 'todoList',
        component:TEST5
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
