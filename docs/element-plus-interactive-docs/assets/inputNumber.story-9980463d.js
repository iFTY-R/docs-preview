import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aK as logEvent } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>Bind a variable to v-model in <code>&lt;el-input-number&gt;</code> element and you are set.</p>\n<h2 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h2>\n<p>The <code>disabled</code> attribute accepts a <code>boolean</code>, and if the value is <code>true</code>, the component is disabled. If you just need to control the value within a range, you can add <code>min</code> attribute to set the minimum value and <code>max</code> to set the maximum value. By default, the minimum value is <code>0</code>.</p>\n<h2 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-hidden="true">#</a></h2>\n<p>Allows you to define incremental steps.\nAdd <code>step</code> attribute to set the step.</p>\n<h2 id="step-strictly" tabindex="-1">Step strictly <a class="header-anchor" href="#step-strictly" aria-hidden="true">#</a></h2>\n<p>The <code>step-strictly</code> attribute accepts a <code>boolean</code>. if this attribute is <code>true</code>, input value can only be multiple of step.</p>\n<h2 id="precision" tabindex="-1">Precision <a class="header-anchor" href="#precision" aria-hidden="true">#</a></h2>\n<p>Add <code>precision</code> attribute to set the precision of input value.</p>\n<h2 id="size" tabindex="-1">Size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h2>\n<p>Use attribute <code>size</code> to set additional sizes with <code>large</code> or <code>small</code>.</p>\n<h2 id="controls-position" tabindex="-1">Controls Position <a class="header-anchor" href="#controls-position" aria-hidden="true">#</a></h2>\n<p>Set <code>controls-position</code> to decide the position of control buttons.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "inputNumber.story",
  setup(__props, { expose: __expose }) {
    __expose();
    function handleChange(currentNum, oldNum) {
      return logEvent("Change", { currentNum, oldNum });
    }
    const numBasic = ref(1);
    const minBasic = ref(1);
    const maxBasic = ref(10);
    const numDisabled = ref(1);
    const isDisabled = ref(true);
    const numSteps = ref(1);
    const numStep = ref(2);
    const numStepsStrictly = ref(1);
    const numStepStrictly = ref(true);
    const numPrecision = ref(1);
    const precision = ref(2);
    const numSize = ref(1);
    const size = ref("large");
    const sizeList = ["large", "default", "small"];
    const numControls = ref(1);
    const controlsPosition = ref("right");
    const controlsPositionList = ["right"];
    const __returned__ = { handleChange, numBasic, minBasic, maxBasic, numDisabled, isDisabled, numSteps, numStep, numStepsStrictly, numStepStrictly, numPrecision, precision, numSize, size, sizeList, numControls, controlsPosition, controlsPositionList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_el_space = resolveComponent("el-space");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/InputNumber",
    icon: "fluent-emoji-high-contrast:input-numbers"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.minBasic,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.minBasic = $event),
            title: "min"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.maxBasic,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.maxBasic = $event),
            title: "max"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input_number, {
            modelValue: $setup.numBasic,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.numBasic = $event),
            min: $setup.minBasic,
            max: $setup.maxBasic,
            onChange: $setup.handleChange
          }, null, 8, ["modelValue", "min", "max"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isDisabled,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.isDisabled = $event),
            title: "disabled"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input_number, {
            modelValue: $setup.numDisabled,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.numDisabled = $event),
            disabled: $setup.isDisabled
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Steps" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.numStep,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.numStep = $event),
            title: "step"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input_number, {
            modelValue: $setup.numSteps,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.numSteps = $event),
            step: $setup.numStep
          }, null, 8, ["modelValue", "step"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Step Strictly" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.numStepStrictly,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.numStepStrictly = $event),
            title: "step-strictly"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input_number, {
            modelValue: $setup.numStepsStrictly,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.numStepsStrictly = $event),
            step: 2,
            "step-strictly": $setup.numStepStrictly
          }, null, 8, ["modelValue", "step-strictly"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Precision" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.precision,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.precision = $event),
            title: "precision"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input_number, {
            modelValue: $setup.numPrecision,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.numPrecision = $event),
            precision: $setup.precision,
            step: 0.1,
            max: 10
          }, null, 8, ["modelValue", "precision"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Size" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.size = $event),
            title: "size",
            options: $setup.sizeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input_number, {
            modelValue: $setup.numSize,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.numSize = $event),
            size: $setup.size
          }, null, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Controls Position" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.controlsPosition,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.controlsPosition = $event),
            title: "controls-position",
            options: $setup.controlsPositionList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_space, { direction: "vertical" }, {
            default: withCtx(() => [
              createVNode(_component_el_input_number, {
                modelValue: $setup.numControls,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.numControls = $event),
                min: 1,
                max: 10,
                "controls-position": $setup.controlsPosition,
                controls: "",
                size: "large",
                onChange: $setup.handleChange
              }, null, 8, ["modelValue", "controls-position"]),
              createVNode(_component_el_input_number, {
                modelValue: $setup.numControls,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.numControls = $event),
                class: "mx-4",
                min: 1,
                max: 10,
                controls: "",
                "controls-position": $setup.controlsPosition,
                onChange: $setup.handleChange
              }, null, 8, ["modelValue", "controls-position"]),
              createVNode(_component_el_input_number, {
                modelValue: $setup.numControls,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.numControls = $event),
                min: 1,
                max: 10,
                size: "small",
                "controls-position": $setup.controlsPosition,
                onChange: $setup.handleChange
              }, null, 8, ["modelValue", "controls-position"])
            ]),
            _: 1
            /* STABLE */
          })
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
_sfc_main.__file = "src/components/Form/inputNumber.story.vue";
const inputNumber_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/inputNumber.story.vue"]]);
export {
  inputNumber_story as default
};
