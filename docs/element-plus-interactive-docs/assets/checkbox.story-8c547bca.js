import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aK as logEvent, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>Checkbox can be used alone to switch between two states.</p>
<p>Define <code>v-model</code>(bind variable) in <code>el-checkbox</code>. The default value is a <code>Boolean</code> for single <code>checkbox</code>, and it becomes <code>true</code> when selected. Content inside the <code>el-checkbox</code> tag will become the description following the button of the checkbox.</p>
<h2 id="checkbox-group" tabindex="-1">Checkbox group <a class="header-anchor" href="#checkbox-group" aria-hidden="true">#</a></h2>
<p>It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.</p>
<p><code>checkbox-group</code> element can manage multiple checkboxes in one group by using <code>v-model</code> which is bound as an <code>Array</code>. Inside the <code>el-checkbox</code> element, <code>label</code> is the value of the checkbox. If no content is nested in that tag, <code>label</code> will be rendered as the description following the button of the checkbox. <code>label</code> also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.</p>
<h2 id="indeterminate" tabindex="-1">Indeterminate <a class="header-anchor" href="#indeterminate" aria-hidden="true">#</a></h2>
<p>The <code>indeterminate</code> property can help you to achieve a 'check all' effect.</p>
<h2 id="minimum-maximum-items-checked" tabindex="-1">Minimum / Maximum items checked <a class="header-anchor" href="#minimum-maximum-items-checked" aria-hidden="true">#</a></h2>
<p>The min and max properties can help you to limit the number of checked items.</p>
<h2 id="button-style" tabindex="-1">Button style <a class="header-anchor" href="#button-style" aria-hidden="true">#</a></h2>
<p>Checkbox with button styles.</p>
<p>You just need to change <code>el-checkbox</code> element into <code>el-checkbox-button</code> element. We also provide <code>size</code> attribute.</p>
<h2 id="with-borders" tabindex="-1">With borders <a class="header-anchor" href="#with-borders" aria-hidden="true">#</a></h2>
<p>The <code>border</code> attribute adds a border to Checkboxes.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkbox.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const size = ref("default");
    const disabled = ref(false);
    const checkAll = ref(false);
    const isIndeterminate = ref(true);
    const border = ref(true);
    const checkList = ref(["selected and disabled", "Option A"]);
    const max = ref(2);
    const min = ref(1);
    const checkedCities = ref(["Shanghai", "Beijing"]);
    const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
    const sizeOptions = [
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
    function handleCheckAllChange(val) {
      checkedCities.value = val ? cities : [];
      isIndeterminate.value = false;
      logEvent("checkboxChange", val);
    }
    function handleCheckedCitiesChange(value) {
      const checkedCount = value.length;
      checkAll.value = checkedCount === cities.length;
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
      logEvent("checkboxGroupChange", value);
    }
    function checkboxChange(value) {
      logEvent("checkboxChange", { value });
    }
    function checkboxGroupChange(value) {
      logEvent("checkboxGroupChange", value);
    }
    const __returned__ = { size, disabled, checkAll, isIndeterminate, border, checkList, max, min, checkedCities, cities, sizeOptions, handleCheckAllChange, handleCheckedCitiesChange, checkboxChange, checkboxGroupChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_el_checkbox_button = resolveComponent("el-checkbox-button");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Checkbox",
    icon: "mdi:format-list-checkbox"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.size = $event),
            options: $setup.sizeOptions,
            title: "Size"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.disabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.disabled = $event),
            title: "Disable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_checkbox, {
            label: "option1",
            size: $setup.size,
            disabled: $setup.disabled,
            onChange: $setup.checkboxChange
          }, null, 8, ["size", "disabled"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Checkbox group" }, {
        default: withCtx(() => [
          createVNode(_component_el_checkbox_group, {
            modelValue: $setup.checkList,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.checkList = $event),
            onChange: $setup.checkboxGroupChange
          }, {
            default: withCtx(() => [
              createVNode(_component_el_checkbox, { label: "Option A" }),
              createVNode(_component_el_checkbox, { label: "Option B" }),
              createVNode(_component_el_checkbox, { label: "Option C" }),
              createVNode(_component_el_checkbox, {
                label: "disabled",
                disabled: ""
              }),
              createVNode(_component_el_checkbox, {
                label: "selected and disabled",
                disabled: "",
                onChange: $setup.checkboxChange
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Indeterminate" }, {
        default: withCtx(() => [
          createVNode(_component_el_checkbox, {
            modelValue: $setup.checkAll,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.checkAll = $event),
            indeterminate: $setup.isIndeterminate,
            onChange: $setup.handleCheckAllChange
          }, {
            default: withCtx(() => [
              createTextVNode(" Check all ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "indeterminate"]),
          createVNode(_component_el_checkbox_group, {
            modelValue: $setup.checkedCities,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.checkedCities = $event),
            onChange: $setup.handleCheckedCitiesChange
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList($setup.cities, (city) => {
                  return createVNode(_component_el_checkbox, {
                    key: city,
                    label: city
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(city),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Max/Min item checked" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.min,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.min = $event),
            title: "Min"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.max,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.max = $event),
            title: "Max"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_checkbox_group, {
            modelValue: $setup.checkedCities,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.checkedCities = $event),
            min: $setup.min,
            max: $setup.max,
            onChange: $setup.checkboxGroupChange
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList($setup.cities, (city) => {
                  return createVNode(_component_el_checkbox, {
                    key: city,
                    label: city
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(city),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "min", "max"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Button style" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.size = $event),
            options: $setup.sizeOptions,
            title: "Size"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.disabled,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.disabled = $event),
            title: "Disable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_checkbox_group, {
            modelValue: $setup.checkedCities,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.checkedCities = $event),
            size: $setup.size,
            onChange: $setup.checkboxGroupChange
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList($setup.cities, (city) => {
                  return createVNode(_component_el_checkbox_button, {
                    key: city,
                    label: city,
                    disabled: $setup.disabled
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(city),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label", "disabled"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With borders" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.size = $event),
            options: $setup.sizeOptions,
            title: "Size"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.border,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.border = $event),
            title: "Border"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.disabled,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.disabled = $event),
            title: "Disable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_checkbox, {
            label: "Option1",
            size: $setup.size,
            border: $setup.border,
            disabled: $setup.disabled,
            onChange: $setup.checkboxChange
          }, null, 8, ["size", "border", "disabled"])
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
_sfc_main.__file = "src/components/Form/checkbox.story.vue";
const checkbox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/checkbox.story.vue"]]);
export {
  checkbox_story as default
};
