import Vue from 'vue'
import App from './App.vue'
import CronInput from '../packages/index'
Vue.config.productionTip = false
Vue.use(CronInput)

new Vue({
  render: h => h(App),
}).$mount('#app')
