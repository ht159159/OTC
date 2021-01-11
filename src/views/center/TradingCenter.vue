<template src="./TradingCenter.html"></template>

<script>
import FooterNav from '../../components/FooterNav.vue'
import HeaderNav from '../../components/HeaderNav.vue'
export default {
  data () {
    return {
      currentView: ''
    }
  },
  components: {
    FooterNav,
    HeaderNav
  },
  mounted () {
    this.currentView = this.$route.name
  },
  methods: {
  },
  watch: {
    $route (val) {
      this.currentView = val.name
    }
  }
}
</script>

<style lang="scss" src="./TradingCenter.scss" scoped>
</style>
