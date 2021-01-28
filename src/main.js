import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/plugins/message'
import UUID from "vue-uuid";
import Paginate from 'vuejs-paginate'

import 'materialize-css/dist/js/materialize.min'
Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(UUID);
Vue.component('Paginate', Paginate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
