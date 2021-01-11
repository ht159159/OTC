<template src="./OrderDetail.html"></template>

<script>
import HeaderNav from "../../components/HeaderNav.vue";
// import {
//   apiRead,
//   apiSend,
//   apiUpdateOrder,
//   apiUploadImg,
//   apiOrderDetails,
//   apiAccounts,
// } from "@/api";
import { Toast, MessageBox } from "mint-ui";

export default {
  components: {
    HeaderNav,
  },
  data() {
    return {
      orderDetailsData: {
        orderId: "",
      },
      detailData: "",
      detailList: {
        id: 1,
        status: 1,
        no: 456879123,
        count: 400,
        realPrice: 2,
        statusName: "OK",
        trmo: 3215647889,
        cancelOrderTime: 5,
        autoCancelOrderTime: 10
      },
      detailShow: true,
      chatContent: "",
      sendData: {
        orderId: "",
        content: "",
        messageType: "",
      },
      readList: {
        messages:[
          {
            messageContent: "456789",
            messageType: 1
          },
          {
            messageContent: "1111111",
            messageType: 1,
            sendByOneSelf: true
          },
        ]
      },
      timerFn: null,
      updateOrderData: {
        orderId: "",
        status: "",
      },
      accountsList: {
        type: 1,
        name: "XXXXXXXX",
        no: 6547893210
      },
      // deleteAlertShow: false,
      alertTitle: "",
      selected: "0",
      sellerAccountList: "",
      selectedSeller: "0",
      isTimeout: false,
    };
  },
  created() {
    this.detailData = this.$storage.session.get("detailData");
    this.sendData.orderId = this.detailData.id;
    this.orderDetailsData.orderId = this.detailData.id;
    // apiOrderDetails(this.orderDetailsData, true).then((res) => {
    //   this.sellerAccountList = res.result.accounts;
    //   this.detailList = res.result;
    // });
    // apiAccounts("", true).then((res) => {
    //   this.accountsList = res.result.data;
    // });
  },
  mounted() {
    this.getRead();

    let self = this
    document.onkeydown = function(e) {
      let ev = document.all ? window.event : e
      if (ev.keyCode === 13) {
        self.chatSubmit()
      }
    }
  },
  updated() {
    if (this.detailData.status === 1 || this.detailData.status === 2) {
      document.querySelector(".chatBox").style.height =
        "calc(100% - " + document.querySelector(".chatBox").offsetTop + "px)";
      let interval =
        this.$refs.chatArea.getBoundingClientRect().top -
        this.$refs.chatBox.getBoundingClientRect().top +
        this.$refs.chatFooter.getBoundingClientRect().height;
      document.querySelector(".chat").style.height =
        "calc(100% - " + interval + "px)";

      if (!this.detailShow) {
        setTimeout(function () {
          document.querySelector(".chatBox").style.height =
            "calc(100% - " +
            document.querySelector(".chatBox").offsetTop +
            "px)";
          let interval =
            document.querySelector(".chat").offsetTop -
            document.querySelector(".chatBox").offsetTop +
            document.querySelector(".chatFooter").height;
          document.querySelector(".chat").style.height =
            "calc(100% - " + interval + "px)";
        }, 100);
        // document.querySelector('.chatBox').style.height = 'calc(100% - ' + 64 + 'px)'
      }
      // 讯息直接到最底部
      this.scrollBottom();
    }
  },
  methods: {
    messagePage() {
      this.$router.push({ name: "MessagePage" });
    },
    // 复制成功
    onCopy(e) {
      MessageBox({
        title: "温馨提示",
        message: "订单号复制成功",
        closeOnClickModal: false,
      });
    },
    // 复制失败
    onError(e) {
      MessageBox({
        title: "警告",
        message: "订单号复制失败",
        closeOnClickModal: false,
      });
    },
    toggle() {
      this.detailShow = !this.detailShow;
    },

    // 发送讯息
    chatSubmit() {
      if (this.chatContent !== "") {
        this.sendData.content = this.chatContent;
        this.chatContent = "";
        this.sendData.messageType = 1;
        apiSend(this.sendData, true).then((res) => {
          if (res.success) {
            //发送成功后读取一次信息
            this.getRead();
          }
        });
      } else {
        Toast({
          message: "请输入要发送的信息!",
          iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
          duration: 1500,
        });
      }
    },

    // 讯息直接到最底部
    scrollBottom() {
      this.$nextTick(function () {
        let div = document.getElementById("chatArea");
        div.scrollTop = div.scrollHeight;
      });
    },

    // 获取讯息
    getRead() {
      // apiRead(this.orderDetailsData, true).then((res) => {
      //   this.detailData.status = res.result.orderStatus;
      //   if (
      //     this.readList !== "" &&
      //     res.result.messages !== null &&
      //     this.readList.messages.length === res.result.messages.length
      //   ) {
      //   } else {
      //     if (
      //       this.readList.orderStatus !== undefined &&
      //       this.readList.orderStatus !== res.result.orderStatus
      //     ) {
      //       window.location.reload()
      //     } else {
      //       this.readList = res.result;
      //     }
      //   }
      //   if (
      //     this.detailData.status === 1 ||
      //     this.detailData.status === 2 ||
      //     this.detailData.status === 0
      //   ) {
      //     this.timer();
      //   }
      // });
    },

    // 這是一個定時器
    timer() {
      // console.log(this.$router.currentRoute.name)
      if (this.$router.currentRoute.name === "OrderDetail") {
        this.timerFn = setTimeout(() => {
          this.getRead();
        }, 10000);
      }
    },

    // 更新订单
    updateOrder(v) {

      
      // console.log(v)
      this.updateOrderData.orderId = this.detailData.id;
      this.updateOrderData.status = v;

      // // 出售未收到款
      if (v === -2) {
        this.alertTitle = "如果您未收到款，此订单将会变为申诉中，您将暂时无法进行其他交易，系统将会介入调解！";
        // this.deleteAlertShow = true;
        this.alertMessageBox(this.alertTitle);
      }

      if (v === -1) {
        this.alertTitle = "如果您当日取消交易次数过多，您今日将无法进行交易！";
        // this.deleteAlertShow = true;
        this.alertMessageBox(this.alertTitle);
      }
      if (v === 2) {
        // 购买
        this.alertTitle = "请确认您是否已付款，若您未付款请点击取消进行付款，如已付款请点击确认继续，祝你愉快！";
        if (this.selected === "0") {
          Toast({
            message: "请选择付款方式!",
            iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
            duration: 2000,
          });
        } 
        else if (this.selectedSeller === "0") {
          Toast({
            message: "请选择卖家收款方式!",
            iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
            duration: 2000,
          });
        }
        if (this.selectedSeller !== "0" && this.selected !== "0") {
          this.updateOrderData.payAccountId = this.selected;
          this.updateOrderData.accountId = this.selectedSeller;
          // this.deleteAlertShow = true;
          this.alertMessageBox(this.alertTitle);
        }
      }

      // 出售以收到款
      if (v === 3) {
        this.alertTitle = "请确认您已收到款项，将完成此笔交易！祝您愉快！";
        this.alertMessageBox(this.alertTitle);
      }
      // MessageBox.confirm('请确认是否继续？', this.alertTitle).then(action => {
      //   console.log(action)
      // }).catch(e=>e);
    },

    //MessageBox
    alertMessageBox(alertTitle) {
      console.log(alertTitle)
        MessageBox.confirm('请确认是否继续？', alertTitle).then(action => {
          this.determine()
        }).catch(e=>e);
    },
    // 确定更新
    determine() {
      // this.deleteAlertShow = false;
      apiUpdateOrder(this.updateOrderData, true).then((res) => {
        //this.$router.push({ name: "OrderDetail" });
        window.location.reload()
        if (res.success) {
          Toast({
            message: res.msg,
            iconClass: "icon-success",
            duration: 2000,
          });
        } else {
          Toast({
            message: res.msg,
            iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
            duration: 2000,
          });
        }
      });
    },
    // cancel() {
    //   this.deleteAlertShow = false;
    // },
    SetCollection() {
      this.$storage.session.set("backurl", "OrderDetail");
      this.$router.push({ name: "SetCollectionPage" });
    },
    // 图片上传功能
    tirggerFile(event) {
      // console.log('asd')
      // console.log(event.target.files)
      // let self = this
      let file = event.target.files[0];
      let imgSize = file.size;
      // let reader = new FileReader()
      var param = new FormData(); // 创建form对象
      param.append("file", file, file.name); // 通过append向form对象添加数据
      param.append("type", "1"); // 添加form表单中其他数据
      // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      // reader.readAsDataURL(event.target.files[0])
      // console.log(file)
      // console.log(param)
      // console.log(imgSize)
      // console.log(file)
      if (!event.target.files.length) return;
      if (imgSize / 1024 > 10000) {
        // console.log('图片过大不支持上传')
      } else {
        this.imgPreview(file);
        // console.log('OK: ' + imgSize)
        //发送成功后读取一次信息
        this.getRead();
      }
    },

    // 获取图片
    imgPreview(file, callback) {
      let _this = this; // this指向问题，所以在外面先定义
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      // 判断是否支持FileReader
      if (!file || !window.FileReader) return;
      // 创建一个reader
      var reader = new FileReader();
      // 将图片转成base64格式
      reader.readAsDataURL(file);
      // console.log(file)
      // console.log(_this)
      reader.onloadend = function () {
        let result = this.result;
        let img = new Image();
        img.src = result;
        // console.log('============未压缩图片===========')
        // console.log(img)
        // console.log(result)
        // console.log(result.length)

        img.onload = function () {
          let data = _this.compress(img);
          // console.log(data.length)
          // console.log(data)
          // _this.headerImage = data
          _this.imgUrl = result;

          let blob = _this.dataURItoBlob(data);

          // console.log('*******base64转blob对象******')
          // console.log(blob)

          let param = new FormData(); // 创建form对象
          param.append("file", blob, file.name); // 通过append向form对象添加数据
          // console.log('"********将blob对象转成formData对象********"')
          // console.log(param.get('file'))
          // param.append('type', '1') // 添加form表单中其他数据
          // Indicator.open()
          // console.log(_this.imgUrl)
          // console.log(file)
          // 这里调取上传图片接口
          // let form = _this.JSON.stringify({
          //   uploadFile: data
          // })
          // console.log(param.get('file'))
          apiUploadImg(param, config).then((res) => {
            // this.bankCardList.image = res.Data.Url
            // this.editData.image = res.Data.Url
            if (res.Success) {
              _this.sendData.messageType = 2;
              _this.sendData.content = res.Data.Url;

              // 图片讯息发送
              apiSend(_this.sendData, true).then((res) => {
                if (res.success) {
                  apiRead(_this.orderDetailsData, true).then((res) => {
                    if (_this.readList.length === res.result.length) {
                    } else {
                      _this.readList = res.result;
                    }
                  });
                }
              });
            } else {
              Toast({
                message: res.Msg,
                iconClass:
                  "mint-toast-icon mintui mintui-field-error icon-black",
                duration: 3000,
              });
              return;
            }
          });
        };
      };
    },
    // 压缩图片
    compress(img) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      // let initSize = img.src.length
      let width = img.width;
      let height = img.height;
      canvas.width = width;
      canvas.height = height;
      // 铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);

      // 进行最小压缩
      let ndata = canvas.toDataURL("image/jpeg", 0.1);
      // console.log('*******压缩后的图片大小*******')
      // console.log(ndata)
      // console.log(ndata.length)
      return ndata;
    },
    dataURItoBlob(base64Data) {
      var byteString;
      if (base64Data.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(base64Data.split(",")[1]);
      else byteString = unescape(base64Data.split(",")[1]);
      var mimeString = base64Data.split(",")[0].split(":")[1].split(";")[0];
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: mimeString });
    },
    // 删除事件
    delImg() {
      this.imgUrl = null;
    },
  },
  destroyed() {
    clearTimeout(this.timerFn);
  },
   
};
</script>

<style lang="scss" src="./OrderDetail.scss" scoped>
</style>
