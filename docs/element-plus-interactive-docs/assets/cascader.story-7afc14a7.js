import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode, aP as toDisplayString, aE as createElementBlock, aW as createCommentVNode, aK as logEvent } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>There are two ways to expand child option items.</p>
<p>Assigning the <code>options</code> attribute to an array of options renders a Cascader. The <code>props.expandTrigger</code> attribute defines how child options are expanded.</p>
<h2 id="disable-option" tabindex="-1">Disable option <a class="header-anchor" href="#disable-option" aria-hidden="true">#</a></h2>
<p>Disable an option by setting a <code>disabled</code> field in the option object.</p>
<p>In this example, the first item in <code>options</code> array has a <code>disabled: true</code> field, so it is <code>disabled</code>. By default, Cascader checks the disabled field in each option object; if you are using another field name to indicate whether an option is disabled, you can assign it in the <code>props.disabled</code> attribute (see the API table below for details). And of course, field name <code>value</code>, <code>label</code> and <code>children</code> can also be customized in the same way.</p>
<h2 id="clearable" tabindex="-1">Clearable <a class="header-anchor" href="#clearable" aria-hidden="true">#</a></h2>
<p>Set <code>clearable</code> attribute for <code>el-cascader</code> and a clear icon will appear when selected and hovered</p>
<h2 id="disaplay-only-last-level" tabindex="-1">Disaplay only last level <a class="header-anchor" href="#disaplay-only-last-level" aria-hidden="true">#</a></h2>
<p>The input can display only the last level instead of all levels.</p>
<p>The <code>show-all-levels</code> attribute defines if all levels are displayed. If it is <code>false</code>, only the last level is displayed.</p>
<h2 id="multiple-selection" tabindex="-1">Multiple Selection <a class="header-anchor" href="#multiple-selection" aria-hidden="true">#</a></h2>
<p>Add :props=&quot;props&quot; in tag and set data props = { multiple: true } to use multiple selection.</p>
<h2 id="select-any-level-of-options" tabindex="-1">Select any level of options <a class="header-anchor" href="#select-any-level-of-options" aria-hidden="true">#</a></h2>
<p>In single selection, only the leaf nodes can be checked, and in multiple selection, check parent nodes will lead to leaf nodes be checked eventually. When enable this feature, it can make parent and child nodes unlinked and you can select any level of options.</p>
<p>Set <code>props.checkStrictly = true</code> to make checked state of a node not affects its parent nodes and child nodes, and then you can select any level of options.</p>
<h2 id="dynamic-loading" tabindex="-1">Dynamic loading <a class="header-anchor" href="#dynamic-loading" aria-hidden="true">#</a></h2>
<p>Dynamic load its child nodes when checked a node.</p>
<p>Set <code>lazy = true</code> to use dynamic loading, and you have to specify how to load the data source by <code>lazyload</code>. There are two parameters of <code>lazyload</code>,the first parameter <code>node</code> is the node currently clicked, and the <code>resolve</code> is a callback that indicate loading is finished which must invoke. To display the status of node more accurately, you can add a <code>leaf</code> field (can be modified by <code>props.leaf</code>) to indicate whether it is a leaf node. Otherwise, it will be inferred by if has any child nodes.</p>
<h2 id="filterable" tabindex="-1">Filterable <a class="header-anchor" href="#filterable" aria-hidden="true">#</a></h2>
<p>Search and select options with a keyword.</p>
<p>Adding <code>filterable</code> to <code>el-cascader</code> enables filtering. Cascader will match nodes whose label or parent's label (according to <code>show-all-levels</code>) includes input keyword. Of course, you can customize search logic by <code>filter-method</code> which accepts a function, the first parameter is <code>node</code>, the second is <code>keyword</code>, and need return a boolean value indicating whether it hits.</p>
<h2 id="custom-option-content" tabindex="-1">Custom option content <a class="header-anchor" href="#custom-option-content" aria-hidden="true">#</a></h2>
<p>You can customize the content of cascader node.</p>
<p>You can customize the content of cascader node by <code>scoped slot</code>. You'll have access to <code>node</code> and <code>data</code> in the scope, standing for the Node object and node data of the current node respectively.</p>
<h2 id="cascader-panel" tabindex="-1">Cascader panel <a class="header-anchor" href="#cascader-panel" aria-hidden="true">#</a></h2>
<p><code>CascaderPanel</code> is the core component of <code>Cascader</code> which has various of features such as single selection, multiple selection, dynamic loading and so on.</p>
<p>Just like <code>el-cascader</code>, you can set alternative <code>options</code> by options, and enable other features by <code>props</code>, see the API form below for details.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cascader.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value1 = ref([]);
    const clearable = ref(true);
    const lastLevel = ref(true);
    const filterable = ref(true);
    const anyLevelProps = ref({
      multiple: false,
      checkStrictly: true
    });
    const props = ref({
      expandTrigger: "hover"
    });
    const multipleProps = ref({
      multiple: true
    });
    let id = 0;
    const dynamicProps = {
      lazy: true,
      lazyLoad(node, resolve) {
        const { level } = node;
        setTimeout(() => {
          const nodes = Array.from({ length: level + 1 }).map(() => ({
            value: ++id,
            label: `Option - ${id}`,
            leaf: level >= 2
          }));
          resolve(nodes);
        }, 1e3);
      }
    };
    function handleChange(value) {
      logEvent("change", value);
    }
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    const disableOptions = [
      {
        value: "guide",
        label: "Guide",
        disabled: true,
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    const expandTriggerList = [
      {
        label: "click",
        value: "click"
      },
      {
        label: "hover",
        value: "hover"
      }
    ];
    const __returned__ = { value1, clearable, lastLevel, filterable, anyLevelProps, props, multipleProps, get id() {
      return id;
    }, set id(v) {
      id = v;
    }, dynamicProps, handleChange, options, disableOptions, expandTriggerList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader = resolveComponent("el-cascader");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_el_cascader_panel = resolveComponent("el-cascader-panel");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Cascader",
    icon: "octicon:multi-select-24"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.props.expandTrigger,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.props.expandTrigger = $event),
            options: $setup.expandTriggerList,
            title: "Trigger"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_cascader, {
            modelValue: $setup.value1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value1 = $event),
            options: $setup.options,
            props: $setup.props,
            onChange: $setup.handleChange
          }, null, 8, ["modelValue", "props"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disable option" }, {
        default: withCtx(() => [
          createVNode(_component_el_cascader, {
            modelValue: $setup.value1,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.value1 = $event),
            options: $setup.disableOptions,
            onChange: $setup.handleChange
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Clearable" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.clearable,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.clearable = $event),
            title: "Clearable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_cascader, {
            options: $setup.options,
            clearable: $setup.clearable
          }, null, 8, ["clearable"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Display only the last level" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.lastLevel,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.lastLevel = $event),
            title: "Last level"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_cascader, {
            options: $setup.options,
            "show-all-levels": !$setup.lastLevel
          }, null, 8, ["show-all-levels"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Multiple Selection" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.multipleProps.multiple,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.multipleProps.multiple = $event),
            title: "Multiple"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_cascader, {
            props: $setup.multipleProps,
            options: $setup.options
          }, null, 8, ["props"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Select any level of options" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.anyLevelProps.multiple,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.anyLevelProps.multiple = $event),
            title: "Multiple"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_cascader, {
            options: $setup.options,
            props: $setup.anyLevelProps,
            clearable: ""
          }, null, 8, ["props"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Dynamic loading" }, {
        default: withCtx(() => [
          createVNode(_component_el_cascader, { props: $setup.dynamicProps })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Filterable" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.multipleProps.multiple,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.multipleProps.multiple = $event),
            title: "Multiple"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.filterable,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.filterable = $event),
            title: "Filterable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_cascader, {
            placeholder: "Try searchingL Guide",
            options: $setup.options,
            props: $setup.multipleProps,
            filterable: $setup.filterable
          }, null, 8, ["props", "filterable"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom option content" }, {
        default: withCtx(() => [
          createVNode(_component_el_cascader, { options: $setup.options }, {
            default: withCtx(({ node, data }) => [
              createBaseVNode(
                "span",
                null,
                toDisplayString(data.label),
                1
                /* TEXT */
              ),
              !node.isLeaf ? (openBlock(), createElementBlock(
                "span",
                _hoisted_1,
                "(" + toDisplayString(data.children.length) + ")",
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Cascader panel" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.multipleProps.multiple,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.multipleProps.multiple = $event),
            title: "Multiple"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_cascader_panel, {
            options: $setup.options,
            props: $setup.multipleProps
          }, null, 8, ["props"])
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
_sfc_main.__file = "src/components/Form/cascader.story.vue";
const cascader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/cascader.story.vue"]]);
export {
  cascader_story as default
};
