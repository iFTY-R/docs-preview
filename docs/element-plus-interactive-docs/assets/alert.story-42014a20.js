import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aK as logEvent } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const alert_story_vue_vue_type_style_index_0_scoped_53562631_lang = "";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>Alert usage</p>\n<h2 id="theme" tabindex="-1">Theme <a class="header-anchor" href="#theme" aria-hidden="true">#</a></h2>\n<p>Alert provide two different themes, light and dark.</p>\n<p>Set effect to change theme, default is light.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "alert.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const currentType = ref("success");
    const currentTheme = ref("light");
    const closableState = ref({
      text: "Gotcha",
      closable: true
    });
    const showIcon = ref(true);
    const centeredText = ref(false);
    const description = ref("This is a description");
    const alertTypeList = [
      {
        label: "success",
        value: "success"
      },
      {
        label: "warning",
        value: "warning"
      },
      {
        label: "error",
        value: "error"
      },
      {
        label: "info",
        value: "info"
      }
    ];
    function fireClose(e) {
      logEvent("close", e);
    }
    const __returned__ = { currentType, currentTheme, closableState, showIcon, centeredText, description, alertTypeList, fireClose };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_alert = resolveComponent("el-alert");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Feedback/Alert",
    icon: "material-symbols:add-alert-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentType,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentType = $event),
            title: "Alert Type",
            options: $setup.alertTypeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_alert, {
            type: $setup.currentType,
            title: $setup.currentType
          }, null, 8, ["type", "title"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Theme" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentType,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.currentType = $event),
            title: "Alert Type",
            options: $setup.alertTypeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.currentTheme,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.currentTheme = $event),
            title: "Theme",
            options: [
              {
                label: "Dark Theme",
                value: "dark"
              },
              {
                label: "Light Theme",
                value: "light"
              }
            ]
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_alert, {
            type: $setup.currentType,
            effect: $setup.currentTheme,
            title: $setup.currentType
          }, null, 8, ["type", "effect", "title"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Customizable Close Button" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.closableState.text,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.closableState.text = $event),
            title: "Custom Close Text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.closableState.closable,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.closableState.closable = $event),
            title: "Closable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_alert, {
            title: $setup.currentType,
            type: $setup.currentType,
            "close-text": $setup.closableState.text,
            closable: $setup.closableState.closable,
            effect: $setup.currentTheme,
            onClose: $setup.fireClose
          }, null, 8, ["title", "type", "close-text", "closable", "effect"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Icon" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.showIcon,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.showIcon = $event),
            title: "Show Icon"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentType,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.currentType = $event),
            title: "Alert Type",
            options: $setup.alertTypeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.currentTheme,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.currentTheme = $event),
            title: "Theme",
            options: [
              {
                label: "Dark Theme",
                value: "dark"
              },
              {
                label: "Light Theme",
                value: "light"
              }
            ]
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_alert, {
            title: $setup.currentType,
            type: $setup.currentType,
            "show-icon": $setup.showIcon,
            effect: $setup.currentTheme
          }, null, 8, ["title", "type", "show-icon", "effect"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Centered Text" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.showIcon,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.showIcon = $event),
            title: "Show Icon"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.centeredText,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.centeredText = $event),
            title: "Centered Text"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_alert, {
            title: $setup.currentType,
            type: $setup.currentType,
            center: $setup.centeredText,
            "show-icon": $setup.showIcon
          }, null, 8, ["title", "type", "center", "show-icon"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Icon and Description" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.description,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.description = $event),
            title: "Description"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.showIcon,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.showIcon = $event),
            title: "Show Icon"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentType,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.currentType = $event),
            title: "Alert Type",
            options: $setup.alertTypeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.currentTheme,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.currentTheme = $event),
            title: "Theme",
            options: [
              {
                label: "Dark Theme",
                value: "dark"
              },
              {
                label: "Light Theme",
                value: "light"
              }
            ]
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_alert, {
            title: $setup.currentType,
            type: $setup.currentType,
            "show-icon": $setup.showIcon,
            effect: $setup.currentTheme,
            description: $setup.description
          }, null, 8, ["title", "type", "show-icon", "effect", "description"])
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
_sfc_main.__file = "src/components/Feedback/alert.story.vue";
const alert_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-53562631"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Feedback/alert.story.vue"]]);
export {
  alert_story as default
};
