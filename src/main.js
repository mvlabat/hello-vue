import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import 'vue-material/dist/theme/default-dark.css'

import { MdButton, MdField, MdTable } from 'vue-material/dist/components'

Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdTable)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
