import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aX as normalizeStyle, bs as unref, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { u as useElDisplay } from "./useEl-0078f831.js";
import { p as placementOptions } from "./placementOptions-e1a73a8b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tooltip.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      effect: "dark",
      content: "content",
      rawContent: false,
      placement: "bottom",
      visible: null,
      disabled: false,
      offset: 0,
      showAfter: 0,
      showArrow: true,
      hideAfter: 0,
      enterable: true,
      trigger: "hover"
    });
    const basicSource = computed(() => {
      return `<el-tooltip${isAttribute(
        basicData.effect !== "dark",
        'effect="light"'
      )}${isAttribute(
        basicData.content !== "",
        `content="${basicData.content}"`
      )}${isAttribute(
        basicData.rawContent,
        "raw-content"
      )}${isAttribute(
        basicData.placement !== "bottom",
        `placement="${basicData.placement}"`
      )}${isAttribute(
        basicData.visible !== null,
        `:visible="${basicData.visible}"`
      )}${isAttribute(
        basicData.disabled,
        "disabled"
      )}${isAttribute(
        basicData.offset !== 0,
        `:offset="${basicData.offset}"`
      )}${isAttribute(
        basicData.showAfter !== 0,
        `:show-after="${basicData.showAfter}"`
      )}${isAttribute(
        !basicData.showArrow,
        ':show-arrow="false"'
      )}${isAttribute(
        basicData.hideAfter !== 0,
        `:hide-after="${basicData.hideAfter}"`
      )}${isAttribute(
        !basicData.enterable,
        ':enterable="false"'
      )}${isAttribute(
        basicData.trigger !== "hover",
        `trigger="${basicData.trigger}"`
      )}
>
  <el-button>el-tooltip</el-button>
</el-tooltip>`;
    });
    const __returned__ = { basicData, basicSource, get placementOptions() {
      return placementOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Feedback/Tooltip",
    icon: "mdi:tooltip-minus-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.effect,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.effect = $event),
            title: "effetc",
            options: [
              {
                value: "light",
                label: "light"
              },
              {
                value: "dark",
                label: "dark"
              }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.rawContent,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.rawContent = $event),
            title: "raw-content"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.content,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.content = $event),
            title: "content"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.basicData.placement,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.placement = $event),
            title: "placement",
            options: $setup.placementOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.disabled,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.disabled = $event),
            title: "disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.visible,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.visible = $event),
            style: normalizeStyle(unref(useElDisplay)(!$setup.basicData.disabled)),
            title: "visible",
            options: [
              {
                value: true,
                label: "true"
              },
              {
                value: false,
                label: "false"
              },
              {
                value: null,
                label: "null"
              }
            ]
          }, null, 8, ["modelValue", "style"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.offset,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.offset = $event),
            title: "offset"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.showAfter,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicData.showAfter = $event),
            title: "show-after"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.hideAfter,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.basicData.hideAfter = $event),
            title: "hide-after"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.showArrow,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.basicData.showArrow = $event),
            title: "show-arrow"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.enterable,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.basicData.enterable = $event),
            title: "enterable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.basicData.trigger,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.basicData.trigger = $event),
            title: "trigger",
            options: [
              {
                value: "hover",
                label: "hover"
              },
              {
                value: "focus",
                label: "focus"
              },
              {
                value: "click",
                label: "click"
              }
            ]
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_tooltip, {
            effect: $setup.basicData.effect,
            content: $setup.basicData.content,
            "raw-content": $setup.basicData.rawContent,
            placement: $setup.basicData.placement,
            visible: $setup.basicData.visible,
            disabled: $setup.basicData.disabled,
            offset: $setup.basicData.offset,
            "show-after": $setup.basicData.showAfter,
            "show-arrow": $setup.basicData.showArrow,
            "hide-after": $setup.basicData.hideAfter,
            enterable: $setup.basicData.enterable,
            trigger: $setup.basicData.trigger
          }, {
            default: withCtx(() => [
              createVNode(_component_el_button, null, {
                default: withCtx(() => [
                  createTextVNode("el-tooltip")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["effect", "content", "raw-content", "placement", "visible", "disabled", "offset", "show-after", "show-arrow", "hide-after", "enterable", "trigger"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Feedback/Tooltip/tooltip.story.vue";
const tooltip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Feedback/Tooltip/tooltip.story.vue"]]);
export {
  tooltip_story as default
};
