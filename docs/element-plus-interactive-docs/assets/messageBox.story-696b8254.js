import { ax as defineComponent, ay as ref, bg as watch, bs as unref, aZ as onMounted, bv as lodashExports, bk as edit_default, bw as warning_default, az as resolveComponent, aA as openBlock, aE as createElementBlock, aD as createVNode, aG as Fragment, aQ as computed, aB as createBlock, aC as withCtx, aH as createTextVNode, bx as ElMessageBox } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "controls",
  props: {
    modelValue: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const messageBoxData = ref({});
    watch([messageBoxData], () => {
      const data = unref(messageBoxData);
      if (data !== unref(props.modelValue))
        emit("update:modelValue", data);
    });
    watch([props], () => {
      if (props.modelValue && unref(messageBoxData) !== unref(props.modelValue))
        messageBoxData.value = props.modelValue;
    });
    onMounted(() => {
      if (lodashExports.isNil(props.modelValue))
        emit("update:modelValue", lodashExports.cloneDeep(defaultMessageBoxOptions));
      else
        messageBoxData.value = props.modelValue;
    });
    const __returned__ = { props, emit, messageBoxData, get Edit() {
      return edit_default;
    }, get Warning() {
      return warning_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstText = resolveComponent("HstText");
  const _component_HstTextarea = resolveComponent("HstTextarea");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createVNode(_component_HstText, {
        modelValue: $setup.messageBoxData.title,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.messageBoxData.title = $event),
        title: "title"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstTextarea, {
        modelValue: $setup.messageBoxData.message,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.messageBoxData.message = $event),
        title: "message"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstSelect, {
        modelValue: $setup.messageBoxData.type,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.messageBoxData.type = $event),
        title: "type",
        options: [
          {
            label: "undefined",
            value: void 0
          },
          "success",
          "warning",
          "info",
          "error"
        ]
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstSelect, {
        modelValue: $setup.messageBoxData.icon,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.messageBoxData.icon = $event),
        title: "icon",
        options: [
          {
            label: "undefined",
            value: void 0
          },
          {
            label: "Edit",
            value: $setup.Edit
          },
          {
            label: "Warning",
            value: $setup.Warning
          }
        ]
      }, null, 8, ["modelValue", "options"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.messageBoxData.showClose,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.messageBoxData.showClose = $event),
        title: "showClose"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.messageBoxData.center,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.messageBoxData.center = $event),
        title: "center"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.messageBoxData.draggable,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.messageBoxData.draggable = $event),
        title: "draggable"
      }, null, 8, ["modelValue"])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
