import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Users from './Users.vue';
import Home from './Home.vue';
import Register from './register.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';


Vue.use(VueMaterial);



Vue.use(VueRouter);

const routes = [
  { path: '/users/:teamId', component: Users }, //dwukropek mowi o dynamicznym wczytywaniu
  { path: '/', component: Home },
  { path: '/register', component: Register }
];
const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
