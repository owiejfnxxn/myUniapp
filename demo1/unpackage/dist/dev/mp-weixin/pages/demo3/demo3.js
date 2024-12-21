"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_child2 = common_vendor.resolveComponent("child");
  _easycom_child2();
}
const _easycom_child = () => "../../components/child/child.js";
if (!Math) {
  _easycom_child();
}
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log("onLoad函数");
    });
    const color = common_vendor.ref("#ccc");
    const num = common_vendor.ref();
    function onAdd(e) {
      console.log(e);
      color.value = "#" + String(e).substring(3, 6);
    }
    function onChange(e) {
      num.value = e;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onAdd),
        b: common_vendor.o(onChange),
        c: common_vendor.t(num.value),
        d: color.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f557aef1"]]);
wx.createPage(MiniProgramPage);
