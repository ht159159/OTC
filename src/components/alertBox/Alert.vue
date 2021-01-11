<template src="./Alert.html"></template>

<script>
export default {
  data () {
    return {
      setPasswordAlert: true,
      registration_data: {
        pwdType: 'password'
      }
    }
  },
  props: {
    text: String
  }
}
</script>

<style lang="scss" src="./Alert.scss" scoped></style>
