// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入css格式化文件 包括格式化文件 1像素边框文件 字体图标文件
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

//引入swiper轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//解决300毫秒延迟问题
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
