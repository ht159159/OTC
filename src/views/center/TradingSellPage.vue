<template src="./TradingSellPage.html"></template>

<script>
// import {
//   apiSell,
//   apiAccounts,
//   apiInfo,
//   apiOrders,
//   apiAdvertsDetails
// } from '@/api'
import { Toast } from 'mint-ui'
import HeaderNav from '../../components/HeaderNav.vue'

export default {
  components: {
    HeaderNav
  },
  data () {
    return {
      sellMerchantData: {
        realPrice: 1,
        minAmount: 2,
        maxAmount: 3,
        usableAmount: 4,
        merchantNickName: "SSS"
      },
      autoAmountBtn: [
        { amount: 100 },
        { amount: 200 },
        { amount: 500 },
        { amount: 1000 },
        { amount: 2000 },
        { amount: 5000 }
      ],
      amount: '',
      total: '0',
      submitData: {
        adId: '',
        amount: '',
        accountId: ''
      },
      adid: {
        id: ''
      },
      userInfo: {
        balance: 500
      },
      accountsList: [
          {
          id:1,
          type: 2,
          name: "XXXXXXXX",
          no: 9632587410
        }
      ],
      selected: '0',
      setCollectionBtn: false,
      ordersData: {
        type: 2,
        status: 1,
        pageIndex: 1,
        pageSize: 10
      },
      detailData:{
        id: 1,
        status: 1,
        no: 456879123,
        count: 400,
        realPrice: 2,
        statusName: "OK",
        trmo: 3215647889,
        cancelOrderTime: 5,
        autoCancelOrderTime: 10
      }
    }
  },
  created () {
    this.adid.id = this.$route.query.id
    // apiAdvertsDetails(this.adid, true).then((res) => {
    //   this.sellMerchantData = res.result
    // })

    // apiInfo('', true).then((res) => {
    //   this.userInfo = res.result

    //   if (res.result.hasSafeCode) {
    //     this.setCollectionBtn = false
    //   } else {
    //     this.setCollectionBtn = true
    //   }
    // })
    // apiAccounts('', true).then((res) => {
    //   this.accountsList = res.result.data
    // })
  },
  methods: {
    sellSubmit () {
      this.submitData.adId = this.sellMerchantData.id
      this.submitData.amount = this.amount
      if (this.selected === '0') {
        Toast({
          message: '请选择收款方式!',
          iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
          duration: 2000
        })
        return
      } else if (this.amount === '') {
        Toast({
          message: '请输入数量!',
          iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
          duration: 2000
        })
        return
      }
      if (this.amount > this.sellMerchantData.maxAmount || this.amount < this.sellMerchantData.minAmount) {
        Toast({
          message: '出售数量超过交易范围',
          iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
          duration: 2500
        })
        return
      }
      if (this.amount > this.userInfo.balance) {
        Toast({
          message: '您的余额不足！',
          iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
          duration: 2500
        })
        return
      }
      if (this.amount !== '' && this.selected !== '0') {
        // console.log(this.submitData)
        // for (let i = 0; i < this.accountsList.data.length; i++) {
        //   this.selected = parseInt(this.selected)
        //   if (this.accountsList.data[i].type === this.selected) {
        //     this.submitData.accountId = this.accountsList.data[i].id
        //   }
        // }
        this.submitData.accountId = this.selected

        // apiSell(this.submitData, true).then((res) => {
        //   // console.log(res)
        //   if (!res.success) {
        //     Toast({
        //       message: res.msg,
        //       iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
        //       duration: 2500
        //     })
        //   }
        //   if (res.success) {
            Toast({
              message: "res.msgSuccess",
              iconClass: 'icon-success',
              duration: 1500
            })
            // apiOrders(this.ordersData, true).then((res) => {
            //   if (res.success) {
                this.$storage.session.set('detailData', this.detailData)
                this.$router.push({ name: 'OrderDetail' })
            //   } else {
            //     Toast({
            //       message: res.msg,
            //       iconClass:
            //         'mint-toast-icon mintui mintui-field-error icon-black',
            //       duration: 2500
            //     })
            //   }
            // })
            // this.$router.push({ name: 'TradingCenterBuy' })
        //   }
        // })
      }
    },
    autoAmount (i) {
      this.amount = this.autoAmountBtn[i].amount
      this.total =
        this.autoAmountBtn[i].amount * this.sellMerchantData.realPrice
      // console.log(this.amount)
    },
    calc () {
      var numReg = /^[0-9]*$/
      var numRe = new RegExp(numReg)
      if (!numRe.test(this.amount)) {
        this.amount = ''
        Toast({
          message: '请输入数字!',
          iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
          duration: 2500
        })
        this.amount = ''
        return false
      }
      this.total = this.caclMul(this.amount, this.sellMerchantData.realPrice)
    },
    caclMul (arg1, arg2) {
      var m = 0
      var s1 = arg1.toString()
      var s2 = arg2.toString()
      try {
        m += s1.split('.')[1].length
      } catch (e) {}
      try {
        m += s2.split('.')[1].length
      } catch (e) {}

      return (
        (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
        Math.pow(10, m)
      )
    }
  }
}
</script>

<style lang="scss" src="./TradingSellPage.scss" scoped></style>
