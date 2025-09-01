import { ax as defineComponent, ay as ref, aY as reactive, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aW as createCommentVNode, aD as createVNode, aI as createBaseVNode, aK as logEvent } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>Set <code>layout</code> with different pagination elements you wish to display spearated with a comma.\nPagination elements are: <code>prev</code> (a button navigating to the previous page), <code>next</code> (a button navigating to the next page), <code>pager</code> (page list), <code>jumper</code> (a jump-to input), <code>total</code> (total item count), <code>size</code> (a select to determine page size) and <code>-&gt;</code>(every element after this symbol will be pulled to the right).</p>\n<h2 id="number-of-pagers" tabindex="-1">Number of pagers <a class="header-anchor" href="#number-of-pagers" aria-hidden="true">#</a></h2>\n<p>By default, Pagination collapses extra pager buttons when it has more than 7 pages. This can be configured with the <code>pager-count</code> attribute.</p>\n<h2 id="buttons-with-background-color" tabindex="-1">Buttons with background color <a class="header-anchor" href="#buttons-with-background-color" aria-hidden="true">#</a></h2>\n<p>Set the <code>background</code> attribute and the buttons will hava a background color.</p>\n<h2 id="small-pagination" tabindex="-1">Small Pagination <a class="header-anchor" href="#small-pagination" aria-hidden="true">#</a></h2>\n<p>Use small pagination in the case of limited space.\nJust set the <code>small</code> attribute to <code>true</code> and the Pagination becomes smaller.</p>\n<h2 id="hide-pagination-when-there-is-only-one-page" tabindex="-1">Hide pagination when there is only one page <a class="header-anchor" href="#hide-pagination-when-there-is-only-one-page" aria-hidden="true">#</a></h2>\n<p>When there is only one page, hide the pagination by setting the <code>hide-on-single-page</code> attribute.</p>\n<h2 id="more-elements" tabindex="-1">More elements <a class="header-anchor" href="#more-elements" aria-hidden="true">#</a></h2>\n<p>Add more modules based on your scenario.</p>\n<p>This example is a complete use case.\nIt uses <code>size-change</code> and <code>current-change</code> event to handle page size changes and current page changes.\n<code>page-sizes</code> accepts an array of integers, each of which represents a different page size in the <code>sizes</code> select options, e.g. <code>[100, 200, 300, 400]</code> indicates that the select will have four options: 100, 200, 300 or 400 items per page.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pagination.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicTotalA = ref(50);
    const basicTotalB = ref(1e3);
    const numberOfPagerCase = reactive({
      pageSize: 20,
      pageCount: 9,
      total: 800
    });
    const buttonWithBackgroundColorCase = reactive({
      backgroud: true,
      total: 1e3
    });
    const smallPaginationCase = reactive({
      background: true,
      small: true,
      total: 50
    });
    const hideOnSinglePaginationCase = reactive({
      hide: false,
      total: 5
    });
    const commonSmall = ref(false);
    const commonBackground = ref(false);
    const commonDisabled = ref(false);
    const totalItemCountCase = reactive({
      currentPage: 5,
      pageSize: 100,
      total: 1e3
    });
    const changePageSizeCase = reactive({
      currentPage: 5,
      pageSize: 100,
      pageSizes: [100, 200, 300, 400],
      total: 1e3
    });
    const jumpToCase = reactive({
      currentPage: 5,
      pageSize: 100,
      total: 1e3
    });
    const allCombinedCase = reactive({
      currentPage: 4,
      pageSize: 100,
      pageSizes: [100, 200, 300, 400],
      total: 400
    });
    function handleSizeChange(val) {
      logEvent("per page items: ", { perPageItemCount: val });
    }
    function handleCurrentChange(val) {
      logEvent("current page: ", { currentPage: val });
    }
    const __returned__ = { basicTotalA, basicTotalB, numberOfPagerCase, buttonWithBackgroundColorCase, smallPaginationCase, hideOnSinglePaginationCase, commonSmall, commonBackground, commonDisabled, totalItemCountCase, changePageSizeCase, jumpToCase, allCombinedCase, handleSizeChange, handleCurrentChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  " When you have few pages ",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  " When you have more than 7 pages ",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  "Buttons without background color",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  "Buttons with background color",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  "Whether hide",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_12 = { class: "my-4" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "mb-2" },
  " Total item count ",
  -1
  /* HOISTED */
);
const _hoisted_14 = { class: "my-4" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "mb-2" },
  " Change page size ",
  -1
  /* HOISTED */
);
const _hoisted_16 = { class: "my-4" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "mb-2" },
  " Jump to ",
  -1
  /* HOISTED */
);
const _hoisted_18 = { class: "my-4" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "mb-2" },
  " All combined ",
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_pagination = resolveComponent("el-pagination");
  const _component_el_divider = resolveComponent("el-divider");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Pagination",
    icon: "fluent:dual-screen-pagination-20-regular",
    layout: { type: "grid", width: 550 }
  }, {
    default: withCtx(() => [
      createCommentVNode(" Basic Usage Variant "),
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicTotalA,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicTotalA = $event),
            title: "BasicTotalA"
          }, null, 8, ["modelValue"]),
          _hoisted_3,
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicTotalB,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicTotalB = $event),
            title: "BasicTotalB"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", null, [
            _hoisted_1,
            createVNode(_component_el_pagination, {
              layout: "prev, pager, next",
              total: $setup.basicTotalA
            }, null, 8, ["total"])
          ]),
          createVNode(_component_el_divider),
          createBaseVNode("div", null, [
            _hoisted_2,
            createVNode(_component_el_pagination, {
              layout: "prev, pager, next",
              total: $setup.basicTotalB
            }, null, 8, ["total"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createCommentVNode(" Number of pagers Variant "),
      createVNode(_component_Variant, { title: "Number of pagers" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.numberOfPagerCase.pageSize,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.numberOfPagerCase.pageSize = $event),
            title: "PageSize"
          }, null, 8, ["modelValue"]),
          _hoisted_4,
          createVNode(_component_HstNumber, {
            modelValue: $setup.numberOfPagerCase.pageCount,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.numberOfPagerCase.pageCount = $event),
            title: "PageCount"
          }, null, 8, ["modelValue"]),
          _hoisted_5,
          createVNode(_component_HstNumber, {
            modelValue: $setup.numberOfPagerCase.total,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.numberOfPagerCase.total = $event),
            title: "Total"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_pagination, {
            layout: "prev, pager, next",
            "page-size": $setup.numberOfPagerCase.pageSize,
            "pager-count": $setup.numberOfPagerCase.pageCount,
            total: $setup.numberOfPagerCase.total
          }, null, 8, ["page-size", "pager-count", "total"])
        ]),
        _: 1
        /* STABLE */
      }),
      createCommentVNode(" Buttons with background color Variant "),
      createVNode(_component_Variant, { title: "Buttons with background color" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.buttonWithBackgroundColorCase.backgroud,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.buttonWithBackgroundColorCase.backgroud = $event),
            title: "With background Color"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_pagination, {
            layout: "prev, pager, next",
            background: $setup.buttonWithBackgroundColorCase.backgroud,
            total: $setup.buttonWithBackgroundColorCase.total
          }, null, 8, ["background", "total"])
        ]),
        _: 1
        /* STABLE */
      }),
      createCommentVNode(" Small Pagination Variant "),
      createVNode(_component_Variant, { title: "Small Pagination" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.smallPaginationCase.small,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.smallPaginationCase.small = $event),
            title: "Small Pagination"
          }, null, 8, ["modelValue"]),
          _hoisted_9,
          createVNode(_component_HstNumber, {
            modelValue: $setup.smallPaginationCase.total,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.smallPaginationCase.total = $event),
            title: "Total"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", null, [
            _hoisted_6,
            createVNode(_component_el_pagination, {
              layout: "prev, pager, next",
              small: $setup.smallPaginationCase.small,
              total: $setup.smallPaginationCase.total
            }, null, 8, ["small", "total"])
          ]),
          _hoisted_7,
          createBaseVNode("div", null, [
            _hoisted_8,
            createVNode(_component_el_pagination, {
              layout: "prev, pager, next",
              background: $setup.smallPaginationCase.background,
              small: $setup.smallPaginationCase.small,
              total: $setup.smallPaginationCase.total
            }, null, 8, ["background", "small", "total"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createCommentVNode(" Hide pagination when there is only one page Variant "),
      createVNode(_component_Variant, { title: "Hide pagination when there is only one page" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.hideOnSinglePaginationCase.hide,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.hideOnSinglePaginationCase.hide = $event),
            title: "Whether hide"
          }, null, 8, ["modelValue"]),
          _hoisted_11
        ]),
        default: withCtx(() => [
          createBaseVNode("div", null, [
            _hoisted_10,
            createVNode(_component_el_pagination, {
              layout: "prev, pager, next",
              "hide-on-single-page": $setup.hideOnSinglePaginationCase.hide,
              total: $setup.hideOnSinglePaginationCase.total
            }, null, 8, ["hide-on-single-page", "total"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createCommentVNode(" More Elements Variant "),
      createVNode(_component_Variant, { title: "More Elements" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.commonSmall,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.commonSmall = $event),
            title: "Small"
          }, null, 8, ["modelValue"]),
          _hoisted_20,
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.commonBackground,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.commonBackground = $event),
            title: "Background color"
          }, null, 8, ["modelValue"]),
          _hoisted_21,
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.commonDisabled,
            "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.commonDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          _hoisted_22
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_12, [
            _hoisted_13,
            createVNode(_component_el_pagination, {
              currentPage: $setup.totalItemCountCase.currentPage,
              "onUpdate:currentPage": _cache[9] || (_cache[9] = ($event) => $setup.totalItemCountCase.currentPage = $event),
              layout: "total, prev, pager, next",
              "page-size": $setup.totalItemCountCase.pageSize,
              small: $setup.commonSmall,
              disabled: $setup.commonDisabled,
              background: $setup.commonBackground,
              total: $setup.totalItemCountCase.total,
              onSizeChange: $setup.handleSizeChange,
              onCurrentChange: $setup.handleCurrentChange
            }, null, 8, ["currentPage", "page-size", "small", "disabled", "background", "total"])
          ]),
          createVNode(_component_el_divider),
          createBaseVNode("div", _hoisted_14, [
            _hoisted_15,
            createVNode(_component_el_pagination, {
              "current-page": $setup.changePageSizeCase.currentPage,
              "onUpdate:currentPage": _cache[10] || (_cache[10] = ($event) => $setup.changePageSizeCase.currentPage = $event),
              "page-size": $setup.changePageSizeCase.pageSize,
              "onUpdate:pageSize": _cache[11] || (_cache[11] = ($event) => $setup.changePageSizeCase.pageSize = $event),
              layout: "sizes, prev, pager, next",
              "page-sizes": $setup.changePageSizeCase.pageSizes,
              small: $setup.commonSmall,
              disabled: $setup.commonDisabled,
              background: $setup.commonBackground,
              total: $setup.changePageSizeCase.total,
              onSizeChange: $setup.handleSizeChange,
              onCurrentChange: $setup.handleCurrentChange
            }, null, 8, ["current-page", "page-size", "page-sizes", "small", "disabled", "background", "total"])
          ]),
          createVNode(_component_el_divider),
          createBaseVNode("div", _hoisted_16, [
            _hoisted_17,
            createVNode(_component_el_pagination, {
              "current-page": $setup.jumpToCase.currentPage,
              "onUpdate:currentPage": _cache[12] || (_cache[12] = ($event) => $setup.jumpToCase.currentPage = $event),
              "page-size": $setup.jumpToCase.pageSize,
              "onUpdate:pageSize": _cache[13] || (_cache[13] = ($event) => $setup.jumpToCase.pageSize = $event),
              layout: "prev, pager, next, jumper",
              small: $setup.commonSmall,
              disabled: $setup.commonDisabled,
              background: $setup.commonBackground,
              total: $setup.jumpToCase.total,
              onSizeChange: $setup.handleSizeChange,
              onCurrentChange: $setup.handleCurrentChange
            }, null, 8, ["current-page", "page-size", "small", "disabled", "background", "total"])
          ]),
          createVNode(_component_el_divider),
          createBaseVNode("div", _hoisted_18, [
            _hoisted_19,
            createVNode(_component_el_pagination, {
              "current-page": $setup.allCombinedCase.currentPage,
              "onUpdate:currentPage": _cache[14] || (_cache[14] = ($event) => $setup.allCombinedCase.currentPage = $event),
              "page-size": $setup.allCombinedCase.pageSize,
              "onUpdate:pageSize": _cache[15] || (_cache[15] = ($event) => $setup.allCombinedCase.pageSize = $event),
              layout: "total, sizes, prev, pager, next, jumper",
              "page-sizes": $setup.allCombinedCase.pageSizes,
              small: $setup.commonSmall,
              disabled: $setup.commonDisabled,
              background: $setup.commonBackground,
              total: $setup.allCombinedCase.total,
              onSizeChange: $setup.handleSizeChange,
              onCurrentChange: $setup.handleCurrentChange
            }, null, 8, ["current-page", "page-size", "page-sizes", "small", "disabled", "background", "total"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/components/Data/pagination.story.vue";
const pagination_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/pagination.story.vue"]]);
export {
  pagination_story as default
};
