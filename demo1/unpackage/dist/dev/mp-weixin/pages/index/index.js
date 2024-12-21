"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_userInfo2 = common_vendor.resolveComponent("userInfo");
  _easycom_userInfo2();
}
const _easycom_userInfo = () => "../../components/userInfo/userInfo.js";
if (!Math) {
  _easycom_userInfo();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userinfos = common_vendor.ref([
      { username: "张三", avatar: "../../static/2代码.png" },
      { username: "李四", avatar: "../../static/logo.png" }
    ]);
    function goToDemo4() {
      common_vendor.index.navigateTo({
        url: "/pages/demo4/demo4?name=zhangsan&age=18&like=lanqiu"
      });
    }
    function onStop() {
      common_vendor.index.stopPullDownRefresh();
    }
    function onClick() {
      common_vendor.index.showActionSheet({
        itemList: ["大一", "大二", "大三"],
        itemColor: "#ccc",
        success: (res) => {
          console.log(res);
        },
        title: "请选择"
      });
    }
    setTimeout(() => {
      common_vendor.index.setNavigationBarTitle({
        title: "dong ttttt"
      });
      common_vendor.index.hideNavigationBarLoading();
    }, 3e3);
    common_vendor.index.showNavigationBarLoading();
    common_vendor.ref(50);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(userinfos.value, (item, k0, i0) => {
          return {
            a: "70be60ca-0-" + i0,
            b: common_vendor.p({
              obj: item
            })
          };
        }),
        b: common_vendor.o(($event) => onClick()),
        c: common_vendor.o(($event) => onStop()),
        d: common_vendor.o(($event) => goToDemo4())
      };
    };
  }
};
_sfc_main.__runtimeHooks = 1;
wx.createPage(_sfc_main);
