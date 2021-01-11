<template src="./Transactions.html"></template>

<script>
import HeaderNav from '../../components/HeaderNav.vue'
// import { apiDespoits } from '@/api'
import { MessageBox } from 'mint-ui'

export default {
  data () {
    return {
      DespoitsData: {
        pageIndex: 1,
        pageSize: 10
      },
      DespoitsList: [
        {
          to: "1234569871236547896321478522",
          statusName: "WWWWW",
          updateTime: "2020-12-02",
          value: "100",
          tokenSymbol: "ssssss",
          txHash: "7410258963321456987",
          blockNumber: "789456"
        }
      ],
      totalPages: '',
      moreData: false
    }
  },
  components: {
    HeaderNav
  },
  props: {
    TransactionsNavData: Array
  },

  created () {
    this.getDespoitsData()
  },
  methods: {
    getDespoitsData () {
      // apiDespoits(this.DespoitsData, true).then((res) => {
      //   this.DespoitsList = res.result.data
      //   this.totalPages = res.result.totalPages
      //   if (this.totalPages <= 1) {
      //     document.querySelector('.noMoreData').innerHTML = '没有更多数据了'
      //   }
      // })
    },
    // 無限下滑加載
    gd_add () {
      let wrapheight = document.querySelector('.Transactions').clientHeight // 容器的高度
      let wrapheight1 = document.querySelector('.Transactions').scrollHeight // 容器的高度
      let scrolltop = document.querySelector('.Transactions').scrollTop // 滚动条的scrolltop
      // let scrollheight = document.querySelector('.Transactions').prop('scrollHeight')// 内容的高度
      if (wrapheight1 - scrolltop - wrapheight === 0) {
        // 判斷是否滑到底
        this.DespoitsData.pageIndex++

        this.moreData = true
        if (this.totalPages !== '') {
          // 判斷頁數是超出總頁數
          if (this.DespoitsData.pageIndex > this.totalPages) {
            this.moreData = false
            this.DespoitsData.pageIndex--
            document.querySelector('.noMoreData').innerHTML = '没有更多数据了'
            return
          }
        }

        apiDespoits(this.DespoitsData, true).then((res) => {
          // console.log(res.result.data.length)
          let newOrder
          if (res.result.data.length < 1) {
            this.DespoitsData.pageIndex--
            // console.log(this.DespoitsData.pageIndex)
            return
          }
          newOrder = res.result.data
          for (let i = 0; i < newOrder.length; i++) {
            this.DespoitsList.push(newOrder[i])
          }
        })
      }
    },
    // 复制成功
    onCopy (e) {
      MessageBox({
        title: '温馨提示',
        message: 'TXHASH复制成功',
        closeOnClickModal: false
      })
    },
    // 复制失败
    onError (e) {
      MessageBox({
        title: '警告',
        message: 'TXHASH复制失败',
        closeOnClickModal: false
      })
    }
  }
}
</script>

<style lang="scss" src="./Transactions.scss" scoped>
</style>
