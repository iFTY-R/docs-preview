import { ax as defineComponent, aQ as computed, ay as ref, az as resolveComponent, aA as openBlock, aE as createElementBlock, aI as createBaseVNode, aP as toDisplayString, aD as createVNode } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const HstColor_vue_vue_type_style_index_0_scoped_a8bc4313_lang = "";
const __default__ = {
  name: "HstColor",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    title: { type: String, required: false },
    modelValue: { type: String, required: true }
  },
  emits: {
    "update:modelValue": (newValue) => true
  },
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const colorModel = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const predefineColors = ref([
      "#ff4500",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#1e90ff",
      "#c71585",
      "rgb(255, 120, 0)",
      "hsv(51, 100, 98)",
      "hsl(181, 100%, 37%)"
    ]);
    const __returned__ = { props, emit, colorModel, predefineColors };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "title" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_color_picker = resolveComponent("el-color-picker");
  return openBlock(), createElementBlock("label", _hoisted_1, [
    createBaseVNode(
      "span",
      _hoisted_2,
      toDisplayString($props.title),
      1
      /* TEXT */
    ),
    createVNode(_component_el_color_picker, {
      modelValue: $setup.colorModel,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.colorModel = $event),
      size: "small",
      "show-alpha": "",
      predefine: $setup.predefineColors
    }, null, 8, ["modelValue", "predefine"])
  ]);
}
_sfc_main.__file = "src/controls-components/HstColor.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a8bc4313"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/controls-components/HstColor.vue"]]);
export {
  __unplugin_components_2 as _
};
