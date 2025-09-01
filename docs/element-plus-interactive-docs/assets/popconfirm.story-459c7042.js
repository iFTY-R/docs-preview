import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { p as placementOptions } from "./placementOptions-e1a73a8b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const buttonTypes = [
  {
    label: "primary",
    value: "primary"
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
    label: "danger",
    value: "danger"
  },
  {
    label: "info",
    value: "info"
  },
  {
    label: "text",
    value: "text"
  }
];
const triggerTypes = [
  {
    label: "click",
    value: "click"
  },
  {
    label: "hover",
    value: "hover"
  },
  {
    label: "focus",
    value: "focus"
  },
  {
    label: "contextmenu",
    value: "contextmenu"
  }
];
const effectTypes = [
  {
    value: "light",
    label: "light"
  },
  {
    value: "dark",
    label: "dark"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "popconfirm.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      effect: "light",
      title: "Are you sure to delete this?",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonType: "primary",
      cancelButtonType: "text",
      trigger: "click",
      placement: "bottom",
      disabled: false,
      hideIcon: false,
      showArrow: true,
      showAfter: 0,
      hideAfter: 0,
      width: 150,
      offset: 0
    });
    const basicSource = computed(() => {
      return `<el-popconfirm${isAttribute(
        basicData.effect !== "light",
        'effect="dark"'
      )}${isAttribute(
        basicData.title !== "",
        `title="${basicData.title}"`
      )}${isAttribute(
        basicData.confirmButtonText !== "Yes",
        `confirmButtonText="${basicData.confirmButtonText}"`
      )}${isAttribute(
        basicData.cancelButtonText !== "No",
        `cancelButtonText="${basicData.cancelButtonText}"`
      )}${isAttribute(
        basicData.confirmButtonType !== "primary",
        `confirmButtonType="${basicData.confirmButtonType}"`
      )}${isAttribute(
        basicData.cancelButtonType !== "text",
        `cancelButtonType="${basicData.cancelButtonType}"`
      )}${isAttribute(
        basicData.trigger !== "click",
        `trigger="${basicData.trigger}"`
      )}${isAttribute(
        basicData.placement !== "bottom",
        `placement="${basicData.placement}"`
      )}${isAttribute(
        basicData.disabled,
        "disabled"
      )}${isAttribute(
        basicData.hideIcon,
        "hideIcon"
      )}${isAttribute(
        !basicData.showArrow,
        ':showArrow="false"'
      )}${isAttribute(
        basicData.showAfter !== 0,
        `:showAfter="${basicData.showAfter}"`
      )}${isAttribute(
        basicData.hideAfter !== 0,
        `:hideAfter="${basicData.hideAfter}"`
      )}${isAttribute(
        basicData.width !== 150,
        `:width="${basicData.width}"`
      )}${isAttribute(
        basicData.offset !== 0,
        `:offset="${basicData.offset}"`
      )}
>
  <template #reference>
    <el-button>el-popconfirm</el-button>
  </template>
</el-popover>`;
    });
    const __returned__ = { basicData, basicSource, get buttonTypes() {
      return buttonTypes;
    }, get effectTypes() {
      return effectTypes;
    }, get triggerTypes() {
      return triggerTypes;
    }, get placementOptions() {
      return placementOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_popconfirm = resolveComponent("el-popconfirm");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Feedback/Popconfirm",
    icon: "grommet-icons:tooltip"
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
            title: "effect",
            options: $setup.effectTypes
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.title,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.title = $event),
            title: "title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.confirmButtonText,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.confirmButtonText = $event),
            title: "confirmButtonText"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.cancelButtonText,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.cancelButtonText = $event),
            title: "cancelButtonText"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.basicData.confirmButtonType,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.confirmButtonType = $event),
            title: "confirmButtonType",
            options: $setup.buttonTypes
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.basicData.cancelButtonType,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.cancelButtonType = $event),
            title: "cancelButtonType",
            options: $setup.buttonTypes
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.basicData.trigger,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.trigger = $event),
            title: "trigger",
            options: $setup.triggerTypes
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.basicData.placement,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicData.placement = $event),
            title: "placement",
            options: $setup.placementOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.disabled,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.basicData.disabled = $event),
            title: "disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.hideIcon,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.basicData.hideIcon = $event),
            title: "hideIcon"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.showArrow,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.basicData.showArrow = $event),
            title: "showArrow"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.showAfter,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.basicData.showAfter = $event),
            title: "showAfter"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.hideAfter,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.basicData.hideAfter = $event),
            title: "hideAfter"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.width,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.basicData.width = $event),
            title: "width"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.offset,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.basicData.offset = $event),
            title: "offset"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_popconfirm, {
            effect: $setup.basicData.effect,
            title: $setup.basicData.title,
            "confirm-button-text": $setup.basicData.confirmButtonText,
            "cancel-button-text": $setup.basicData.cancelButtonText,
            "confirm-button-type": $setup.basicData.confirmButtonType,
            "cancel-button-type": $setup.basicData.cancelButtonType,
            trigger: $setup.basicData.trigger,
            placement: $setup.basicData.placement,
            disabled: $setup.basicData.disabled,
            "hide-icon": $setup.basicData.hideIcon,
            "show-arrow": $setup.basicData.showArrow,
            "show-after": $setup.basicData.showAfter,
            "hide-after": $setup.basicData.hideAfter,
            width: $setup.basicData.width,
            offset: $setup.basicData.offset
          }, {
            reference: withCtx(() => [
              createVNode(_component_el_button, null, {
                default: withCtx(() => [
                  createTextVNode(" el-popover ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["effect", "title", "confirm-button-text", "cancel-button-text", "confirm-button-type", "cancel-button-type", "trigger", "placement", "disabled", "hide-icon", "show-arrow", "show-after", "hide-after", "width", "offset"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Feedback/Popconfirm/popconfirm.story.vue";
const popconfirm_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Feedback/Popconfirm/popconfirm.story.vue"]]);
export {
  popconfirm_story as default
};
