<template src="./AddWeChatPay.html"></template>

<script>
import HeaderNav from "../../components/HeaderNav.vue";
import NumericKeypad from "../../components/NumericKeypad.vue";
import { apiUploadImg, apiInsert } from "@/api";
import { Toast } from "mint-ui";

export default {
  components: {
    HeaderNav,
    NumericKeypad
  },
  data() {
    return {
      addWeChatPayData: [
        { listName: "姓名", placeholder: "请输入姓名", value: "" },
        { listName: "微信帐号", placeholder: "请输入微信帐号", value: "" },
        // { listName: "安全码", placeholder: "请输入安全码", value: "" },
      ],
      form: {
        imgURL: "",
        img: "",
      },
      insertData: {
        name: "",
        bankName: "",
        no: "",
        image: "",
        type: 3,
        safeCode: "",
      },
      safeCode: "",
      // test:''
    };
  },
  methods: {
    // 图片上传功能
    tirggerFile(event) {
      let file = event.target.files[0];
      let imgSize = file.size;
      // let reader = new FileReader()
      var param = new FormData(); // 创建form对象
      param.append("file", file, file.name); // 通过append向form对象添加数据
      param.append("type", "1"); // 添加form表单中其他数据
      // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      // reader.readAsDataURL(event.target.files[0])
      if (!event.target.files.length) return;
      if (imgSize / 1024 > 10000) {
        // console.log('图片过大不支持上传')
      } else {
        this.imgPreview(file);
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
      reader.onloadend = function () {
        let result = this.result;
        let img = new Image();
        img.src = result;
        // console.log('============未压缩图片===========')

        img.onload = function () {
          let data = _this.compress(img);
          _this.imgUrl = result;

          let blob = _this.dataURItoBlob(data);

          // console.log('*******base64转blob对象******')

          let param = new FormData(); // 创建form对象
          param.append("file", blob, file.name); // 通过append向form对象添加数据
          // console.log('"********将blob对象转成formData对象********"')

          // 这里调取上传图片接口
          // let form = _this.JSON.stringify({
          //   uploadFile: data
          // })
          apiUploadImg(param, config).then((res) => {
            if (res.Success === false) {
              Toast({
                message: res.Msg,
                iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
                duration: 3000,
              });
              return;
            }
            _this.form.imgURL = res.Data.Url;
            _this.insertData.image = res.Data.Url;
          });
        };
      };
    },
    // 压缩图片
    compress(img) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      // let initSize = img.src.length
      //let width = img.width;
      //let height = img.height;
      var originWidth = img.width;
      var originHeight = img.height;
      // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
      var maxWidth = 320,
        maxHeight = 320;
      // 目标尺寸
      var targetWidth = originWidth,
        targetHeight = originHeight;
      // 图片尺寸超过最大尺寸的限制
      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > maxWidth / maxHeight) {
          // 更宽，按照宽度限定尺寸
          targetWidth = maxWidth;
          targetHeight = Math.round(maxWidth * (originHeight / originWidth));
        } else {
          targetHeight = maxHeight;
          targetWidth = Math.round(maxHeight * (originWidth / originHeight));
        }
      }

      // canvas对图片进行缩放
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      // 铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      // 进行最小压缩
      let ndata = canvas.toDataURL("image/jpeg", 0.5);
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

    submit() {
      this.insertData.name = this.addWeChatPayData[0].value;
      this.insertData.no = this.addWeChatPayData[1].value;
      this.insertData.safeCode = this.safeCode;

      // console.log(this.insertData)
      if (this.insertData.name === "") {
        Toast({
          message: "请输入姓名",
          iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
          duration: 2000,
        });
        return;
      }
      if (this.insertData.no === "") {
        Toast({
          message: "请输入微信账号",
          iconClass: "mint-toast-icon mintui mintui-field-error icon-black",
          duration: 2000,
        });
        return;
      }
      if (this.insertData.image === "") {
        Toast({
          message: "请上传微信收款二维码",
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
              iconClass: "icon-success",
              duration: 2000,
            });
            this.backrouter();
            setTimeout(() => {
              var backurl = this.$storage.session.get("backurl");
              if (backurl != "") {
                this.$storage.session.set("backurl", "");
                this.$router.push({ name: backurl });
                return;
              }
              this.$router.push({ name: "SetCollectionPage" });
            }, 2000);
          }
        });
      }
    },
    safepwd (v) {
      this.safeCode = v
    },
    backrouter() {
      setTimeout(() => {
        var backurl = this.$storage.session.get("backurl");
        if (backurl != null) {
          this.$storage.session.set("backurl", null);
          this.$router.push({ name: backurl });
          return;
        }
        this.$router.push({ name: "SetCollectionPage" });
      }, 2000);
    }
  },
};
</script>

<style lang="scss" src="./AddWeChatPay.scss" scoped></style>
