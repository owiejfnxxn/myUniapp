"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_layout2 = common_vendor.resolveComponent("layout");
  _easycom_layout2();
}
const _easycom_layout = () => "../../components/layout/layout.js";
if (!Math) {
  _easycom_layout();
}
const _sfc_main = {
  __name: "demo1",
  setup(__props) {
    common_vendor.index.hideTabBarRedDot({
      index: 2
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
wx.createPage(_sfc_main);
