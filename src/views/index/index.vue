<template src="./index.html"></template>

<script>
// import { apiInfo } from '@/api'

export default {
  data () {
    return { 
      res: '',
      userInfo:{
        nickName:"QQQQ"
      }
     }
  },
  created () {
    this.login()
  },
  mounted () {},
  methods: {
    login () {
      // apiInfo('', true).then((res) => {
      //   if (res.result) {
          this.$storage.session.set('userInfo', this.userInfo)
          this.$router.push({ name: 'TradingCenterBuy' })
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
