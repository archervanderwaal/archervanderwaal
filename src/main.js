import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import animated from 'animate.css'
import './assets/font/font.css'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(animated)

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://www.zewest.cn:3000';
Vue.prototype.$ajax = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
