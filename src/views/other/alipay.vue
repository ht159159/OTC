<template src="./alipay.html"></template>

<script>
import HeaderNav from '../../components/HeaderNav.vue'
import { apiDelete } from '@/api'
import { Toast, MessageBox } from 'mint-ui'

export default {
  data () {
    return {
      accountsList: '',
      alipayList: [],
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
      if (this.accountsList.data[i].type === 2) {
        this.editShow = true
        this.alipayList.push(this.accountsList.data[i])
      }
    }
  },
  methods: {
    edit (v) {
      this.$storage.session.set('editType', v)
      this.$storage.session.set('editData', this.alipayList)
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
      this.deleteData.id = this.alipayList[this.deleteIndex].id
      this.alipayList.splice(this.deleteIndex, 1)
      apiDelete(this.deleteData, true).then(res => {
        if (!res.success) {
          Toast({
            message: res.msg,
            iconClass: 'icon-success',
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

<style lang="scss" src="./alipay.scss" scoped>

</style>
