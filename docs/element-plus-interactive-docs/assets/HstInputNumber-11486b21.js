import { ax as defineComponent, aQ as computed, az as resolveComponent, aA as openBlock, aE as createElementBlock, aI as createBaseVNode, aP as toDisplayString, aD as createVNode } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const HstInputNumber_vue_vue_type_style_index_0_scoped_dafa3705_lang = "";
const __default__ = {
  name: "HstInputNumber",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    title: { type: String, required: false },
    modelValue: { type: Number, required: true },
    min: { type: Number, required: false },
    max: { type: Number, required: false }
  },
  emits: {
    "update:modelValue": (newValue) => true
  },
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const NumberValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const __returned__ = { props, emit, NumberValue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "title" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input_number = resolveComponent("el-input-number");
  return openBlock(), createElementBlock("label", _hoisted_1, [
    createBaseVNode(
      "span",
      _hoisted_2,
      toDisplayString($props.title),
      1
      /* TEXT */
    ),
    createVNode(_component_el_input_number, {
      modelValue: $setup.NumberValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.NumberValue = $event),
      min: $props.min,
      max: $props.max,
      size: "small"
    }, null, 8, ["modelValue", "min", "max"])
  ]);
}
_sfc_main.__file = "src/controls-components/HstInputNumber.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dafa3705"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/controls-components/HstInputNumber.vue"]]);
export {
  __unplugin_components_0 as _
};
