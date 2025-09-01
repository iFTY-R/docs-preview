import { ax as defineComponent, aQ as computed, az as resolveComponent, aA as openBlock, aE as createElementBlock, aI as createBaseVNode, aP as toDisplayString, aD as createVNode, aY as reactive, ay as ref, aB as createBlock, aC as withCtx } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { s as sizeOptions } from "./sizeOptions-57bd3279.js";
import { i as isAttribute } from "./attribute-8f069659.js";
const HstRange_vue_vue_type_style_index_0_scoped_3bc058e8_lang = "";
const __default__ = {
  name: "HstRange",
  inheritAttrs: false
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    title: { type: String, required: false },
    modelValue: { type: Array, required: true },
    min: { type: Number, required: false },
    max: { type: Number, required: false }
  },
  emits: {
    "update:modelValue": (newValue) => true
  },
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const RangeValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const __returned__ = { props, emit, RangeValue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "title" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_slider = resolveComponent("el-slider");
  return openBlock(), createElementBlock("label", _hoisted_1, [
    createBaseVNode(
      "span",
      _hoisted_2,
      toDisplayString($props.title),
      1
      /* TEXT */
    ),
    createVNode(_component_el_slider, {
      modelValue: $setup.RangeValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.RangeValue = $event),
      range: "",
      max: $props.max,
      min: $props.min
    }, null, 8, ["modelValue", "max", "min"])
  ]);
}
_sfc_main$1.__file = "src/controls-components/HstRange.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3bc058e8"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/controls-components/HstRange.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "timePicker.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      value: "",
      arrowControl: false,
      readonly: false,
      editable: true,
      clearable: true,
      disabled: false,
      placeholder: "Arbitrary time",
      size: "default"
    });
    const basicSource = computed(() => {
      return `<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
<\/script>

<el-time-picker
  v-model="value"${isAttribute(
        basicData.arrowControl,
        "arrow-control"
      )}${isAttribute(
        basicData.readonly,
        "readonly"
      )}${isAttribute(
        !basicData.editable,
        ':editable="false"'
      )}${isAttribute(
        !basicData.clearable,
        ':clearable="true"'
      )}${isAttribute(
        basicData.disabled,
        "disabled"
      )}${isAttribute(
        basicData.placeholder !== "",
        `placeholder="${basicData.placeholder}"`
      )}${isAttribute(
        basicData.size !== "default",
        `size="${basicData.size}"`
      )}
/>
`;
    });
    const limitRangeData = reactive({
      value: ""
    });
    function makeRange(rangeList) {
      const result = [];
      const maxNum = rangeList[0] > rangeList[1] ? rangeList[0] : rangeList[1];
      const minNum = rangeList[0] > rangeList[1] ? rangeList[1] : rangeList[0];
      for (let i = minNum; i <= maxNum; i++)
        result.push(i);
      return result;
    }
    const disabledHoursRange = ref([0, 6]);
    function disabledHours() {
      return makeRange(disabledHoursRange.value);
    }
    const disabledMinutesRange = ref([30, 45]);
    function disabledMinutes() {
      return makeRange(disabledMinutesRange.value);
    }
    const disabledSecondsRange = ref([22, 55]);
    function disabledSeconds() {
      return makeRange(disabledSecondsRange.value);
    }
    const limitRangeSource = computed(() => {
      return `<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')

const disabledHours = () => [${makeRange(disabledHoursRange.value)}]
const disabledMinutes = () => [${makeRange(disabledMinutesRange.value)}]
const disabledSeconds = () => [${makeRange(disabledSecondsRange.value)}]
<\/script>

<el-time-picker
  v-model="value"
  :disabled-hours="disabledHours"
  :disabled-minutes="disabledMinutes"
  :disabled-seconds="disabledSeconds"
/>`;
    });
    const arbitraryRangeData = reactive({
      value: "",
      separator: "To",
      startPlaceholder: "Start time",
      endPlaceholder: "End time",
      arrowControl: false
    });
    const arbitraryRangeSource = computed(() => {
      return `<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
<\/script>

<el-time-picker
  v-model="value"
  is-range
  range-separator="${arbitraryRangeData.separator}"
  start-placeholder="${arbitraryRangeData.startPlaceholder}"
  end-placeholder="${arbitraryRangeData.endPlaceholder}"${isAttribute(
        arbitraryRangeData.arrowControl,
        "arrow-control"
      )}
/>`;
    });
    const __returned__ = { basicData, basicSource, limitRangeData, makeRange, disabledHoursRange, disabledHours, disabledMinutesRange, disabledMinutes, disabledSecondsRange, disabledSeconds, limitRangeSource, arbitraryRangeData, arbitraryRangeSource, get sizeOptions() {
      return sizeOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_time_picker = resolveComponent("el-time-picker");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstRange = __unplugin_components_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/TimePicker",
    icon: "fluent:time-picker-20-regular",
    layout: {
      type: "grid",
      width: 500
    }
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstText, {
        modelValue: $setup.arbitraryRangeData.separator,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.arbitraryRangeData.separator = $event),
        title: "Separator"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstText, {
        modelValue: $setup.arbitraryRangeData.startPlaceholder,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.arbitraryRangeData.startPlaceholder = $event),
        title: "Start Placeholder"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstText, {
        modelValue: $setup.arbitraryRangeData.endPlaceholder,
        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.arbitraryRangeData.endPlaceholder = $event),
        title: "End Placeholder"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.arbitraryRangeData.arrowControl,
        "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.arbitraryRangeData.arrowControl = $event),
        title: "Arrow Control"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.placeholder,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.placeholder = $event),
            title: "Placeholder"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.size,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.size = $event),
            title: "Size",
            options: $setup.sizeOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.arrowControl,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.arrowControl = $event),
            title: "Arrow Control"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.readonly,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.readonly = $event),
            title: "Readonly"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.editable,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.editable = $event),
            title: "Editable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.clearable,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicData.clearable = $event),
            title: "Clearable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.disabled,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.basicData.disabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          $setup.basicData.arrowControl ? (openBlock(), createBlock(_component_el_time_picker, {
            key: 0,
            modelValue: $setup.basicData.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.value = $event),
            placeholder: $setup.basicData.placeholder,
            clearable: $setup.basicData.clearable,
            readonly: $setup.basicData.readonly,
            disabled: $setup.basicData.disabled,
            editable: $setup.basicData.editable,
            size: $setup.basicData.size,
            "arrow-control": ""
          }, null, 8, ["modelValue", "placeholder", "clearable", "readonly", "disabled", "editable", "size"])) : (openBlock(), createBlock(_component_el_time_picker, {
            key: 1,
            modelValue: $setup.basicData.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.value = $event),
            placeholder: $setup.basicData.placeholder,
            clearable: $setup.basicData.clearable,
            readonly: $setup.basicData.readonly,
            disabled: $setup.basicData.disabled,
            editable: $setup.basicData.editable,
            size: $setup.basicData.size
          }, null, 8, ["modelValue", "placeholder", "clearable", "readonly", "disabled", "editable", "size"]))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Limit the time range",
        source: $setup.limitRangeSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstRange, {
            modelValue: $setup.disabledHoursRange,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.disabledHoursRange = $event),
            title: "DisabledHours",
            min: 0,
            max: 23
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRange, {
            modelValue: $setup.disabledMinutesRange,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.disabledMinutesRange = $event),
            title: "DisabledMinutes",
            min: 0,
            max: 59
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRange, {
            modelValue: $setup.disabledSecondsRange,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.disabledSecondsRange = $event),
            title: "DisabledSeconds",
            min: 0,
            max: 59
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_time_picker, {
            modelValue: $setup.limitRangeData.value,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.limitRangeData.value = $event),
            "disabled-hours": $setup.disabledHours,
            "disabled-minutes": $setup.disabledMinutes,
            "disabled-seconds": $setup.disabledSeconds,
            placeholder: "Arbitrary time"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Arbitrary time range",
        source: $setup.arbitraryRangeSource
      }, {
        default: withCtx(() => [
          $setup.arbitraryRangeData.arrowControl ? (openBlock(), createBlock(_component_el_time_picker, {
            key: 0,
            modelValue: $setup.arbitraryRangeData.value,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.arbitraryRangeData.value = $event),
            "is-range": "",
            "range-separator": $setup.arbitraryRangeData.separator,
            "start-placeholder": $setup.arbitraryRangeData.startPlaceholder,
            "end-placeholder": $setup.arbitraryRangeData.endPlaceholder,
            "arrow-control": ""
          }, null, 8, ["modelValue", "range-separator", "start-placeholder", "end-placeholder"])) : (openBlock(), createBlock(_component_el_time_picker, {
            key: 1,
            modelValue: $setup.arbitraryRangeData.value,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.arbitraryRangeData.value = $event),
            "is-range": "",
            "range-separator": $setup.arbitraryRangeData.separator,
            "start-placeholder": $setup.arbitraryRangeData.startPlaceholder,
            "end-placeholder": $setup.arbitraryRangeData.endPlaceholder
          }, null, 8, ["modelValue", "range-separator", "start-placeholder", "end-placeholder"]))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Form/TimePicker/timePicker.story.vue";
const timePicker_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/TimePicker/timePicker.story.vue"]]);
export {
  timePicker_story as default
};
