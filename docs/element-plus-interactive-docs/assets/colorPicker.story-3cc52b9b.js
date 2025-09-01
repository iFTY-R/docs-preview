import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aK as logEvent } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>ColorPicker requires a string typed variable to be bound to v-model.</p>\n<h2 id="alpha" tabindex="-1">Alpha <a class="header-anchor" href="#alpha" aria-hidden="true">#</a></h2>\n<p>ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the <code>show-alpha</code> attribute.</p>\n<h2 id="predefined-colors" tabindex="-1">Predefined colors <a class="header-anchor" href="#predefined-colors" aria-hidden="true">#</a></h2>\n<p>ColorPicker supports predefined color options</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "colorPicker.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const color = ref("#409EFF");
    const alphaColor = ref("rgba(19, 206, 102, 0.8)");
    const predefine = ref(true);
    const predefineColors = ref([
      "#ff4500",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#409EFF",
      "#c71585",
      "rgba(255, 69, 0, 0.68)",
      "rgb(255, 120, 0)",
      "hsv(51, 100, 98)",
      "hsva(120, 40, 94, 0.5)",
      "hsl(181, 100%, 37%)",
      "hsla(209, 100%, 56%, 0.73)",
      "#c7158577"
    ]);
    const size = ref("default");
    const sizeList = [
      {
        label: "large",
        value: "large"
      },
      {
        label: "default",
        value: "default"
      },
      {
        label: "small",
        value: "small"
      }
    ];
    function handleChange(val) {
      logEvent("change", { color: val });
    }
    function handleActiveChange(val) {
      logEvent("active-change", { color: val });
    }
    const __returned__ = { color, alphaColor, predefine, predefineColors, size, sizeList, handleChange, handleActiveChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_color_picker = resolveComponent("el-color-picker");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/ColorPicker",
    icon: "clarity:color-picker-line"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.size = $event),
            options: $setup.sizeList,
            title: "Size"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_color_picker, {
            modelValue: $setup.color,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.color = $event),
            size: $setup.size,
            onChange: $setup.handleChange,
            onActiveChange: $setup.handleActiveChange
          }, null, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Alpha" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.size = $event),
            options: $setup.sizeList,
            title: "Size"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_color_picker, {
            modelValue: $setup.alphaColor,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.alphaColor = $event),
            size: $setup.size,
            "show-alpha": "",
            onChange: $setup.handleChange,
            onActiveChange: $setup.handleActiveChange
          }, null, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Predefined colors" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.size = $event),
            options: $setup.sizeList,
            title: "Size"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.predefine,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.predefine = $event),
            title: "predefine"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_color_picker, {
            modelValue: $setup.color,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.color = $event),
            size: $setup.size,
            "show-alpha": "",
            predefine: $setup.predefine ? $setup.predefineColors : [],
            onChange: $setup.handleChange,
            onActiveChange: $setup.handleActiveChange
          }, null, 8, ["modelValue", "size", "predefine"])
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
_sfc_main.__file = "src/components/Form/colorPicker.story.vue";
const colorPicker_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/colorPicker.story.vue"]]);
export {
  colorPicker_story as default
};
