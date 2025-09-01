import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, bt as link_default, aD as createVNode, aI as createBaseVNode, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { s as sizeOptions } from "./sizeOptions-57bd3279.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const timeSelect_story_vue_vue_type_style_index_0_scoped_7643aa9a_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "timeSelect.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      value: "",
      start: "09:00",
      step: "00:30",
      end: "18:00",
      placeholder: "Select time",
      disabled: false,
      editable: true,
      clearable: true,
      size: "default"
    });
    const basicSource = computed(() => {
      return `<el-time-select
  v-model="value"${isAttribute(
        basicData.start !== "09:00",
        `start="${basicData.start}"`
      )}${isAttribute(
        basicData.step !== "00:30",
        `step="${basicData.step}"`
      )}${isAttribute(
        basicData.end !== "18:00",
        `end="${basicData.end}"`
      )}${isAttribute(
        basicData.placeholder !== "",
        `placeholder="${basicData.placeholder}"`
      )}${isAttribute(
        basicData.disabled,
        "disabled"
      )}${isAttribute(
        !basicData.editable,
        ':editable="false"'
      )}${isAttribute(
        !basicData.clearable,
        ':clearable="false"'
      )}${isAttribute(
        basicData.size !== "default",
        `size="${basicData.size}"`
      )}
/>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
<\/script>
`;
    });
    const timeFormatsData = reactive({
      value: "",
      format: "hh:mm A"
    });
    const timeFormatsSource = computed(() => {
      return `<el-time-select
  v-model="value"
  format="${timeFormatsData.format}"
/>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
<\/script>
`;
    });
    const fixedTimeData = reactive({
      value: "startTime",
      endTime: "",
      startTime: ""
    });
    const fixedTimeSource = computed(() => {
      return `<template>
  <el-time-select
    v-model="fixedTimeData.startTime"
    :max-time="fixedTimeData.endTime"
    placeholder="Start time"
    start="08:30"
    step="00:15"
    end="18:30"
  />
  <el-time-select
    v-model="fixedTimeData.endTime"
    :min-time="fixedTimeData.startTime"
    placeholder="End time"
    start="08:30"
    step="00:15"
    end="18:30"
  />
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  const basicData = reactive({
    endTime: '',
    startTime: '',
  })
<\/script>
`;
    });
    const __returned__ = { basicData, basicSource, timeFormatsData, timeFormatsSource, fixedTimeData, fixedTimeSource, get Link() {
      return link_default;
    }, get sizeOptions() {
      return sizeOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "htw-p-2 tips" };
const _hoisted_2 = { class: "demo-time-range" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_time_select = resolveComponent("el-time-select");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_el_link = resolveComponent("el-link");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/TimeSelect",
    icon: "fad:timeselect",
    layout: {
      type: "grid",
      width: 400
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.start,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.start = $event),
            title: "Start"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.step,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.step = $event),
            title: "Step"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.end,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.end = $event),
            title: "End"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.placeholder,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.placeholder = $event),
            title: "Placeholder"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.size,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.size = $event),
            options: $setup.sizeOptions,
            title: "Size"
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.disabled,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.disabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.editable,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicData.editable = $event),
            title: "Editable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.clearable,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.basicData.clearable = $event),
            title: "Clearable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_time_select, {
            modelValue: $setup.basicData.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.value = $event),
            start: $setup.basicData.start,
            step: $setup.basicData.step,
            end: $setup.basicData.end,
            placeholder: $setup.basicData.placeholder,
            disabled: $setup.basicData.disabled,
            editable: $setup.basicData.editable,
            clearable: $setup.basicData.clearable,
            size: $setup.basicData.size
          }, null, 8, ["modelValue", "start", "step", "end", "placeholder", "disabled", "editable", "clearable", "size"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Time Formats",
        source: $setup.timeFormatsSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.timeFormatsData.format,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.timeFormatsData.format = $event),
            title: "Format"
          }, null, 8, ["modelValue"]),
          createBaseVNode("div", _hoisted_1, [
            createTextVNode(" Use format to control format of time(hours and minutes). Check the list "),
            createVNode(_component_el_link, {
              type: "primary",
              target: "_blank",
              href: "https://day.js.org/docs/zh-CN/display/format",
              icon: $setup.Link
            }, {
              default: withCtx(() => [
                createTextVNode(" here ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["icon"]),
            createTextVNode(" of all available formats of Day.js. ")
          ])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_time_select, {
            modelValue: $setup.timeFormatsData.value,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.timeFormatsData.value = $event),
            start: "08:30",
            step: "00:15",
            end: "18:30",
            placeholder: "Select time",
            format: $setup.timeFormatsData.format
          }, null, 8, ["modelValue", "format"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Fixed time range",
        source: $setup.fixedTimeSource
      }, {
        controls: withCtx(() => []),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_el_time_select, {
              modelValue: $setup.fixedTimeData.startTime,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.fixedTimeData.startTime = $event),
              "max-time": $setup.fixedTimeData.endTime,
              class: "mr-4",
              placeholder: "Start time",
              start: "08:30",
              step: "00:15",
              end: "18:30"
            }, null, 8, ["modelValue", "max-time"]),
            createVNode(_component_el_time_select, {
              modelValue: $setup.fixedTimeData.endTime,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.fixedTimeData.endTime = $event),
              "min-time": $setup.fixedTimeData.startTime,
              placeholder: "End time",
              start: "08:30",
              step: "00:15",
              end: "18:30"
            }, null, 8, ["modelValue", "min-time"])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Form/TimeSelect/timeSelect.story.vue";
const timeSelect_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7643aa9a"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/TimeSelect/timeSelect.story.vue"]]);
export {
  timeSelect_story as default
};
