<template src="./OrderLayout.html"></template>

<script>
import HeaderNav from '../../components/HeaderNav.vue'
import FooterNav from '../../components/FooterNav.vue'
// import { apiOrders } from '@/api'

export default {
  data () {
    return {
      allOrderNavData: [
        { name: '全部订单', status: '' },
        { name: '未付款', status: 1 },
        { name: '已付款', status: 2 },
        { name: '已完成', status: 3 },
        { name: '已取消', status: -1 },
        // { name: "审核中", status: 0 },
        { name: '申诉中', status: -2 },
        { name: '异常', status: -3 }
      ],
      currentView: '',
      changeNumber: ''
    }
  },
  components: {
    HeaderNav,
    FooterNav
  },
  created () {
    // this.$storage.session.get("onChangeIndex");
    if (this.$storage.session.get('changeNumber')) {
      this.changeNumber = this.$storage.session.get('changeNumber')
    } else {
      this.changeNumber = 0
    }
  },
  mounted () {
    this.currentView = this.$route.name
  },
  methods: {
    changeOrder (i) {
      this.changeNumber = i
      this.$storage.session.set('changeNumber', this.changeNumber)
    },
    detail () {
      this.$router.push({ name: 'OrderDetail' })
    },
    messagePage () {
      this.$router.push({ name: 'MessagePage' })
    }
  },
  watch: {
    $route (val) {
      this.currentView = val.name
    }
  }
}
</script>

<style lang="scss" src="./OrderLayout.scss" scoped></style>
