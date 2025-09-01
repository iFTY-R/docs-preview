import { ax as defineComponent, ay as ref, aZ as onMounted, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, a_ as check_default, a$ as minus_default, b0 as plus_default, aD as createVNode, aI as createBaseVNode, aH as createTextVNode, aP as toDisplayString, aL as pushScopeId, aM as popScopeId } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const progress_story_vue_vue_type_style_index_0_scoped_0dc36878_lang = "";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="linear-progress-bar" tabindex="-1">Linear progress bar <a class="header-anchor" href="#linear-progress-bar" aria-hidden="true">#</a></h2>
<p>Use percentage attribute to set the percentage. It's required and must be between 0-100. You can custom text format by setting format.</p>
<h2 id="internal-percentage" tabindex="-1">Internal percentage <a class="header-anchor" href="#internal-percentage" aria-hidden="true">#</a></h2>
<p>In this case the percentage takes no additional space.</p>
<p>stroke-width attribute decides the width of progress bar, and use text-inside attribute to put description inside the progress bar.</p>
<h2 id="custom-color" tabindex="-1">Custom color <a class="header-anchor" href="#custom-color" aria-hidden="true">#</a></h2>
<p>You can use color attr to set the progress bar color. it accepts color string, function, or array.</p>
<h2 id="circular-progress-bar" tabindex="-1">Circular progress bar <a class="header-anchor" href="#circular-progress-bar" aria-hidden="true">#</a></h2>
<p>You can specify type attribute to circle to use circular progress bar, and use width attribute to change the size of circle.</p>
<h2 id="dashboard-progress-bar" tabindex="-1">Dashboard progress bar <a class="header-anchor" href="#dashboard-progress-bar" aria-hidden="true">#</a></h2>
<p>You also can specify type attribute to dashboard to use dashboard progress bar.</p>
<h2 id="customized-content" tabindex="-1">Customized content <a class="header-anchor" href="#customized-content" aria-hidden="true">#</a></h2>
<p>Use default slot to add customized content.</p>
<h2 id="indeterminate-progress" tabindex="-1">Indeterminate progress <a class="header-anchor" href="#indeterminate-progress" aria-hidden="true">#</a></h2>
<p>Use indeterminate attribute to set indeterminate progress, with duration to control the animation duration.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "progress.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const currentPercentage = ref(50);
    const currentInside = ref(true);
    const progressPercentageList = [
      {
        label: "default",
        value: "50"
      },
      {
        label: "Full",
        value: "100"
      }
    ];
    const currentStatus = ref("");
    const progressStatusList = [
      {
        label: "default",
        value: ""
      },
      {
        label: "success",
        value: "success"
      },
      {
        label: "warning",
        value: "warning"
      },
      {
        label: "exception",
        value: "exception"
      }
    ];
    const progressType = ref("line");
    const progressTypeList = [
      {
        label: "default",
        value: "line"
      },
      {
        label: "circle",
        value: "circle"
      },
      {
        label: "dashboard",
        value: "dashboard"
      }
    ];
    const customColor = ref("#409eff");
    const customColors = [
      { color: "#f56c6c", currentPercentage: 20 },
      { color: "#e6a23c", currentPercentage: 40 },
      { color: "#5cb87a", currentPercentage: 60 },
      { color: "#1989fa", currentPercentage: 80 },
      { color: "#6f7ad3", currentPercentage: 100 }
    ];
    function customColorMethod(currentPercentage2) {
      if (currentPercentage2 < 30)
        return "#909399";
      if (currentPercentage2 < 70)
        return "#e6a23c";
      return "#67c23a";
    }
    function increase() {
      currentPercentage.value += 10;
      if (currentPercentage.value > 100)
        currentPercentage.value = 100;
    }
    function decrease() {
      currentPercentage.value -= 10;
      if (currentPercentage.value < 0)
        currentPercentage.value = 0;
    }
    const percentage2 = ref(0);
    onMounted(() => {
      setInterval(() => {
        percentage2.value = percentage2.value % 100 + 10;
      }, 500);
    });
    const indeterminate = ref(true);
    const __returned__ = { currentPercentage, currentInside, progressPercentageList, currentStatus, progressStatusList, progressType, progressTypeList, customColor, customColors, customColorMethod, increase, decrease, percentage2, indeterminate, get Check() {
      return check_default;
    }, get Minus() {
      return minus_default;
    }, get Plus() {
      return plus_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-0dc36878"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Content",
  -1
  /* HOISTED */
));
const _hoisted_2 = { class: "percentage-value" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "percentage-label" },
  "Progressing",
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_progress = resolveComponent("el-progress");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_button_group = resolveComponent("el-button-group");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Progress",
    icon: "carbon:progress-bar-round"
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.indeterminate,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.indeterminate = $event),
        title: "indeterminate"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Linear progress bar" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentPercentage,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentPercentage = $event),
            title: "Progress percentage",
            options: $setup.progressPercentageList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentStatus,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.currentStatus = $event),
            title: "Progress Status",
            options: $setup.progressStatusList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_progress, {
            percentage: $setup.currentPercentage,
            status: $setup.currentStatus
          }, null, 8, ["percentage", "status"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Internal percentage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.currentInside,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.currentInside = $event),
            title: "Internal"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentStatus,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.currentStatus = $event),
            title: "Progress Status",
            options: $setup.progressStatusList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            "text-inside": $setup.currentInside,
            "stroke-width": 26,
            percentage: 70,
            status: $setup.currentStatus
          }, null, 8, ["text-inside", "status"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            "text-inside": $setup.currentInside,
            "stroke-width": 24,
            percentage: 100,
            status: $setup.currentStatus
          }, null, 8, ["text-inside", "status"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            "text-inside": $setup.currentInside,
            "stroke-width": 22,
            percentage: 80,
            status: $setup.currentStatus
          }, null, 8, ["text-inside", "status"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            "text-inside": $setup.currentInside,
            "stroke-width": 20,
            percentage: 50,
            status: $setup.currentStatus
          }, null, 8, ["text-inside", "status"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom color" }, {
        default: withCtx(() => [
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            percentage: $setup.currentPercentage,
            color: $setup.customColor
          }, null, 8, ["percentage", "color"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            percentage: $setup.currentPercentage,
            color: $setup.customColorMethod
          }, null, 8, ["percentage"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            percentage: $setup.currentPercentage,
            color: $setup.customColors
          }, null, 8, ["percentage"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            percentage: $setup.currentPercentage,
            color: $setup.customColors
          }, null, 8, ["percentage"]),
          createBaseVNode("div", null, [
            createVNode(_component_el_button_group, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  icon: $setup.Minus,
                  onClick: $setup.decrease
                }, null, 8, ["icon"]),
                createVNode(_component_el_button, {
                  icon: $setup.Plus,
                  onClick: $setup.increase
                }, null, 8, ["icon"])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Circular progress bar",
        class: "demo-type"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.progressType,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.progressType = $event),
            title: "Progress type",
            options: $setup.progressTypeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            percentage: 0,
            type: $setup.progressType
          }, null, 8, ["type"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            percentage: 25,
            type: $setup.progressType
          }, null, 8, ["type"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            percentage: 100,
            type: $setup.progressType
          }, null, 8, ["type"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            percentage: 70,
            type: $setup.progressType
          }, null, 8, ["type"]),
          createVNode(_component_el_progress, {
            style: { "margin-bottom": "15px" },
            percentage: 50,
            type: $setup.progressType
          }, null, 8, ["type"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Dashboard progress bar",
        class: "demo-type"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_progress, {
            type: "dashboard",
            percentage: $setup.currentPercentage,
            color: $setup.customColors
          }, null, 8, ["percentage"]),
          createVNode(_component_el_progress, {
            type: "dashboard",
            percentage: $setup.percentage2,
            color: $setup.customColors
          }, null, 8, ["percentage"]),
          createBaseVNode("div", null, [
            createVNode(_component_el_button_group, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  icon: $setup.Minus,
                  onClick: $setup.decrease
                }, null, 8, ["icon"]),
                createVNode(_component_el_button, {
                  icon: $setup.Plus,
                  onClick: $setup.increase
                }, null, 8, ["icon"])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Customized content",
        class: "demo-type"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_progress, { percentage: 50 }, {
            default: withCtx(() => [
              createVNode(_component_el_button, { text: "" }, {
                default: withCtx(() => [
                  createTextVNode(" Content ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_progress, {
            "text-inside": $setup.currentInside,
            "stroke-width": 20,
            percentage: 50,
            status: "exception"
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
            /* STABLE */
          }, 8, ["text-inside"]),
          createVNode(_component_el_progress, {
            type: "circle",
            percentage: 100,
            status: "success"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                type: "success",
                icon: $setup.Check,
                circle: ""
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_progress, {
            type: "dashboard",
            percentage: 80
          }, {
            default: withCtx(({ percentage }) => [
              createBaseVNode(
                "span",
                _hoisted_2,
                toDisplayString(percentage) + "%",
                1
                /* TEXT */
              ),
              _hoisted_3
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Indeterminate progress",
        class: "demo-type"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_progress, {
            percentage: 50,
            indeterminate: $setup.indeterminate
          }, null, 8, ["indeterminate"]),
          createVNode(_component_el_progress, {
            percentage: 100,
            indeterminate: $setup.indeterminate
          }, null, 8, ["indeterminate"]),
          createVNode(_component_el_progress, {
            percentage: 100,
            status: "success",
            indeterminate: $setup.indeterminate,
            duration: 5
          }, null, 8, ["indeterminate"]),
          createVNode(_component_el_progress, {
            percentage: 100,
            status: "warning",
            indeterminate: $setup.indeterminate,
            duration: 1
          }, null, 8, ["indeterminate"]),
          createVNode(_component_el_progress, {
            percentage: 50,
            status: "exception",
            indeterminate: $setup.indeterminate
          }, null, 8, ["indeterminate"])
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
_sfc_main.__file = "src/components/Data/progress.story.vue";
const progress_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0dc36878"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/progress.story.vue"]]);
export {
  progress_story as default
};
