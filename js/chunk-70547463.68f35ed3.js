(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70547463"],{1276:function(e,t,n){"use strict";var a=n("d784"),r=n("44e7"),i=n("825a"),s=n("1d80"),c=n("4840"),o=n("8aa5"),u=n("50c4"),l=n("14c3"),h=n("9263"),d=n("d039"),f=[].push,g=Math.min,p=4294967295,v=!d((function(){return!RegExp(p,"y")}));a("split",2,(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=String(s(this)),i=void 0===n?p:n>>>0;if(0===i)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,i);var c,o,u,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,v=new RegExp(e.source,d+"g");while(c=h.call(v,a)){if(o=v.lastIndex,o>g&&(l.push(a.slice(g,c.index)),c.length>1&&c.index<a.length&&f.apply(l,c.slice(1)),u=c[0].length,g=o,l.length>=i))break;v.lastIndex===c.index&&v.lastIndex++}return g===a.length?!u&&v.test("")||l.push(""):l.push(a.slice(g)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,r,n):a.call(String(r),t,n)},function(e,r){var s=n(a,e,this,r,a!==t);if(s.done)return s.value;var h=i(e),d=String(this),f=c(h,RegExp),x=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(v?"y":"g"),b=new f(v?h:"^(?:"+h.source+")",m),y=void 0===r?p:r>>>0;if(0===y)return[];if(0===d.length)return null===l(b,d)?[d]:[];var I=0,N=0,C=[];while(N<d.length){b.lastIndex=v?N:0;var E,k=l(b,v?d:d.slice(N));if(null===k||(E=g(u(b.lastIndex+(v?0:N)),d.length))===I)N=o(d,N,x);else{if(C.push(d.slice(I,N)),C.length===y)return C;for(var A=1;A<=k.length-1;A++)if(C.push(k[A]),C.length===y)return C;N=I=E}}return C.push(d.slice(I)),C}]}),!v)},"14c3":function(e,t,n){var a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"25f0":function(e,t,n){"use strict";var a=n("6eeb"),r=n("825a"),i=n("d039"),s=n("ad6d"),c="toString",o=RegExp.prototype,u=o[c],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),h=u.name!=c;(l||h)&&a(RegExp.prototype,c,(function(){var e=r(this),t=String(e.source),n=e.flags,a=String(void 0===n&&e instanceof RegExp&&!("flags"in o)?s.call(e):n);return"/"+t+"/"+a}),{unsafe:!0})},"44e7":function(e,t,n){var a=n("861d"),r=n("c6b6"),i=n("b622"),s=i("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==r(e))}},"4d63":function(e,t,n){var a=n("83ab"),r=n("da84"),i=n("94ca"),s=n("7156"),c=n("9bf2").f,o=n("241c").f,u=n("44e7"),l=n("ad6d"),h=n("6eeb"),d=n("d039"),f=n("2626"),g=n("b622"),p=g("match"),v=r.RegExp,x=v.prototype,m=/a/g,b=/a/g,y=new v(m)!==m,I=a&&i("RegExp",!y||d((function(){return b[p]=!1,v(m)!=m||v(b)==b||"/a/i"!=v(m,"i")})));if(I){var N=function(e,t){var n=this instanceof N,a=u(e),r=void 0===t;return!n&&a&&e.constructor===N&&r?e:s(y?new v(a&&!r?e.source:e,t):v((a=e instanceof N)?e.source:e,a&&r?l.call(e):t),n?this:x,N)},C=function(e){e in N||c(N,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},E=o(v),k=0;while(E.length>k)C(E[k++]);x.constructor=N,N.prototype=x,h(r,"RegExp",N)}f("RegExp")},5319:function(e,t,n){"use strict";var a=n("d784"),r=n("825a"),i=n("7b0b"),s=n("50c4"),c=n("a691"),o=n("1d80"),u=n("8aa5"),l=n("14c3"),h=Math.max,d=Math.min,f=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,n){return[function(n,a){var r=o(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r,a):t.call(String(r),n,a)},function(e,i){var o=n(t,e,this,i);if(o.done)return o.value;var f=r(e),g=String(this),p="function"===typeof i;p||(i=String(i));var x=f.global;if(x){var m=f.unicode;f.lastIndex=0}var b=[];while(1){var y=l(f,g);if(null===y)break;if(b.push(y),!x)break;var I=String(y[0]);""===I&&(f.lastIndex=u(g,s(f.lastIndex),m))}for(var N="",C=0,E=0;E<b.length;E++){y=b[E];for(var k=String(y[0]),A=h(d(c(y.index),g.length),0),w=[],S=1;S<y.length;S++)w.push(v(y[S]));var R=y.groups;if(p){var $=[k].concat(w,A,g);void 0!==R&&$.push(R);var _=String(i.apply(void 0,$))}else _=a(k,g,A,w,R,i);A>=C&&(N+=g.slice(C,A)+_,C=A+k.length)}return N+g.slice(C)}];function a(e,n,a,r,s,c){var o=a+e.length,u=r.length,l=p;return void 0!==s&&(s=i(s),l=g),t.call(c,l,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,a);case"'":return n.slice(o);case"<":c=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>u){var h=f(l/10);return 0===h?t:h<=u?void 0===r[h-1]?i.charAt(1):r[h-1]+i.charAt(1):t}c=r[l-1]}return void 0===c?"":c}))}}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(e){return function(t){var n=String(a(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},6547:function(e,t,n){var a=n("a691"),r=n("1d80"),i=function(e){return function(t,n){var i,s,c=String(r(t)),o=a(n),u=c.length;return o<0||o>=u?e?"":void 0:(i=c.charCodeAt(o),i<55296||i>56319||o+1===u||(s=c.charCodeAt(o+1))<56320||s>57343?e?c.charAt(o):i:e?c.slice(o,o+2):s-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},6945:function(e,t,n){},7156:function(e,t,n){var a=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var i,s;return r&&"function"==typeof(i=t.constructor)&&i!==n&&a(s=i.prototype)&&s!==n.prototype&&r(e,s),e}},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},9263:function(e,t,n){"use strict";var a=n("ad6d"),r=RegExp.prototype.exec,i=String.prototype.replace,s=r,c=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),o=void 0!==/()??/.exec("")[1],u=c||o;u&&(s=function(e){var t,n,s,u,l=this;return o&&(n=new RegExp("^"+l.source+"$(?!\\s)",a.call(l))),c&&(t=l.lastIndex),s=r.call(l,e),c&&s&&(l.lastIndex=l.global?s.index+s[0].length:t),o&&s&&s.length>1&&i.call(s[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)})),s}),e.exports=s},a9e3:function(e,t,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),s=n("6eeb"),c=n("5135"),o=n("c6b6"),u=n("7156"),l=n("c04e"),h=n("d039"),d=n("7c73"),f=n("241c").f,g=n("06cf").f,p=n("9bf2").f,v=n("58a8").trim,x="Number",m=r[x],b=m.prototype,y=o(d(b))==x,I=function(e){var t,n,a,r,i,s,c,o,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(i=u.slice(2),s=i.length,c=0;c<s;c++)if(o=i.charCodeAt(c),o<48||o>r)return NaN;return parseInt(i,a)}return+u};if(i(x,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var N,C=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof C&&(y?h((function(){b.valueOf.call(n)})):o(n)!=x)?u(new m(I(t)),n,C):I(t)},E=a?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;E.length>k;k++)c(m,N=E[k])&&!c(C,N)&&p(C,N,g(m,N));C.prototype=b,b.constructor=C,s(r,x,C)}},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c330:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["styleOne"==e.headerModule?n("header",{staticClass:"trading-header"},[n("div",{staticClass:"center-icon",on:{click:e.OtherPage}}),n("div",{staticClass:"user-name"},[e._v(e._s(e.userInfo.nickName))])]):e._e(),"styleTwo"==e.headerModule?n("header",{staticClass:"layout-header"},[n("div",{staticClass:"change-nav"},[n("div",{staticClass:"change-nav-btn"},e._l(e.orderData,(function(t,a){return n("div",{class:{"change-buy":0==a,"change-sell":1==a,select:a==e.onChangeIndex},on:{click:function(t){return t.stopPropagation(),e.onChange(a)}}},[e._v(" "+e._s(t.title)+" ")])})),0)])]):e._e(),"styleThree"==e.headerModule?n("header",{staticClass:"Page-header"},["OrderDetail"!=e.matchedName?n("div",{staticClass:"left-arrow",on:{click:e.backPage}}):e._e(),"OrderDetail"==e.matchedName?n("div",{staticClass:"home-icon",on:{click:function(t){return e.home()}}}):e._e(),n("div",{staticClass:"page-title"},[e._v(e._s(e.headerName))]),"MessagePage"==e.matchedName?n("div",{staticClass:"message-filling"}):e._e()]):e._e()])},r=[],i=(n("b0c0"),n("56d7")),s={data:function(){return{userInfo:[],matchedName:"",headerModule:"",headerName:"",onChangeIndex:0,detailData:"",orderData:[{type:0,title:"购买订单"},{type:1,title:"出售订单"}]}},created:function(){this.userInfo=this.$storage.session.get("userInfo"),this.detailData=this.$storage.session.get("detailData"),null!=this.$storage.session.get("onChangeIndex")?this.onChangeIndex=this.$storage.session.get("onChangeIndex"):this.$storage.session.set("onChangeIndex",this.onChangeIndex)},mounted:function(){if(this.matchedName=this.$router.app._route.matched[0].name,"TradingCenter"===this.matchedName||"OtherPage"===this.matchedName)this.headerModule="styleOne";else if("OrderLayout"===this.matchedName)this.headerModule="styleTwo";else switch(this.headerModule="styleThree",this.matchedName){case"TradingSellPage":this.headerName="出售";break;case"TradingBuyPage":this.headerName="购买";break;case"SetCollectionPage":this.headerName="设置收款账号";break;case"AddBankCard":this.headerName="添加银行卡";break;case"bankCard":this.headerName="银行卡";break;case"editAccount":this.editType=this.$storage.session.get("editType"),1===this.editType&&(this.headerName="编辑银行卡"),2===this.editType&&(this.headerName="编辑支付宝"),3===this.editType&&(this.headerName="编辑微信");break;case"AddWeChatPay":this.headerName="添加微信";break;case"weChatPay":this.headerName="微信";break;case"AddAlipay":this.headerName="添加支付宝";break;case"alipay":this.headerName="支付宝";break;case"MessagePage":this.headerName="订单提醒";break;case"OrderDetail":this.headerName="订单详情";break;case"Transactions":this.headerName="财务信息";break}},methods:{messagePage:function(){this.$router.push({name:"MessagePage"})},home:function(){this.$router.push({name:"AllOrder"})},backPage:function(){"SetCollectionPage"===this.$router.currentRoute.name?this.$router.push({name:"OtherPage"}):this.$router.goBack()},OtherPage:function(){this.$router.push({name:"OtherPage"})},onChange:function(e){this.onChangeIndex=e,this.$storage.session.set("onChangeIndex",this.onChangeIndex),i["eventBus"].changeIndex(e+1)}}},c=s,o=(n("ece9"),n("2877")),u=Object(o["a"])(c,a,r,!1,null,"7d4d99a3",null);t["a"]=u.exports},d784:function(e,t,n){"use strict";var a=n("9112"),r=n("6eeb"),i=n("d039"),s=n("b622"),c=n("9263"),o=s("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,h){var d=s(e),f=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),g=f&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!g||"replace"===e&&!u||"split"===e&&!l){var p=/./[d],v=n(d,""[e],(function(e,t,n,a,r){return t.exec===c?f&&!r?{done:!0,value:p.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}})),x=v[0],m=v[1];r(String.prototype,e,x),r(RegExp.prototype,d,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)}),h&&a(RegExp.prototype[d],"sham",!0)}}},ece9:function(e,t,n){"use strict";var a=n("6945"),r=n.n(a);r.a}}]);