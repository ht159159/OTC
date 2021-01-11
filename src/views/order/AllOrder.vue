<template src="./AllOrder.html"></template>

<script>
// import { apiOrders } from '@/api'
import { eventBus } from '../../main.js'

export default {
  data () {
    return {
      ordersData: {
        type: 1,
        status: '',
        pageIndex: 1,
        pageSize: 10
      },
      ordersList: [
        {
          no:1234567890,
          status: 1,
          statusName: "XXX",
          createTime: "20202020",
          realPrice: 500,
          count: 10,
          amount: 1,
          merchantNickName: "w"
        }
      ],
      totalPages: '',
      moreData: false
    }
  },
  props: {
    changeNumber: Number,
    allOrderNavData: Array
  },
  // 事件进行销毁 累積触发多次
  // beforeDestroy () {
  //   eventBus.$off('changeIndexEdited')
  // },

  created () {
    if (this.$storage.session.get('onChangeStatus') != null) {
      this.ordersData.status = this.$storage.session.get('onChangeStatus')
    }
    this.getApiOrdersData()
  },
  methods: {
    getApiOrdersData () {
      // 事件进行销毁 累積触发多次
      eventBus.$off('changeIndexEdited')
      eventBus.$on('changeIndexEdited', (i) => {
        this.ordersData.type = i
        if (this.$router.currentRoute.name === 'AllOrder') {
          // apiOrders(this.ordersData, true).then((res) => {
          //   this.ordersList = res.result.data
          //   this.totalPages = res.result.totalPages
          //   if (this.totalPages < 1) {
          //     document.querySelector('.noMoreData').innerHTML = '没有更多数据了'
          //   }
          // })
        }
      })
      this.ordersData.type = this.$storage.session.get('onChangeIndex') + 1

      apiOrders(this.ordersData, true).then((res) => {
        this.ordersList = res.result.data
        this.totalPages = res.result.totalPages
        if (this.totalPages <= 1) {
          document.querySelector('.noMoreData').innerHTML = '没有更多数据了'
        }
      })
    },
    detail (item) {
      // console.log(item)
      this.$storage.session.set('detailData', item)
      this.$router.push({ name: 'OrderDetail' })
    },
    // 無限下滑加載
    gd_add () {
      let wrapheight = document.querySelector('.AllOrder').clientHeight // 容器的高度
      let wrapheight1 = document.querySelector('.AllOrder').scrollHeight // 容器的高度
      let scrolltop = document.querySelector('.AllOrder').scrollTop // 滚动条的scrolltop
      // let scrollheight = document.querySelector('.AllOrder').prop('scrollHeight')// 内容的高度

      if (wrapheight1 - scrolltop - wrapheight === 0) {
        // 判斷是否滑到底
        this.ordersData.pageIndex++
        this.moreData = true
        if (this.totalPages !== '') {
          // 判斷頁數是超出總頁數
          if (this.ordersData.pageIndex > this.totalPages) {
            this.moreData = false
            this.ordersData.pageIndex--
            document.querySelector('.noMoreData').innerHTML = '没有更多数据了'
            return
          }
        }

        apiOrders(this.ordersData, true).then((res) => {
          // console.log(res.result.data.length)
          let newOrder
          // if (res.result.data.length < 1) {
          //   this.ordersData.pageIndex--;
          //   // console.log(this.ordersData.pageIndex)
          //   return;
          // }
          newOrder = res.result.data
          for (let i = 0; i < newOrder.length; i++) {
            this.ordersList.push(newOrder[i])
          }
        })
      }
    }
  },
  watch: {
    changeNumber () {
      this.ordersData.pageIndex = 1
      this.ordersData.status = this.allOrderNavData[this.changeNumber].status
      this.$storage.session.set('onChangeStatus', this.allOrderNavData[this.changeNumber].status)
      this.getApiOrdersData()
    }
  },
  destroyed () {
    this.$storage.session.set('onChangeIndex', 0)
    this.$storage.session.set('onChangeStatus', '')
    this.$storage.session.set('changeNumber', 0)
  }
}
</script>

<style lang="scss" src="./AllOrder.scss" scoped>
</style>
