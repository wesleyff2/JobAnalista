import Vue from 'vue'
import App from './App.vue'
import Curso from './Curso.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.component('curso', Curso)
new Vue({
  render: h => h(App),
}).$mount('#app')
