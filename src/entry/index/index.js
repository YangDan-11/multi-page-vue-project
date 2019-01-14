import Vue from 'vue'
import IndexView from './index.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(IndexView)
});
