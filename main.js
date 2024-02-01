
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
Vue.use(uView)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
require('@/config/request.js')(app)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif