import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aK as logEvent } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = `<h1 id="datetimepicker" tabindex="-1">DateTimePicker <a class="header-anchor" href="#datetimepicker" aria-hidden="true">#</a></h1>
<p>Select date and time in one picker.</p>
<h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>You can select date and time in one picker at the same time by setting <code>type</code> to <code>datetime</code>. The way to use shortcuts is the same as Date Picker.</p>
<h2 id="date-time-formats" tabindex="-1">Date Time Formats <a class="header-anchor" href="#date-time-formats" aria-hidden="true">#</a></h2>
<p>Use <code>format</code> to control displayed text's format in the input box. Use <code>value-format</code> to control binding value's format.</p>
<p>By default, the component accepts and emits a <code>Date</code> object.</p>
<p>Check the list <a href="https://day.js.org/docs/en/display/format#list-of-all-available-formats" target="_blank">here</a> of all available formats of Day.js.</p>
<h2 id="date-and-time-range" tabindex="-1">Date and time range <a class="header-anchor" href="#date-and-time-range" aria-hidden="true">#</a></h2>
<p>You can select date and time range by setting <code>type</code> to <code>datetimerange</code>.</p>
<h2 id="default-time-value-for-start-date-and-end-date" tabindex="-1">Default time value for start date and end date <a class="header-anchor" href="#default-time-value-for-start-date-and-end-date" aria-hidden="true">#</a></h2>
<p>When picking date range on the date panel with type <code>datetimerange</code>, <code>00:00:00</code> will be used as the default time value for start and end date. We can control it with the <code>default-time</code> attribute. <code>default-time</code> accepts an array of up to two Date objects. The first item controls time value of the start date and the second item controls time value of the end date.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dateTimePicker.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const date = ref();
    const size = ref("default");
    const valueFormat = ref();
    const range = ref(false);
    const defaultTime = new Date(2e3, 1, 1, 12, 0, 0);
    const defaultRangeTime = [
      new Date(2e3, 1, 1, 12, 0, 0),
      new Date(2e3, 2, 1, 8, 0, 0)
    ];
    const shortcuts = [
      {
        text: "Today",
        value: /* @__PURE__ */ new Date()
      },
      {
        text: "Yesterday",
        value: () => {
          const date2 = /* @__PURE__ */ new Date();
          date2.setTime(date2.getTime() - 3600 * 1e3 * 24);
          return date2;
        }
      },
      {
        text: "A week ago",
        value: () => {
          const date2 = /* @__PURE__ */ new Date();
          date2.setTime(date2.getTime() - 3600 * 1e3 * 24 * 7);
          return date2;
        }
      }
    ];
    const rangeShortcuts = [
      {
        text: "Last week",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setTime(start.getTime() - 3600 * 1e3 * 24 * 7);
          return [start, end];
        }
      },
      {
        text: "Last month",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setTime(start.getTime() - 3600 * 1e3 * 24 * 30);
          return [start, end];
        }
      },
      {
        text: "Last 3 months",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setTime(start.getTime() - 3600 * 1e3 * 24 * 90);
          return [start, end];
        }
      }
    ];
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
    const valueFormatList = [
      {
        label: "YYYY-MM-DD h:m:s a",
        value: "YYYY-MM-DD h:m:s a"
      },
      {
        label: "x",
        value: "x"
      }
    ];
    function handleChange(dateTime) {
      logEvent("change", { dateTime });
    }
    const __returned__ = { date, size, valueFormat, range, defaultTime, defaultRangeTime, shortcuts, rangeShortcuts, sizeList, valueFormatList, handleChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_date_picker = resolveComponent("el-date-picker");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/DateTimePicker",
    icon: "material-symbols:calendar-month-outline",
    layout: { type: "grid", width: 480 }
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
          createVNode(_component_el_date_picker, {
            modelValue: $setup.date,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.date = $event),
            type: "datetime",
            placeholder: "Select date and time",
            size: $setup.size,
            onChange: $setup.handleChange
          }, null, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With shortcuts" }, {
        default: withCtx(() => [
          createVNode(_component_el_date_picker, {
            modelValue: $setup.date,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.date = $event),
            type: "datetime",
            placeholder: "Select date and time",
            shortcuts: $setup.shortcuts,
            onChange: $setup.handleChange
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Date time format" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.valueFormat,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.valueFormat = $event),
            options: $setup.valueFormatList,
            title: "Date time format"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_date_picker, {
            modelValue: $setup.date,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.date = $event),
            type: "datetime",
            placeholder: "Pick a Date",
            format: "YYYY/MM/DD HH:mm:ss",
            "value-format": $setup.valueFormat,
            onChange: $setup.handleChange
          }, null, 8, ["modelValue", "value-format"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Date and time range" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.size = $event),
            options: $setup.sizeList,
            title: "Size"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_date_picker, {
            modelValue: $setup.date,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.date = $event),
            type: "datetimerange",
            "range-separator": "To",
            "start-placeholder": "Start date",
            "end-placeholder": "End date",
            size: $setup.size,
            shortcuts: $setup.rangeShortcuts,
            onChange: $setup.handleChange
          }, null, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Default time" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.range,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.range = $event),
            title: "Range"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_date_picker, {
            modelValue: $setup.date,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.date = $event),
            type: `datetime${$setup.range ? "range" : ""}`,
            placeholder: "Select date",
            "start-placeholder": "Start Date",
            "end-placeholder": "End Date",
            "default-time": $setup.range ? $setup.defaultRangeTime : $setup.defaultTime,
            onChange: $setup.handleChange
          }, null, 8, ["modelValue", "type", "default-time"])
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
_sfc_main.__file = "src/components/Form/dateTimePicker.story.vue";
const dateTimePicker_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/dateTimePicker.story.vue"]]);
export {
  dateTimePicker_story as default
};