_sfc_main$1.__file = "src/components/Feedback/MessageBox/controls.vue";
const controls = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Feedback/MessageBox/controls.vue"]]);
const defaultMessageBoxOptions = {
  title: "title",
  message: "message",
  type: void 0,
  // histoire 0.14.2 HstSelect的v-model被定义为string类型，但从HstSelect的options属性可以看出它是支持非string类型数据的，因此此处用any
  icon: void 0,
  showClose: true,
  center: false,
  draggable: false
};
const defaultOptionsKeys = Object.keys(defaultMessageBoxOptions);
function genOptionCode(options, titleAndMessage) {
  return `
const option = {
${Object.keys(options).filter((key) => {
    if (!titleAndMessage && (key === "title" || key === "message"))
      return false;
    if (!defaultOptionsKeys.includes(key) || defaultMessageBoxOptions[key] === options[key])
      return false;
    return !lodashExports.isNil(options[key]);
  }).map((key) => {
    let value = options[key];
    if (typeof value === "string")
      value = `"${value}"`;
    else if (key === "icon")
      value = value.name;
    return `  ${key}: ${value},`;
  }).join("\n")}
}
`;
}
function genSourceCode(methodName, data) {
  if (lodashExports.isNil(data))
    data = defaultMessageBoxOptions;
  return `<script setup lang='ts'>
import { ElMessageBox } from 'element-plus'
${genOptionCode(data, !methodName)}
const openMessageBox = () => {
  ElMessageBox${methodName ? `.${methodName}("${data.title}", "${data.message}", ` : "("}option);
}
<\/script>
<template>
  <el-button @click="openMessageBox">Open the ${methodName ? methodName.replace(/^./, methodName[0].toUpperCase()) : "Customization"} Message Box</el-button>
</template>`;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "messageBox.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const alertMessageBoxOptions = ref();
    function openAlertMessageBox() {
      const options = alertMessageBoxOptions.value || lodashExports.cloneDeep(defaultMessageBoxOptions);
      ElMessageBox.alert(options.title, options);
    }
    const alertMessageBoxSource = computed(() => {
      return genSourceCode("alert", unref(alertMessageBoxOptions));
    });
    const confirmMessageBoxOptions = ref();
    function openConfirmMessageBox() {
      const options = confirmMessageBoxOptions.value || lodashExports.cloneDeep(defaultMessageBoxOptions);
      ElMessageBox.confirm(options.title, options);
    }
    const confirmMessageBoxSource = computed(() => {
      return genSourceCode("confirm", unref(confirmMessageBoxOptions));
    });
    const promptMessageBoxOptions = ref();
    function openPromptMessageBox() {
      const options = promptMessageBoxOptions.value || lodashExports.cloneDeep(defaultMessageBoxOptions);
      ElMessageBox.prompt(options.title || "title", options);
    }
    const promptMessageBoxSource = computed(() => {
      return genSourceCode("prompt", unref(promptMessageBoxOptions));
    });
    const customizationMessageBoxOptions = ref();
    function openCustomizationMessageBox() {
      const options = customizationMessageBoxOptions.value || lodashExports.cloneDeep(defaultMessageBoxOptions);
      ElMessageBox(options);
    }
    const customizationMessageBoxSource = computed(() => {
      return genSourceCode(void 0, unref(customizationMessageBoxOptions));
    });
    const __returned__ = { alertMessageBoxOptions, openAlertMessageBox, alertMessageBoxSource, confirmMessageBoxOptions, openConfirmMessageBox, confirmMessageBoxSource, promptMessageBoxOptions, openPromptMessageBox, promptMessageBoxSource, customizationMessageBoxOptions, openCustomizationMessageBox, customizationMessageBoxSource, get controls() {
      return controls;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Feedback/MessageBox",
    icon: "mdi:message-text-fast-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Alert",
        source: $setup.alertMessageBoxSource
      }, {
        controls: withCtx(() => [
          createVNode($setup["controls"], {
            modelValue: $setup.alertMessageBoxOptions,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.alertMessageBoxOptions = $event)
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, { onClick: $setup.openAlertMessageBox }, {
            default: withCtx(() => [
              createTextVNode(" Open the Alert Message Box ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Confirm",
        source: $setup.confirmMessageBoxSource
      }, {
        controls: withCtx(() => [
          createVNode($setup["controls"], {
            modelValue: $setup.confirmMessageBoxOptions,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.confirmMessageBoxOptions = $event)
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, { onClick: $setup.openConfirmMessageBox }, {
            default: withCtx(() => [
              createTextVNode(" Open the Confirm Message Box ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Prompt",
        source: $setup.promptMessageBoxSource
      }, {
        controls: withCtx(() => [
          createVNode($setup["controls"], {
            modelValue: $setup.promptMessageBoxOptions,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.promptMessageBoxOptions = $event)
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, { onClick: $setup.openPromptMessageBox }, {
            default: withCtx(() => [
              createTextVNode(" Open the Prompt Message Box ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Customization",
        source: $setup.customizationMessageBoxSource
      }, {
        controls: withCtx(() => [
          createVNode($setup["controls"], {
            modelValue: $setup.customizationMessageBoxOptions,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.customizationMessageBoxOptions = $event)
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, { onClick: $setup.openCustomizationMessageBox }, {
            default: withCtx(() => [
              createTextVNode(" Open the Customization Message Box ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Feedback/MessageBox/messageBox.story.vue";
const messageBox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Feedback/MessageBox/messageBox.story.vue"]]);
export {
  messageBox_story as default
};
