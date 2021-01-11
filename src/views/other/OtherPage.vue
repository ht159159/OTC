<template src="./OtherPage.html"></template>

<script>
// import { apiInfo } from '@/api'
import { MessageBox } from 'mint-ui'
import HeaderNav from '../../components/HeaderNav.vue'
import FooterNav from '../../components/FooterNav.vue'
export default {
  components: {
    FooterNav,
    HeaderNav
  },
  data () {
    return {
      userInfo: {
        nickName: "XXX",
        balance: 400,
        address: "852147963320"
      }
    }
  },
  created () {
    this.$storage.session.set("backurl", null);
    // apiInfo('', true).then((res) => {
    //   this.userInfo = res.result
    //   this.$storage.session.set('userInfo', res.result)
    // })
  },
  methods: {
    setCollectionPage () {
      this.$router.push({ name: 'SetCollectionPage' })
    },
    goToHome () {
      this.$router.push({ name: 'TradingCenterBuy' })
    },
    Transactions () {
      this.$router.push({ name: 'Transactions' })
    },
    tips () {
      MessageBox({
        title: '温馨提示',
        message: '暂未开放',
        closeOnClickModal: false
      })
    },
    // 复制成功
    onCopy (e) {
      MessageBox({
        title: '温馨提示',
        message: '钱包地址复制成功，只能在ERC20链上充值USDT，最小数量100个，否则不会到账。',
        closeOnClickModal: false
      })
    },
    // 复制失败
    onError (e) {
      MessageBox({
        title: '警告',
        message: '钱包地址复制失败',
        closeOnClickModal: false
      })
    }
  }
}
</script>

<style lang="scss" src="./OtherPage.scss" scoped>
</style>
