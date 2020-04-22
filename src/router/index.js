import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/HomeContent')
      },
      {
        path: 'PM/structure',
        component: () => import('../views/PM/Structure')
      },
      {
        path: 'teacher/select_course',
        component: () => import('../views/teacher/Cards')
      },
      {
        path: 'teacher/input',
        component: () => import('../views/teacher/InputGrades')
      },
      {
        path: 'tutor/cards',
        component: () => import('../views/tutor/Cards.vue'),
      },
      {
        path: 'tutor/students',
        component: () => import('../views/tutor/Students.vue'),
      },
      {
        path: 'cm/course_cards',
        component: () => import('../views/CM/CourseCardsGroup')
      },
      {
        path: 'cm/pending_review_list',
        component: () => import('../views/CM/CourseManagerPendingReviewList')
      },
      {
        path: 'cm/review_page',
        component: () => import('../views/CM/CourseManagerReviewPage')
      },
      {
        path: 'student/inquire',
        component: () => import('../views/student/RightInquire.vue'),
      },
      {
        path: 'student/alarm',
        component: () => import('../views/student/Alarm.vue'),
        redirect: 'student/alarm/alarm1',
        children: [
          {
            path: 'alarm1',
            component: () => import('../components/TagDateTable.vue'),
          },

          {
            path: 'alarm2',
            component: () => import('../components/PatternDataTable.vue'),
          },
          {
            path: 'alarm3',
            component: () => import('../components/CategoryDataTable.vue'),
          },
          {
            path: '*',
            name: 'other',
            redirect: 'alarm1',
          },
        ]
      },
      {
        path: '/student',
        component: () => import('../views/student/studentHome.vue'),
        children: [

        ]
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

