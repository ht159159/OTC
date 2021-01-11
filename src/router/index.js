import Vue from 'vue'
import VueRouter from 'vue-router'
// import Layout from '../views/Layout.vue'
import index from '../views/index/index.vue'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/TradingCenter',
    name: 'TradingCenter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/center/TradingCenter.vue'),
    component: () => import('../views/center/TradingCenter.vue'),
    children: [
      {
        path: '/TradingCenterBuy',
        name: 'TradingCenterBuy',
        component: () => import('../views/center/TradingCenterBuy.vue')
      },
      {
        path: '/TradingCenterSell',
        name: 'TradingCenterSell',
        component: () => import('../views/center/TradingCenterSell.vue')
      }
    ]
  },
  {
    path: '/TradingBuyPage',
    name: 'TradingBuyPage',
    component: () => import('../views/center/TradingBuyPage.vue')
  },
  {
    path: '/TradingSellPage',
    name: 'TradingSellPage',
    component: () => import('../views/center/TradingSellPage.vue')
  },
  {
    path: '/OrderLayout',
    name: 'OrderLayout',
    component: () => import('../views/order/OrderLayout.vue'),
    children: [
      {
        path: '/AllOrder',
        name: 'AllOrder',
        component: () => import('../views/order/AllOrder.vue')
      }
    ]
  },

  {
    path: '/OrderDetail',
    name: 'OrderDetail',
    component: () => import('../views/order/OrderDetail.vue')
  },
  {
    path: '/OtherPage',
    name: 'OtherPage',
    component: () => import('../views/other/OtherPage.vue')
  },
  {
    path: '/SetCollectionPage',
    name: 'SetCollectionPage',
    component: () => import('../views/other/SetCollectionPage.vue')
  },
  {
    path: '/AddBankCard',
    name: 'AddBankCard',
    component: () => import('../views/other/AddBankCard.vue')
  },
  {
    path: '/bankCard',
    name: 'bankCard',
    component: () => import('../views/other/bankCard.vue')
  },
  {
    path: '/AddWeChatPay',
    name: 'AddWeChatPay',
    component: () => import('../views/other/AddWeChatPay.vue')
  },
  {
    path: '/weChatPay',
    name: 'weChatPay',
    component: () => import('../views/other/weChatPay.vue')
  },
  {
    path: '/AddAlipay',
    name: 'AddAlipay',
    component: () => import('../views/other/AddAlipay.vue')
  },
  {
    path: '/alipay',
    name: 'alipay',
    component: () => import('../views/other/alipay.vue')
  },
  {
    path: '/editAccount',
    name: 'editAccount',
    component: () => import('../views/other/editAccount.vue')
  },
  {
    path: '/Transactions',
    name: 'Transactions',
    component: () => import('../views/other/Transactions.vue')
  },
  {
    path: '/MessagePage',
    name: 'MessagePage',
    component: () => import('../views/msg/MessagePage.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
VueRouter.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default router
