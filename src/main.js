import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css' // mint ui
import MintUI from 'mint-ui' // mint ui
import '@/components/globalComponents' // 全域元件註冊
import storage from '@/utils/storage' // storage工具
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(MintUI)

Vue.prototype.$storage = storage
export const eventBus = new Vue({
  methods: {
    changeIndex (i) {
      this.$emit('changeIndexEdited', i)
    }
  }
})

new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  render: h => h(App)
}).$mount('#app')
