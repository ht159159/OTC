<template src="./TradingCenterSell.html"></template>

<script>
// import { apiAdverts } from '@/api'

export default {
  data () {
    return {
      buyMerchant: {
        type: 1,
        pageIndex: 1,
        pageSize: 10
      },
      sellMerchantListData: [
        {
          merchantNickName: "XXX",
          realPrice: 12,
          currencyName: "WWW",
          minAmount: 1,
          maxAmount: 1000,
          usableAmount: 5000,
          payTypes:"1,2,3",
          id: 1
        }
      ]
    }
  },
  created () {
    this.getAdverts()
  },
  mounted () {
    this.selltimer = setInterval(this.getAdverts, 60000)
  },

  beforeRouteLeave (to, from, next) {
    if (from.name === 'TradingCenterSell') {
      clearInterval(this.selltimer)
    }
    next()
  },
  methods: {
    getAdverts () {
      // apiAdverts(this.buyMerchant, true).then((res) => {
      //   this.sellMerchantListData = res.result.data
        for (let i = 0; this.sellMerchantListData.length > i; i++) {
          this.sellMerchantListData[i].payTypes = this.sellMerchantListData[
            i
          ].payTypes.split(',')
        }
      // })
    },
    sellPage (i) {
      this.$router.push({ path: 'TradingSellPage', query: { id: i } })
    }
  }
}
</script>

<style lang="scss" src="./TradingCenterSell.scss" scoped>
</style>
