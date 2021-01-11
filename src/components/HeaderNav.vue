<template src="./HeaderNav.html"></template>

<script>
import { eventBus } from '../main.js'

export default {
  data () {
    return {
      userInfo: [],
      matchedName: '',
      headerModule: '',
      headerName: '',
      onChangeIndex: 0,
      detailData: '',
      orderData: [
        {
          type: 0,
          title: '购买订单'
        },
        {
          type: 1,
          title: '出售订单'
        }
      ]
    }
  },
  created () {
    this.userInfo = this.$storage.session.get('userInfo')
    this.detailData = this.$storage.session.get('detailData')
    // eventBus.changeIndex(this.onChangeIndex)
    // this.onChange(this.onChangeIndex)
    if (this.$storage.session.get('onChangeIndex') != null) {
      this.onChangeIndex = this.$storage.session.get('onChangeIndex')
    } else {
      this.$storage.session.set('onChangeIndex', this.onChangeIndex)
    }
  },
  mounted () {
    this.matchedName = this.$router.app._route.matched[0].name
    if (this.matchedName === 'TradingCenter' || this.matchedName === 'OtherPage') {
      this.headerModule = 'styleOne'
    } else if (this.matchedName === 'OrderLayout') {
      this.headerModule = 'styleTwo'
    } else {
      this.headerModule = 'styleThree'
      switch (this.matchedName) {
        case 'TradingSellPage':
          this.headerName = '出售'
          break

        case 'TradingBuyPage':
          this.headerName = '购买'
          break

        case 'SetCollectionPage':
          this.headerName = '设置收款账号'
          break

        case 'AddBankCard':
          this.headerName = '添加银行卡'
          break

        case 'bankCard':
          this.headerName = '银行卡'
          break

        case 'editAccount':
          this.editType = this.$storage.session.get('editType')
          if (this.editType === 1) this.headerName = '编辑银行卡'
          if (this.editType === 2) this.headerName = '编辑支付宝'
          if (this.editType === 3) this.headerName = '编辑微信'
          break

        case 'AddWeChatPay':
          this.headerName = '添加微信'
          break

        case 'weChatPay':
          this.headerName = '微信'
          break

        case 'AddAlipay':
          this.headerName = '添加支付宝'
          break

        case 'alipay':
          this.headerName = '支付宝'
          break

        case 'MessagePage':
          this.headerName = '订单提醒'
          break

        case 'OrderDetail':
          this.headerName = '订单详情'
          break

        case 'Transactions':
          this.headerName = '财务信息'
          break
      }
    }
  },
  methods: {
    messagePage () {
      this.$router.push({ name: 'MessagePage' })
    },
    home () {
      this.$router.push({ name: 'AllOrder' })
    },
    backPage () {
      if (this.$router.currentRoute.name === 'SetCollectionPage') {
        this.$router.push({ name: 'OtherPage' })
      } else {
        this.$router.goBack() // 返回上一頁
      }
    },
    OtherPage () {
      this.$router.push({ name: 'OtherPage' })
    },
    onChange (v) {
      this.onChangeIndex = v
      this.$storage.session.set('onChangeIndex', this.onChangeIndex)
      eventBus.changeIndex(v + 1)
    }
  }
}
</script>

<style lang="scss" src="./HeaderNav.scss" scoped>
</style>
