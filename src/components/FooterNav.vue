<template src="./FooterNav.html"></template>

<script>
import tradingCenter from '../assets/images/icon/tradingCenter-icon.png'
import order from '../assets/images/icon/order-icon.png'
import otherPage from '../assets/images/icon/other-icon.png'

export default {
  data () {
    return {
      footerData: [
        { name: '交易中心',
          link: 'TradingCenterBuy',
          src: tradingCenter },
        { name: '订单管理',
          link: 'AllOrder',
          src: order },
        { name: '设置',
          link: 'OtherPage',
          src: otherPage }
      ],
      currentView: ''
    }
  },
  mounted () {
    this.currentView = this.$router.app._route.matched[0].name
  }
}
</script>

<style lang="scss" src="./FooterNav.scss" scoped>
</style>
