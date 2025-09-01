import { ax as defineComponent, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aI as createBaseVNode, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const __default__ = {
  name: "HstColor",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    content: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_divider = resolveComponent("el-divider");
  return openBlock(), createBlock(_component_el_divider, {
    "border-style": "dotted",
    "content-position": "left"
  }, {
    default: withCtx(() => [
      createBaseVNode(
        "span",
        null,
        toDisplayString($setup.props.content),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/controls-components/HstDivider.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/controls-components/HstDivider.vue"]]);
export {
  __unplugin_components_1 as _
};
