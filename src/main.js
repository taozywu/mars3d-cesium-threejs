import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'


//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "cesium/Widgets/widgets.css";
import "./map/mars3d/mars3d.css";

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
