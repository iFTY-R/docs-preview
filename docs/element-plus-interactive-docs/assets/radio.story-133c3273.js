import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode, aK as logEvent } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>radio usage</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radio.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const radio = ref("1");
    const isDisabled = ref(true);
    const isBorder = ref(true);
    const currentSize = ref("large");
    const radioSizeList = [
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
    function radioChange(e) {
      logEvent("change", e);
    }
    const __returned__ = { radio, isDisabled, isBorder, currentSize, radioSizeList, radioChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_radio = resolveComponent("el-radio");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_el_radio_button = resolveComponent("el-radio-button");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Radio",
    icon: "material-symbols:radio-button-checked-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.radio = $event),
            title: "Radio",
            options: [{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentSize,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.currentSize = $event),
            title: "Size",
            options: $setup.radioSizeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_radio, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.radio = $event),
            size: $setup.currentSize,
            label: "1"
          }, {
            default: withCtx(() => [
              createTextVNode(" Option 1 ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "size"]),
          createVNode(_component_el_radio, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.radio = $event),
            size: $setup.currentSize,
            label: "2"
          }, {
            default: withCtx(() => [
              createTextVNode(" Option 2 ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isDisabled,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_radio, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.radio = $event),
            size: $setup.currentSize,
            disabled: $setup.isDisabled,
            label: "1"
          }, {
            default: withCtx(() => [
              createTextVNode(" Option 1 ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "size", "disabled"]),
          createVNode(_component_el_radio, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.radio = $event),
            size: $setup.currentSize,
            disabled: $setup.isDisabled,
            label: "2"
          }, {
            default: withCtx(() => [
              createTextVNode(" Option 2 ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "size", "disabled"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Group" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.radio = $event),
            title: "Radio",
            options: [{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_radio_group, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.radio = $event),
            onChange: $setup.radioChange
          }, {
            default: withCtx(() => [
              createVNode(_component_el_radio, { label: "1" }, {
                default: withCtx(() => [
                  createTextVNode(" Option 1 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_radio, { label: "2" }, {
                default: withCtx(() => [
                  createTextVNode(" Option 2 ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Button style" }, {
        default: withCtx(() => [
          createVNode(_component_el_radio_group, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.radio = $event)
          }, {
            default: withCtx(() => [
              createVNode(_component_el_radio_button, { label: "1" }, {
                default: withCtx(() => [
                  createTextVNode(" Option 1 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_radio_button, { label: "2" }, {
                default: withCtx(() => [
                  createTextVNode(" Option 2 ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With borders" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isBorder,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.isBorder = $event),
            title: "Border"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.radio = $event),
            title: "Radio",
            options: [{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentSize,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.currentSize = $event),
            title: "Size",
            options: $setup.radioSizeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_radio_group, {
            modelValue: $setup.radio,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.radio = $event)
          }, {
            default: withCtx(() => [
              createVNode(_component_el_radio, {
                label: "1",
                size: $setup.currentSize,
                border: $setup.isBorder
              }, {
                default: withCtx(() => [
                  createTextVNode(" Option 1 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["size", "border"]),
              createVNode(_component_el_radio, {
                label: "2",
                size: $setup.currentSize,
                border: $setup.isBorder
              }, {
                default: withCtx(() => [
                  createTextVNode(" Option 2 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["size", "border"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
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
_sfc_main.__file = "src/components/Form/radio.story.vue";
const radio_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/radio.story.vue"]]);
export {
  radio_story as default
};
