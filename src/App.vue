<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router" />
    </transition>

    <div class="msgPrompt" v-if="msgPromptShow">
      <div class="content">
        <div class="content-title">來自{{ getUnreadMessagesData.senderNickName }}的消息</div>
        <div class="content-text">
          <img src="../src/assets/images/icon/msgPrompt-icon.png" alt />
          <div>{{ getUnreadMessagesData.messageContent }}</div>
          <div class="msgPrompt-btn" @click="goToOrderDetail">查看订单详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiGetUnreadMessages } from '@/api'
// 引入vuex的辅助方法
// import {
//     mapState
// } from 'vuex'
export default {
  data () {
    return {
      style: '',
      // 页面加载方法
      isRouterAlive: true,
      transitionName: 'slide-right',
      goToOrderDetailData: {
        id: '',
        merchantNickName: ''
      },
      getUnreadMessagesData: '',
      msgPromptShow: false
    }
  },
  created () {
    var token = this.$route.query.token
    if (token) {
      this.$storage.session.set('token', `Bearer ${token}`)
    }
    // 判斷是否有無token
    if (this.$storage.session.get('token') === null) {
      this.$router.push({ name: 'index' })
    }

    // 禁止双指放大
    document.documentElement.addEventListener(
      'touchstart',
      function (event) {
        if (event.touches.length > 1) {
          event.preventDefault()
        }
      },
      { passive: false }
    )
    // 禁止双击放大
    let lastTouchEnd = 0
    document.documentElement.addEventListener(
      'touchend',
      function (event) {
        var now = Date.now()
        if (now - lastTouchEnd <= 100) {
          event.preventDefault()
        }
        lastTouchEnd = now
      },
      { passive: false }
    )
  },
  mounted () {
    // if (this.$storage.session.get('userInfo')) {
    //   setInterval(this.getUnreadMessages, 10000)
    // }
  },
  methods: {
    getUnreadMessages () {
      apiGetUnreadMessages('', true).then((res) => {
        if (res !== null) {
          if (this.$router.currentRoute.name !== 'OrderDetail') {
            this.getUnreadMessagesData = res
            this.goToOrderDetailData.id = res.orderId
            this.goToOrderDetailData.merchantNickName = res.senderNickName
            this.msgPromptShow = true
          } else {
            this.getUnreadMessagesData = res
            this.goToOrderDetailData.id = res.orderId
            this.goToOrderDetailData.merchantNickName = res.senderNickName
            this.msgPromptShow = false
            this.goToOrderDetail()
          }
        }
      })
    },
    goToOrderDetail () {
      this.$storage.session.set('detailData', this.goToOrderDetailData)
      this.$router.push({ name: 'OrderDetail' }).catch()
      this.msgPromptShow = false
    }
  },
  watch: {
    $route (to, from) {
      // 切换动画

      let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退

      if (isBack) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }

      this.$router.isBack = false
    },
    style (val) {
      this.setTheme(val)
    }
  },

  // 页面加载方法
  provide () {
    return {
      reload: this.reload
    }
  }
}
</script>

<style lang="scss">
@import "~@/style/_reset.scss";
@import "./style/common.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scroll: touch;
  text-align: center;
  width: 100%;
  //height: 101vh;
  background-color: #f8f8f8;
  font-family: "微软雅黑";
  overflow: hidden;
  // min-height: calc(var(--vh, 1vh) * 100);
  height: 100%;

  .msgPrompt {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 rem(20);
    box-sizing: border-box;

    .content {
      width: 100%;
      background-color: #fff;
      margin-top: calc(50%);
      border-radius: 15px;
      padding: rem(15);
      box-sizing: border-box;

      &-title {
        font-size: rem(20);
        font-weight: bold;
        margin-bottom: rem(20);
      }

      &-text {
        .msgPrompt-btn {
          margin-top: rem(20);
          color: #fff;
          background-color: $blue;
          border-radius: 10px;
          padding: 10px;
        }
      }
      img {
        width: rem(40);
        margin-bottom: rem(5);
      }
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.Router {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.377s ease;
  box-sizing: border-box;
  // overflow-y: auto;
  overflow: hidden;
}
// .slide-right-enter-active, .slide-right-leave-active {
//   transition: opacity .5s;
// }
// .slide-right-enter, .slide-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100% 0);
}
</style>
