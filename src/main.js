import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios.js'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixin from './mixin.js'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-BJFLJWGFWE' }
})

Vue.use(VueSweetalert2)
Vue.mixin(mixin)
Vue.component('ImgInputer', ImgInputer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
