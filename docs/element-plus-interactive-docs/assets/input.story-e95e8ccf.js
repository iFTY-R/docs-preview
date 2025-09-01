import { ax as defineComponent, ay as ref, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, b8 as calendar_default, b9 as search_default, aD as createVNode, aE as createElementBlock, aG as Fragment, aI as createBaseVNode, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const input_story_vue_vue_type_style_index_0_lang = "";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>Input is a controlled component, it <strong>always shows Vue binding value</strong>.</p>
<p>Under normal circumstances, <code>input</code> event should be handled. Its handler should update component's binding value (or use <code>v-model</code>). Otherwise, input box's value will not change.</p>
<p>Do not support <code>v-model</code> modifiers.</p>
<h2 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h2>
<p>Disable the Input with the <code>disabled</code> attribute.</p>
<h2 id="clearable" tabindex="-1">Clearable <a class="header-anchor" href="#clearable" aria-hidden="true">#</a></h2>
<p>Make the Input clearable with the <code>clearable</code> attribute.</p>
<h2 id="formatter" tabindex="-1">Formatter <a class="header-anchor" href="#formatter" aria-hidden="true">#</a></h2>
<p>Display value within it's situation with <code>formatter</code>, and we usually use <code>parser</code> at the same time.</p>
<h2 id="password-box" tabindex="-1">Password box <a class="header-anchor" href="#password-box" aria-hidden="true">#</a></h2>
<p>Make a toggle-able password Input with the <code>show-password</code> attribute.</p>
<h2 id="input-with-icon" tabindex="-1">Input with icon <a class="header-anchor" href="#input-with-icon" aria-hidden="true">#</a></h2>
<p>Add an icon to indicate input type.</p>
<p>To add icons in Input, you can simply use <code>prefix-icon</code> and <code>suffix-icon</code> attributes. Also, the <code>prefix</code> and <code>suffix</code> named slots works as well.</p>
<h2 id="textarea" tabindex="-1">Textarea <a class="header-anchor" href="#textarea" aria-hidden="true">#</a></h2>
<p>Resizable for entering multiple lines of text information. Add attribute <code>type=&quot;textarea&quot;</code> to change <code>input</code> into native <code>textarea</code>.</p>
<p>Control the height by setting the <code>rows</code> prop.</p>
<h2 id="autosize-textarea" tabindex="-1">Autosize Textarea <a class="header-anchor" href="#autosize-textarea" aria-hidden="true">#</a></h2>
<p>Setting the <code>autosize</code> prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to <code>autosize</code> to specify the minimum and maximum number of lines the textarea can automatically adjust.</p>
<h2 id="mixed-input" tabindex="-1">Mixed input <a class="header-anchor" href="#mixed-input" aria-hidden="true">#</a></h2>
<p>Prepend or append an element, generally a label or a button.</p>
<p>Use <code>slot</code> to distribute elements that prepend or append to Input.</p>
<h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-hidden="true">#</a></h2>
<p>Add <code>size</code> attribute to change the size of Input. In addition to the default size, there are two other options: <code>large</code>, <code>small</code>.</p>
<h2 id="limit-length" tabindex="-1">Limit length <a class="header-anchor" href="#limit-length" aria-hidden="true">#</a></h2>
<p><code>maxlength</code> and <code>minlength</code> attributes of input, they declare a limit on the number of characters a user can input. The &quot;number of characters&quot; is measured using JavaScript string length.Setting the <code>maxlength</code> prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting <code>show-word-limit</code> to <code>true</code> at the same time.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "input.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    const input4 = ref("");
    const input5 = ref("");
    const input6 = ref("");
    const input7 = ref("");
    const input8 = ref("");
    const input9 = ref("");
    const input10 = ref("");
    const input11 = ref("");
    const input12 = ref("");
    const textarea = ref("");
    const textarea1 = ref("");
    const textarea2 = ref("");
    const select = ref("");
    const text = ref("");
    const isDisabled = ref(true);
    const isClearable = ref(true);
    const showPassword = ref(true);
    const isAutoSize = ref(true);
    const withIcon = ref("attributes");
    const rows = ref(2);
    const autoSizeConfig = ref({ minRows: 2, maxRows: 4 });
    const size = ref("default");
    const maxlength = ref(10);
    const inputSizeList = [
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
    const withIconList = [
      {
        label: "use slot",
        value: "slot"
      },
      {
        label: "use attributes",
        value: "attributes"
      }
    ];
    const useSlot = computed(() => withIcon.value === "slot");
    const __returned__ = { input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, textarea, textarea1, textarea2, select, text, isDisabled, isClearable, showPassword, isAutoSize, withIcon, rows, autoSizeConfig, size, maxlength, inputSizeList, withIconList, useSlot, get Calendar() {
      return calendar_default;
    }, get Search() {
      return search_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "margin": "20px 0" } },
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "mt-4" };
const _hoisted_3 = { class: "mt-4" };
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "margin": "20px 0" } },
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_button = resolveComponent("el-button");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Input",
    icon: "iconoir:input-field",
    layout: { type: "grid", width: 500 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: $setup.input1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.input1 = $event),
            placeholder: "Please input"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isDisabled,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: $setup.input2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.input2 = $event),
            disabled: $setup.isDisabled,
            placeholder: "Please input"
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Clearable" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isClearable,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.isClearable = $event),
            title: "Clearable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: $setup.input3,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.input3 = $event),
            clearable: $setup.isClearable,
            placeholder: "Please input"
          }, null, 8, ["modelValue", "clearable"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Formatter" }, {
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: $setup.input4,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.input4 = $event),
            placeholder: "Please input",
            formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            parser: (value) => value.replace(/\$\s?|(,*)/g, "")
          }, null, 8, ["modelValue", "formatter", "parser"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Password box" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.showPassword,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.showPassword = $event),
            title: "ShowPassword"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: $setup.input5,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.input5 = $event),
            type: "password",
            placeholder: "Please input password",
            "show-password": $setup.showPassword
          }, null, 8, ["modelValue", "show-password"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Input with icon" }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $setup.withIcon,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.withIcon = $event),
            title: "With Icon",
            options: $setup.withIconList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          $setup.useSlot ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createVNode(_component_el_input, {
                modelValue: $setup.input6,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.input6 = $event),
                placeholder: "Pick a date"
              }, {
                suffix: withCtx(() => [
                  createVNode(_component_el_icon, { class: "el-input__icon" }, {
                    default: withCtx(() => [
                      createVNode($setup["Calendar"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              createVNode(_component_el_input, {
                modelValue: $setup.input7,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.input7 = $event),
                class: "mt-4",
                placeholder: "Type something"
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_el_icon, { class: "el-input__icon" }, {
                    default: withCtx(() => [
                      createVNode($setup["Search"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createVNode(_component_el_input, {
                modelValue: $setup.input6,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.input6 = $event),
                placeholder: "Pick a date",
                "suffix-icon": $setup.Calendar
              }, null, 8, ["modelValue", "suffix-icon"]),
              createVNode(_component_el_input, {
                modelValue: $setup.input7,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.input7 = $event),
                class: "mt-4",
                placeholder: "Type something",
                "prefix-icon": $setup.Search
              }, null, 8, ["modelValue", "prefix-icon"])
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Textarea" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.rows,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.rows = $event),
            title: "Rows"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: $setup.textarea,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.textarea = $event),
            rows: $setup.rows,
            type: "textarea",
            placeholder: "Please input"
          }, null, 8, ["modelValue", "rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Autosize Textarea" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isAutoSize,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.isAutoSize = $event),
            title: "AutoSize"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.autoSizeConfig.minRows,
            "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.autoSizeConfig.minRows = $event),
            title: "minRows"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.autoSizeConfig.maxRows,
            "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $setup.autoSizeConfig.maxRows = $event),
            title: "maxRows"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: $setup.textarea1,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.textarea1 = $event),
            autosize: "",
            type: "textarea",
            placeholder: "Please input"
          }, null, 8, ["modelValue"]),
          _hoisted_1,
          createVNode(_component_el_input, {
            modelValue: $setup.textarea2,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.textarea2 = $event),
            autosize: $setup.autoSizeConfig,
            type: "textarea",
            placeholder: "Please input"
          }, null, 8, ["modelValue", "autosize"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Mixed input" }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(_component_el_input, {
              modelValue: $setup.input8,
              "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $setup.input8 = $event),
              placeholder: "Please input"
            }, {
              prepend: withCtx(() => [
                createTextVNode(" Http:// ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_el_input, {
              modelValue: $setup.input9,
              "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $setup.input9 = $event),
              placeholder: "Please input"
            }, {
              append: withCtx(() => [
                createTextVNode(" .com ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_el_input, {
              modelValue: $setup.input10,
              "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => $setup.input10 = $event),
              placeholder: "Please input",
              class: "input-with-select"
            }, {
              prepend: withCtx(() => [
                createVNode(_component_el_select, {
                  modelValue: $setup.select,
                  "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $setup.select = $event),
                  placeholder: "Select",
                  style: { "width": "115px" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_option, {
                      label: "Restaurant",
                      value: "1"
                    }),
                    createVNode(_component_el_option, {
                      label: "Order No.",
                      value: "2"
                    }),
                    createVNode(_component_el_option, {
                      label: "Tel",
                      value: "3"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              append: withCtx(() => [
                createVNode(_component_el_button, { icon: $setup.Search }, null, 8, ["icon"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_el_input, {
              modelValue: $setup.input11,
              "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => $setup.input11 = $event),
              placeholder: "Please input",
              class: "input-with-select"
            }, {
              prepend: withCtx(() => [
                createVNode(_component_el_button, { icon: $setup.Search }, null, 8, ["icon"])
              ]),
              append: withCtx(() => [
                createVNode(_component_el_select, {
                  modelValue: $setup.select,
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => $setup.select = $event),
                  placeholder: "Select",
                  style: { "width": "115px" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_option, {
                      label: "Restaurant",
                      value: "1"
                    }),
                    createVNode(_component_el_option, {
                      label: "Order No.",
                      value: "2"
                    }),
                    createVNode(_component_el_option, {
                      label: "Tel",
                      value: "3"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Sizes" }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => $setup.size = $event),
            title: "Size",
            options: $setup.inputSizeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: $setup.input12,
            "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => $setup.input12 = $event),
            size: $setup.size,
            placeholder: "Please Input"
          }, null, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Limit length" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.maxlength,
            "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => $setup.maxlength = $event),
            title: "Limit length"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: $setup.text,
            "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => $setup.text = $event),
            maxlength: $setup.maxlength,
            placeholder: "Please input",
            "show-word-limit": "",
            type: "text"
          }, null, 8, ["modelValue", "maxlength"]),
          _hoisted_5,
          createVNode(_component_el_input, {
            modelValue: $setup.textarea,
            "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => $setup.textarea = $event),
            maxlength: $setup.maxlength,
            placeholder: "Please input",
            "show-word-limit": "",
            type: "textarea"
          }, null, 8, ["modelValue", "maxlength"])
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
_sfc_main.__file = "src/components/Form/input.story.vue";
const input_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/input.story.vue"]]);
export {
  input_story as default
};
