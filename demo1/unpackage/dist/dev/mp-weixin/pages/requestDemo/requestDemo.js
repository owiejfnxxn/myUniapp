"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_load_more2 + _easycom_uni_icons2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_load_more + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "requestDemo",
  setup(__props) {
    const arrs = common_vendor.ref([]);
    const toTopStaus = common_vendor.ref(false);
    common_vendor.onPageScroll((e) => {
      if (e.scrollTop > 1e3)
        toTopStaus.value = true;
      else
        toTopStaus.value = false;
    });
    function onFlash() {
      common_vendor.index.startPullDownRefresh();
    }
    function toTop() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
    common_vendor.index.showLoading({});
    common_vendor.onPullDownRefresh(() => {
      arrs.value = [];
      network();
    });
    common_vendor.onReachBottom(() => {
      setTimeout(() => {
        network();
      }, 250);
    });
    const onPreview = function(index) {
      let urls = arrs.value.map((item) => item.url);
      common_vendor.index.previewImage({
        current: index,
        urls
      });
    };
    function network() {
      common_vendor.index.request({
        url: "https://api.thecatapi.com/v1/images/search",
        data: {
          limit: 10
        }
      }).then((res) => {
        arrs.value = [...arrs.value, ...res.data];
      }).finally(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.stopPullDownRefresh();
      });
    }
    network();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(arrs.value, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => onPreview(index), item.id),
            c: common_vendor.t(item.height),
            d: common_vendor.t(item.width),
            e: item.id
          };
        }),
        b: common_vendor.p({
          status: "more"
        }),
        c: common_vendor.p({
          type: "refreshempty",
          size: "30",
          color: "#888"
        }),
        d: common_vendor.o(($event) => onFlash()),
        e: common_vendor.p({
          type: "arrow-up",
          size: "30",
          color: "#888"
        }),
        f: !toTopStaus.value ? 1 : "",
        g: common_vendor.o(($event) => toTop())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e25b1ed9"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
