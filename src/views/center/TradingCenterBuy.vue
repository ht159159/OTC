<template src="./TradingCenterBuy.html"></template>

<script>
// import { apiAdverts } from '@/api'

export default {
  data () {
    return {
      // userInfo: [],
      buyMerchant: {
        type: 2,
        pageIndex: 1,
        pageSize: 10
      },
      buyMerchantListData: [
        {
          merchantNickName: "XXX",
          realPrice: 12,
          currencyName: "WWW",
          minAmount: 1,
          maxAmount: 1000,
          usableAmount: 5000,
          payTypes:"1,2,3"
        }
      ]
    }
  },
  created () {
    this.getAdverts()
  },
  mounted () {
    this.buytimer = setInterval(this.getAdverts, 60000)
  },
  beforeRouteLeave (to, from, next) {
    if (from.name === 'TradingCenterBuy') {
      clearInterval(this.buytimer)
    }
    next()
  },
  methods: {
    getAdverts () {
      // apiAdverts(this.buyMerchant, true).then((res) => {
        // this.buyMerchantListData = res.result.data

        for (let i = 0; this.buyMerchantListData.length > i; i++) {
          this.buyMerchantListData[i].payTypes = this.buyMerchantListData[i].payTypes.split(',')
        }
      // })
    },
    buyPage (i) {
      this.$router.push({ path: '/TradingBuyPage', query: { id: i } })
    }
  }
}
</script>

<style lang="scss" src="./TradingCenterBuy.scss" scoped>
</style>
