<template src="./weChatPay.html"></template>

<script>
import HeaderNav from '../../components/HeaderNav.vue'
import { apiDelete } from '@/api'
import { Toast, MessageBox } from 'mint-ui'

export default {
  data () {
    return {
      accountsList: '',
      weChatPayList: [],
      // deleteAlertShow: false,
      deleteIndex: '',
      deleteData: {
        id: ''
      },
      editShow: false
    }
  },
  components: {
    HeaderNav
  },
  created () {
    this.accountsList = this.$storage.session.get('accountsList')
    for (let i = 0; this.accountsList.data.length > i; i++) {
      if (this.accountsList.data[i].type === 3) {
        this.editShow = true
        this.weChatPayList.push(this.accountsList.data[i])
      }
    }
  },
  methods: {
    edit (v) {
      this.$storage.session.set('editType', v)
      this.$storage.session.set('editData', this.weChatPayList)
      this.$router.push({ name: 'editAccount' })
    },
    deleteAccount (i) {
      this.deleteIndex = i
      // this.deleteAlertShow = true
      this.accountsList.data = []
      this.$storage.session.set('accountsList', this.accountsList)
      this.alertMessageBox()
    },
    // cancel () {
    //   this.deleteAlertShow = false
    // },
    determine () {
      this.deleteData.id = this.weChatPayList[this.deleteIndex].id
      this.weChatPayList.splice(this.deleteIndex, 1)
      apiDelete(this.deleteData, true).then(res => {
        if (!res.success) {
          Toast({
            message: res.msg,
            iconClass: 'mint-toast-icon mintui mintui-field-error icon-black',
            duration: 1000
          })
        } else {
          Toast({
            message: res.msg,
            iconClass: 'icon-success',
            duration: 1000
          })
        }
      })
      // this.deleteAlertShow = false
      this.editShow = false
    },
    //MessageBox
    alertMessageBox() {
      console.log()
        MessageBox.confirm('是否确定删除', '删除帐户').then(action => {
          this.determine()
        }).catch(e=>e);
    }
  }
}
</script>

<style lang="scss" src="./weChatPay.scss" scoped>

</style>
