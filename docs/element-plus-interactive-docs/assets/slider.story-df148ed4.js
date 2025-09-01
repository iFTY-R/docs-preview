import { ax as defineComponent, aY as reactive, aQ as computed, bg as watch, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aX as normalizeStyle, bs as unref, aW as createCommentVNode, aI as createBaseVNode } from "./vendor-bdcf0029.js";
import { u as useElDisplay } from "./useEl-0078f831.js";
import { s as sizeOptions } from "./sizeOptions-57bd3279.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const placementOptions = [
  { label: "top", value: "top" },
  { label: "top-start", value: "top-start" },
  { label: "top-end", value: "top-end" },
  { label: "right", value: "right" },
  { label: "right-start", value: "right-start" },
  { label: "right-end", value: "right-end" },
  { label: "bottom", value: "bottom" },
  { label: "bottom-start", value: "bottom-start" },
  { label: "bottom-end", value: "bottom-end" },
  { label: "left", value: "left" },
  { label: "left-start", value: "left-start" },
  { label: "left-end", value: "left-end" }
];
const slider_story_vue_vue_type_style_index_0_scoped_cdd75735_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "slider.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      value: 0,
      max: 10,
      min: 0,
      step: 1,
      disabled: false,
      showInputControls: true,
      showInput: false,
      size: "default",
      inputSize: "default",
      showStops: false,
      showTooltip: true,
      vertical: false,
      height: 200,
      debounce: 300,
      placement: "top",
      range: false
    });
    const basicSource = computed(() => {
      return `<script setup lang="ts">
import { ref } from 'vue'
const value = ref(${basicData.range ? "[0, 5]" : 0})
<\/script>

<el-slider
  v-model="value"${isAttribute(
        basicData.max !== 100,
        `:max="${basicData.max}"`
      )}${isAttribute(
        basicData.min !== 0,
        `:min="${basicData.min}"`
      )}${isAttribute(
        basicData.step !== 1,
        `step="${basicData.step}"`
      )}${isAttribute(
        basicData.disabled,
        "disabled"
      )}${isAttribute(
        !basicData.showInputControls && basicData.showInput,
        ':show-input-controls="false"'
      )}${isAttribute(
        basicData.showInput && !basicData.range,
        "show-input"
      )}${isAttribute(
        basicData.size !== "default",
        `size="${basicData.size}"`
      )}${isAttribute(
        basicData.inputSize !== "default",
        `input-size="${basicData.inputSize}"`
      )}${isAttribute(
        basicData.showStops,
        `:show-stops="${basicData.showStops}"`
      )}${isAttribute(
        !basicData.showTooltip,
        ':show-tooltip="false"'
      )}${isAttribute(
        basicData.vertical,
        "vertical"
      )}${isAttribute(
        Boolean(basicData.height) && basicData.vertical,
        `:height="${basicData.height}"`
      )}${isAttribute(
        basicData.debounce !== 300,
        `:debounce="${basicData.debounce}"`
      )}${isAttribute(
        basicData.placement !== "top",
        `placement="${basicData.placement}"`
      )}${isAttribute(
        basicData.range,
        "range"
      )}
>`;
    });
    watch(
      () => basicData.step,
      (val) => {
        if (val < 1)
          basicData.step = 1;
      }
    );
    watch(
      () => basicData.range,
      (val) => {
        if (val)
          basicData.value = [basicData.min + 1, basicData.max - 1];
      }
    );
    const __returned__ = { basicData, basicSource, get placementOptions() {
      return placementOptions;
    }, get sizeOptions() {
      return sizeOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "slider-container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_slider = resolveComponent("el-slider");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Slider",
    icon: "uil:slider-h",
    layout: {
      type: "grid",
      width: $setup.basicData.showInput ? 400 : 320
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.max,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.max = $event),
            title: "Max"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.min,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.min = $event),
            title: "Min"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.range,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.range = $event),
            title: "Range"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.showInput,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.showInput = $event),
            title: "Show Input",
            style: normalizeStyle(unref(useElDisplay)(!$setup.basicData.range))
          }, null, 8, ["modelValue", "style"]),
          $setup.basicData.showInput ? (openBlock(), createBlock(_component_HstCheckbox, {
            key: 0,
            modelValue: $setup.basicData.showInputControls,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.showInputControls = $event),
            title: "Show World Limit",
            style: normalizeStyle(unref(useElDisplay)(!$setup.basicData.range))
          }, null, 8, ["modelValue", "style"])) : createCommentVNode("v-if", true),
          $setup.basicData.showInput ? (openBlock(), createBlock(_component_HstButtonGroup, {
            key: 1,
            modelValue: $setup.basicData.inputSize,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.inputSize = $event),
            title: "input-size",
            options: $setup.sizeOptions,
            style: normalizeStyle(unref(useElDisplay)(!$setup.basicData.range))
          }, null, 8, ["modelValue", "options", "style"])) : createCommentVNode("v-if", true),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.disabled,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicData.disabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.step,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.basicData.step = $event),
            title: "Step"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.showStops,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.basicData.showStops = $event),
            title: "Show Stops"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.vertical,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.basicData.vertical = $event),
            title: "Vertical"
          }, null, 8, ["modelValue"]),
          $setup.basicData.vertical ? (openBlock(), createBlock(_component_HstNumber, {
            key: 2,
            modelValue: $setup.basicData.height,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.basicData.height = $event),
            title: "Height"
          }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
          !$setup.basicData.vertical ? (openBlock(), createBlock(_component_HstButtonGroup, {
            key: 3,
            modelValue: $setup.basicData.size,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.basicData.size = $event),
            title: "Size",
            options: $setup.sizeOptions
          }, null, 8, ["modelValue", "options"])) : createCommentVNode("v-if", true),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.showTooltip,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.basicData.showTooltip = $event),
            title: "Show Tooltip"
          }, null, 8, ["modelValue"]),
          $setup.basicData.showTooltip ? (openBlock(), createBlock(_component_HstSelect, {
            key: 4,
            modelValue: $setup.basicData.placement,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.basicData.placement = $event),
            title: "Placement",
            options: $setup.placementOptions
          }, null, 8, ["modelValue", "options"])) : createCommentVNode("v-if", true),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.debounce,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.basicData.debounce = $event),
            title: "Debounce"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_el_slider, {
              modelValue: $setup.basicData.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.value = $event),
              max: $setup.basicData.max,
              min: $setup.basicData.min,
              disabled: $setup.basicData.disabled,
              "show-input-controls": $setup.basicData.showInputControls,
              "show-input": $setup.basicData.showInput,
              step: $setup.basicData.step,
              size: $setup.basicData.size,
              "input-size": $setup.basicData.inputSize,
              "show-stops": $setup.basicData.showStops,
              "show-tooltip": $setup.basicData.showTooltip,
              vertical: $setup.basicData.vertical,
              height: `${$setup.basicData.height}px`,
              debounce: $setup.basicData.debounce,
              placement: $setup.basicData.placement,
              range: $setup.basicData.range
            }, null, 8, ["modelValue", "max", "min", "disabled", "show-input-controls", "show-input", "step", "size", "input-size", "show-stops", "show-tooltip", "vertical", "height", "debounce", "placement", "range"])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["layout"]);
}
_sfc_main.__file = "src/components/Form/Slider/slider.story.vue";
const slider_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cdd75735"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/Slider/slider.story.vue"]]);
export {
  slider_story as default
};
