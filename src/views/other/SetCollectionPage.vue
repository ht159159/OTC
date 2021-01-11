<template src="./SetCollectionPage.html"></template>

<script>
import { Toast } from "mint-ui";
import HeaderNav from "../../components/HeaderNav.vue";
// import { apiAccounts, apiSetSafeCode, apiInfo } from "@/api";

export default {
  components: {
    HeaderNav,
  },
  data() {
    return {
      setPasswordAlert: true,
      userInfo: "",
      registration_data: {
        pwdType: "password",
      },
      setCollectionData: [
        {
          name: "银行卡",
          link: "bankCard",
          src: require("../../assets/images/icon/bankCard-icon.png"),
        },
        {
          name: "支付宝",
          link: "alipay",
          src: require("../../assets/images/icon/alipay-icon.png"),
        },
        {
          name: "微信",
          link: "weChatPay",
          src: require("../../assets/images/icon/weChat-icon.png"),
        },
      ],
      SetSafeCodeData: {
        safeCode: "",
      },
    };
  },
  created() {
    this.userInfo = this.$storage.session.get("userInfo");
    this.setPasswordAlert = this.userInfo.hasSafeCode;
    // apiAccounts("", true).then((res) => {
    //   // console.log(res.result)
    //   this.$storage.session.set("accountsList", res.result);
    // });
  },
  props: {},
  methods: {
    backPage() {
      history.back();
    },
    passwordShow() {
      const passwordToggle = document.querySelector(".setPassword-input");
      if (passwordToggle.type === "password") {
        passwordToggle.type = "text";
      } else {
        passwordToggle.type = "password";
      }
    },
    closeAlert() {
      if (!this.SetSafeCodeData.safeCode) {
        Toast({
          message: "请输入安全码！",
          iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
          duration: 2000,
        });
        return;
      }
      var reg = new RegExp("^[0-9]*$");
      if (!reg.test(this.SetSafeCodeData.safeCode)) {
        Toast({
          message: "安全码格式为六位纯数字！",
          iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
          duration: 2000,
        });
        return;
      }
      // apiSetSafeCode(this.SetSafeCodeData, true).then((res) => {
      //   if (res.success) {
      //     Toast({
      //       message: res.msg,
      //       iconClass: "mint-toast-icon mintui mintui-field-success icon-black",
      //       duration: 2000,
      //     });
      //     apiInfo("", true).then((res) => {
      //       this.$storage.session.set("userInfo", res.result);
      //     });
          this.setPasswordAlert = true;
      //   } else {
      //     Toast({
      //       message: res.msg,
      //       iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
      //       duration: 2000,
      //     });
      //   }
      // });
    },
    messagePage() {
      this.$router.push({ name: "MessagePage" });
    },
  },
};
</script>

<style lang="scss" src="./SetCollectionPage.scss" scoped>
</style>
