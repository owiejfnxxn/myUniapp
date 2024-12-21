"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "child",
  emits: ["add", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function onclick() {
      emit("add", Math.random());
    }
    function onInput(e) {
      console.log(e.detail.value);
      emit("change", e.detail.value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onclick),
        b: common_vendor.o(onInput)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e16c615f"]]);
wx.createComponent(Component);
