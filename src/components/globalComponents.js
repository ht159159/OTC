import Vue from 'vue'
import alert from './alertBox/Alert.vue'

Vue.component('modal-alert', resolve => {
  resolve(alert)
})
