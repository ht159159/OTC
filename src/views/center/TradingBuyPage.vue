<template src="./TradingBuyPage.html"></template>

<script>
// import { apiBuy, apiOrders, apiAdvertsDetails } from '@/api'
import { Toast } from 'mint-ui'
import HeaderNav from '../../components/HeaderNav.vue'
export default {
  data () {
    return {
      buyMerchantData: {
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
        amount: ''
      },
      adid: {
        id: ''
      },
      ordersData: {
        type: 1,
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
  components: {
    HeaderNav
  },
  // props: {
  //   buyMerchantId: Number
  // },
  created () {
    this.adid.id = this.$route.query.id
    // apiAdvertsDetails(this.adid, true).then((res) => {
    //   this.buyMerchantData = res.result
    // })
  },
  methods: {
    buySubmit () {
      this.submitData.adId = this.buyMerchantData.id
      this.submitData.amount = this.amount
      if (this.amount === '') {
        Toast({
          message: '请输入数量!',
          iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
          duration: 2000
        })
        return
      }
      if (this.amount > this.buyMerchantData.maxAmount || this.amount < this.buyMerchantData.minAmount) {
        Toast({
          message: '出售数量超过交易范围',
          iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
          duration: 2500
        })
        return
      }
      if (this.amount !== '') {
        // console.log(this.submitData)
        // apiBuy(this.submitData, true).then((res) => {
        //   // console.log(res)
        //   if (!res.success) {
        //     Toast({
        //       message: res.msg,
        //       iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
        //       duration: 2500
        //     })
        //   }
        //   if (res.success) {
        //     Toast({
        //       message: res.msg,
        //       iconClass: 'icon-success',
        //       duration: 1500
        //     })
        //     apiOrders(this.ordersData, true).then((res) => {
        //       if (res.success) {
                this.$storage.session.set('detailData', this.detailData)
                this.$router.push({ name: 'OrderDetail' })
        //       } else {
        //         Toast({
        //           message: res.msg,
        //           iconClass:
        //             'mint-toast-icon mintui mintui-field-error icon-black',
        //           duration: 2500
        //         })
        //       }
        //     })
        //     // setTimeout(() => { this.$router.push({ name: 'AllOrder' }) }, 1300)
        //   }
        // })
      }
    },
    autoAmount (i) {
      this.amount = this.autoAmountBtn[i].amount
      this.total =
        this.autoAmountBtn[i].amount * this.buyMerchantData.realPrice
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
      this.total = this.caclMul(this.amount, this.buyMerchantData.realPrice)
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

<style lang="scss" src="./TradingBuyPage.scss" scoped>
</style>
