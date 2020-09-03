import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleDown)
library.add(faAngleUp)
library.add(faAngleLeft)
library.add(faAngleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
