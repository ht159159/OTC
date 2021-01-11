<template src="./AddBankCard.html"></template>

<script>
import HeaderNav from "../../components/HeaderNav.vue";
import NumericKeypad from "../../components/NumericKeypad.vue";
import { apiInsert } from "@/api";
import { Toast } from "mint-ui";
import bankinfojs from '../../utils/bankinfo.js'; // 输入号码识别银行名称
window.bankinfo = bankinfojs;

export default {
  components: {
    HeaderNav,
    NumericKeypad,
  },
  data() {
    return {
      addBankCardData: [
        { listName: "姓名", placeholder: "请输入姓名", value: "" , maxlength:"4"},
        { listName: "银行帐号", placeholder: "请输入银行帐号", value: "" , maxlength:"20"},
        { listName: "银行名称", placeholder: "输入卡号自动匹配", value: "" , maxlength:"30"},
        // { listName: "安全码", placeholder: "请输入安全码", value: "" },
      ],
      insertData: {
        name: "",
        bankName: "",
        no: "",
        image: "",
        type: 1,
        safeCode: "",
      },
      safeCode: "",
      bankData: ""
    };
  },
  methods: {
    submit() {
      this.insertData.name = this.addBankCardData[0].value;
      this.insertData.bankName = this.addBankCardData[2].value;
      this.insertData.no = this.addBankCardData[1].value;
      this.insertData.safeCode = this.safeCode;
      if (this.insertData.name === "") {
        Toast({
          message: "请输入姓名",
          iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
          duration: 2000,
        });
        return;
      }
      if (this.insertData.bankName === "" || this.insertData.bankName == undefined) {
        Toast({
          message: "无此银行名称，请重新输入银行卡号",
          iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
          duration: 2000,
        });
        return;
      }
      if (this.insertData.no === "") {
        Toast({
          message: "请输入银行卡号",
          iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
          duration: 2000,
        });
        return;
      }

      if (this.insertData.safeCode === "") {
        Toast({
          message: "请输入安全码",
          iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
          duration: 2000,
        });
        return;
      } else {
        apiInsert(this.insertData, true).then((res) => {
          if (!res.success) {
            Toast({
              message: res.msg,
              iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
              duration: 2000,
            });
          } else {
            Toast({
              message: res.msg,
              iconClass:
                "mint-toast-icon mintui mintui-field-success icon-black",
              duration: 2000,
            });
          }
          this.backrouter();
        });
      }
    },
    safepwd(v) {
      this.safeCode = v;
    },
    backrouter() {
      setTimeout(() => {
        let backurl = this.$storage.session.get("backurl");
        if (backurl != null) {
          this.$storage.session.set("backurl", null);
          this.$router.push({ name: backurl });
          return;
        }
        this.$router.push({ name: "SetCollectionPage" });
      }, 2000);
    },
    listenerInput () {
      this.addBankCardData[1].value.length >= 1 ? this.bankData = bankinfo.bankCardAttribution(this.addBankCardData[1].value) : ""
      
    }
  },
  watch: {
    bankData(e){
      e =="error" ? this.addBankCardData[2].value = "未匹配到银行" : this.addBankCardData[2].value = e.bankName;
    }
  }
};
</script>

<style lang="scss" src="./AddBankCard.scss" scoped></style>
