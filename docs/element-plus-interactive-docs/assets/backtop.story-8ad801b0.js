import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "backtop.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      visibilityHeight: 200,
      right: 40,
      bottom: 40
    });
    const basicSource = computed(() => {
      return `<el-backtop${isAttribute(
        basicData.visibilityHeight !== 200,
        `:visibility-height=${basicData.visibilityHeight}`
      )}${isAttribute(
        basicData.right !== 40,
        `:right=${basicData.right}`
      )}${isAttribute(
        basicData.bottom !== 40,
        `:bottom=${basicData.bottom}`
      )}
/>`;
    });
    const __returned__ = { basicData, basicSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "doc-editor-main",
    style: { "height": "80vh", "overflow": "auto" }
  },
  [
    /* @__PURE__ */ createBaseVNode("h1", { style: { "height": "200vh", "text-align": "center" } }, " Scroll down to see the bottom-right button. ")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_backtop = resolveComponent("el-backtop");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Navigation/Backtop",
    icon: "raphael:arrowup",
    layout: {
      type: "single",
      iframe: false
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.visibilityHeight,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.visibilityHeight = $event),
            title: "visibility-Height"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.right,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.right = $event),
            title: "right"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.bottom,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.bottom = $event),
            title: "bottom"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          _hoisted_1,
          createVNode(_component_el_backtop, {
            target: ".doc-editor-main",
            right: $setup.basicData.right,
            bottom: $setup.basicData.bottom,
            "visibility-height": $setup.basicData.visibilityHeight
          }, null, 8, ["right", "bottom", "visibility-height"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Navigation/Backtop/backtop.story.vue";
const backtop_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Navigation/Backtop/backtop.story.vue"]]);
export {
  backtop_story as default
};
