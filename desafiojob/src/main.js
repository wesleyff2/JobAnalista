import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Curso from './Curso.vue'
import Crud from './Crud.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.component('curso', Curso)
Vue.component('crud', Crud)
new Vue({
  render: h => h(App),
}).$mount('#app')
