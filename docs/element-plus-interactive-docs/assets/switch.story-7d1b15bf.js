import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, a_ as check_default, bd as close_default, aK as logEvent, aD as createVNode, be as ElMessage } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = '<p>Switch is used for switching between two opposing states.</p>\n<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>Bind v-model to a Boolean typed variable.</p>\n<h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-hidden="true">#</a></h2>\n<p>Switchable buttons of different sizes</p>\n<h2 id="text-description" tabindex="-1">Text description <a class="header-anchor" href="#text-description" aria-hidden="true">#</a></h2>\n<p>You can add active-text and inactive-text attribute to show texts. use inline-prompt attribute to control text is displayed inside dot.</p>\n<p>You can add active-text and inactive-text attribute to show texts.</p>\n<h2 id="display-custom-icons" tabindex="-1">Display custom icons <a class="header-anchor" href="#display-custom-icons" aria-hidden="true">#</a></h2>\n<p>You can add active-icon and inactive-icon attribute to show icons. use inline-prompt attribute to control icon is displayed inside dot.</p>\n<h2 id="extended-value-types" tabindex="-1">Extended value types <a class="header-anchor" href="#extended-value-types" aria-hidden="true">#</a></h2>\n<p>You can set active-value and inactive-value attributes. They both receive a Boolean, String or Number typed value.</p>\n<h2 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h2>\n<p>Adding the disabled attribute disables Switch.</p>\n<h2 id="loading" tabindex="-1">Loading <a class="header-anchor" href="#loading" aria-hidden="true">#</a></h2>\n<p>Setting the loading attribute to true indicates a loading state on the Switch.</p>\n<h2 id="prevent-switching" tabindex="-1">prevent switching <a class="header-anchor" href="#prevent-switching" aria-hidden="true">#</a></h2>\n<p>the before-change property, If false is returned or a Promise is returned and then is rejected, will stop switching.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "switch.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const isOpening = ref(true);
    const isOpening_sec = ref(false);
    const isInlinePrompt = ref(false);
    const activeColor = ref("#409eff");
    const inActiveColor = ref("#dcdfe6");
    const sizeValue = ref("small");
    const isDisabled = ref(true);
    const isLoading = ref(true);
    const preventSwitchValue = ref(
      {
        value: false,
        value_sec: false,
        loading: false,
        loading_sec: false
      }
    );
    const switchValue = ref(
      {
        value: 0,
        activeValue: 100,
        inActiveValue: 0
      }
    );
    const switchText = ref(
      {
        activeText: "Y",
        inActiveText: "F"
      }
    );
    function beforeChange() {
      preventSwitchValue.value.loading = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          preventSwitchValue.value.loading = false;
          ElMessage.success("Switch success");
          return resolve(true);
        }, 1e3);
      });
    }
    function beforeChangeSecond() {
      preventSwitchValue.value.loading_sec = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          preventSwitchValue.value.loading_sec = false;
          ElMessage.error("Switch failed");
          return reject(new Error("Error"));
        }, 1e3);
      });
    }
    const activeColorOptions = [
      {
        label: "default",
        value: "#409eff"
      },
      {
        label: "green",
        value: "#13ce66"
      },
      {
        label: "red",
        value: "#ff4949"
      }
    ];
    const inActiveColorOptions = [
      {
        label: "default",
        value: "#dcdfe6"
      },
      {
        label: "grey",
        value: "#747b92"
      },
      {
        label: "black",
        value: "#000000"
      }
    ];
    const sizeValueOptions = [
      {
        label: "small",
        value: "small"
      },
      {
        label: "normal",
        value: "normal"
      },
      {
        label: "large",
        value: "large"
      }
    ];
    const __returned__ = { isOpening, isOpening_sec, isInlinePrompt, activeColor, inActiveColor, sizeValue, isDisabled, isLoading, preventSwitchValue, switchValue, switchText, beforeChange, beforeChangeSecond, activeColorOptions, inActiveColorOptions, sizeValueOptions, get Check() {
      return check_default;
    }, get Close() {
      return close_default;
    }, get logEvent() {
      return logEvent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_switch = resolveComponent("el-switch");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstText = resolveComponent("HstText");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Switch",
    icon: "mdi:toggle-switch-off-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isOpening,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.isOpening = $event),
            title: "switch value",
            options: $setup.isOpening
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.activeColor,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.activeColor = $event),
            title: "activeColor",
            options: $setup.activeColorOptions
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.inActiveColor,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.inActiveColor = $event),
            title: "inActiveColor",
            options: $setup.inActiveColorOptions
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_switch, {
            modelValue: $setup.isOpening,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.isOpening = $event),
            "active-color": $setup.activeColor,
            "inactive-color": $setup.inActiveColor
          }, null, 8, ["modelValue", "active-color", "inactive-color"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Sizes" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.sizeValue,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.sizeValue = $event),
            title: "Sizes",
            options: $setup.sizeValueOptions
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_switch, {
            modelValue: $setup.isOpening,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.isOpening = $event),
            "active-text": "open",
            "inactive-text": "close",
            size: $setup.sizeValue
          }, null, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Text description" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isInlinePrompt,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.isInlinePrompt = $event),
            title: "inlinePrompt",
            options: $setup.isInlinePrompt
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.switchText.activeText,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.switchText.activeText = $event),
            title: "activeText"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.switchText.inActiveText,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.switchText.inActiveText = $event),
            title: "inActiveText"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_switch, {
            modelValue: $setup.isOpening,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.isOpening = $event),
            "active-text": $setup.switchText.activeText,
            "inactive-text": $setup.switchText.inActiveText,
            "inline-prompt": $setup.isInlinePrompt
          }, null, 8, ["modelValue", "active-text", "inactive-text", "inline-prompt"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Display custom icons" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isInlinePrompt,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.isInlinePrompt = $event),
            title: "inlinePrompt",
            options: $setup.isInlinePrompt
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_switch, {
            modelValue: $setup.isOpening,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.isOpening = $event),
            "active-icon": $setup.Check,
            "inactive-icon": $setup.Close,
            "inline-prompt": $setup.isInlinePrompt
          }, null, 8, ["modelValue", "active-icon", "inactive-icon", "inline-prompt"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Extended value types" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.switchValue.activeValue,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.switchValue.activeValue = $event),
            title: "activeValue"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.switchValue.inActiveValue,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.switchValue.inActiveValue = $event),
            title: "inActiveValue"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_tooltip, {
            content: `Switch value: ${$setup.switchValue.value}`,
            placement: "bottom"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_switch, {
                modelValue: $setup.switchValue.value,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.switchValue.value = $event),
                "active-value": $setup.switchValue.activeValue,
                "inactive-value": $setup.switchValue.inActiveValue
              }, null, 8, ["modelValue", "active-value", "inactive-value"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["content"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isDisabled,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.isDisabled = $event),
            title: "disabled",
            options: $setup.isDisabled
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_switch, {
            modelValue: $setup.isOpening,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.isOpening = $event),
            style: { "margin-right": "8px" },
            disabled: $setup.isDisabled
          }, null, 8, ["modelValue", "disabled"]),
          createVNode(_component_el_switch, {
            modelValue: $setup.isOpening_sec,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.isOpening_sec = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Loading" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isLoading,
            "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $setup.isLoading = $event),
            title: "loading",
            options: $setup.isLoading
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_switch, {
            modelValue: $setup.isOpening,
            "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.isOpening = $event),
            style: { "margin-right": "8px" },
            loading: $setup.isLoading
          }, null, 8, ["modelValue", "loading"]),
          createVNode(_component_el_switch, {
            modelValue: $setup.isOpening_sec,
            "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $setup.isOpening_sec = $event),
            style: { "margin-right": "8px" },
            loading: $setup.isLoading
          }, null, 8, ["modelValue", "loading"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "prevent switching" }, {
        default: withCtx(() => [
          createVNode(_component_el_switch, {
            modelValue: $setup.preventSwitchValue.value,
            "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $setup.preventSwitchValue.value = $event),
            style: { "margin-right": "8px" },
            "before-change": $setup.beforeChange,
            loading: $setup.preventSwitchValue.loading,
            onChange: _cache[22] || (_cache[22] = ($event) => $setup.logEvent("change", { change: "switch value has changed" })),
            onClick: _cache[23] || (_cache[23] = ($event) => $setup.logEvent("click", $event))
          }, null, 8, ["modelValue", "loading"]),
          createVNode(_component_el_switch, {
            modelValue: $setup.preventSwitchValue.value_sec,
            "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => $setup.preventSwitchValue.value_sec = $event),
            loading: $setup.preventSwitchValue.loading_sec,
            "before-change": $setup.beforeChangeSecond,
            onChange: _cache[25] || (_cache[25] = ($event) => $setup.logEvent("change", { change: "switch value has changed" })),
            onClick: _cache[26] || (_cache[26] = ($event) => $setup.logEvent("click", $event))
          }, null, 8, ["modelValue", "loading"])
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
_sfc_main.__file = "src/components/Form/switch.story.vue";
const switch_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/switch.story.vue"]]);
export {
  switch_story as default
};
