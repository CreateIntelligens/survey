import { createRouter, createWebHistory } from 'vue-router'
import SurveyCreator from './components/SurveyCreator.vue'
import SurveyDashboard from './components/SurveyDashboard.vue'
import Quiz from './components/Quiz.vue'


const routes = [
  { path: '/', redirect: '/survey-creator' },
  { path: '/survey-creator', component: SurveyCreator },
  { path: '/survey-dashboard', component: SurveyDashboard },
  { path: '/quiz', component: Quiz },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router