import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/plugins/message'
import Paginate from 'vuejs-paginate'
import Loader from '@/components/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.component('Paginate', Paginate);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: "AIzaSyC1U4-SRFH7PqymiPwK4tePgwMvmR5CtXw",
  authDomain: "vue-test-app-5cf6d.firebaseapp.com",
  databaseURL: "https://vue-test-app-5cf6d-default-rtdb.firebaseio.com",
  projectId: "vue-test-app-5cf6d",
  storageBucket: "vue-test-app-5cf6d.appspot.com",
  messagingSenderId: "440926471516",
  appId: "1:440926471516:web:265cc9799a9d473c5eed99"
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
