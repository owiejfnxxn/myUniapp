"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "userInfo",
  props: ["obj"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.obj.avatar,
        b: common_vendor.t(__props.obj.username)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cc45e813"]]);
wx.createComponent(Component);
