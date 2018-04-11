import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {interceptor} from './common/utils'
import filters from './common/filters'
import './assets/styles/bosch-extra-style.css'
import store from './store'
import router from './routers'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
if(true){
console.log("zhanghao")
}

//加入过滤器
for(var i in filters){Vue.filter(filters[i].name,filters[i].func)}
// 初始化router

// 初始化HTTP全局配置
Vue.http.interceptors.push(interceptor);
new Vue({
    // store,
    router,
    render:function(h){return h(App)}
}).$mount('#app');
export {router}

