"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo4",
  setup(__props) {
    let arrs = common_vendor.ref([]);
    function back() {
      common_vendor.index.navigateBack();
    }
    common_vendor.onLoad((e) => {
      console.log(e);
    });
    console.log(getCurrentPages());
    common_vendor.index.setStorageSync("key", "value");
    common_vendor.index.getStorageInfoSync("");
    common_vendor.index.request({
      url: "https://jsonplaceholder.typicode.com/posts/1"
    }).then((res) => {
      arrs.value = res.data;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => back()),
        b: common_vendor.f(common_vendor.unref(arrs), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.userId),
            b: common_vendor.t(item.title)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a524b516"]]);
wx.createPage(MiniProgramPage);
