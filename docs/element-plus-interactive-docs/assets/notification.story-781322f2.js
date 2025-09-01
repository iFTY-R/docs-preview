import { ax as defineComponent, aY as reactive, ay as ref, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode, by as ElNotification } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const typeList = [
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
    label: "info",
    value: "info"
  },
  {
    label: "error",
    value: "error"
  }
];
const positionList = [
  {
    label: "top-right",
    value: "top-right"
  },
  {
    label: "top-left",
    value: "top-left"
  },
  {
    label: "bottom-right",
    value: "bottom-right"
  },
  {
    label: "bottom-left",
    value: "bottom-left"
  }
];
const notification_story_vue_vue_type_style_index_0_scoped_3297d3e4_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notification.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicNotificationData = reactive({
      title: "title",
      message: "message",
      type: ref(""),
      typeList
    });
    function basicNotificationOpen() {
      ElNotification({
        title: basicNotificationData.title,
        message: basicNotificationData.message,
        type: basicNotificationData.type
      });
    }
    const basicSource = computed(() => {
      return `<script setup lang="ts">
  const basicNotificationOpen = () => {
    ElNotification({
      title: '${basicNotificationData.title}',
      message: '${basicNotificationData.message}',${isAttribute(
        basicNotificationData.type !== "",
        `    type: '${basicNotificationData.type}'`
      )}
    })
  }
<\/script>

<template>
  <el-button @click="basicNotificationOpen">
    basicNotification
  </el-button> 
</template>`;
    });
    const customCloseNotificationData = reactive({
      title: "title",
      message: "message",
      duration: ref(4500),
      showClose: ref(true)
    });
    function customCloseNotificationOpen() {
      ElNotification({
        title: customCloseNotificationData.title,
        message: customCloseNotificationData.message,
        duration: customCloseNotificationData.duration,
        showClose: customCloseNotificationData.showClose
      });
    }
    const customCloseSource = computed(() => {
      return `<script setup lang="ts">
  const customCloseNotificationOpen = () => {
    ElNotification({
      title: '${customCloseNotificationData.title}',
      message: '${customCloseNotificationData.message}',
      duration: ${customCloseNotificationData.duration},${isAttribute(
        !customCloseNotificationData.showClose,
        `    showClose: ${customCloseNotificationData.showClose}`
      )}
    })
  }
<\/script>

<template>
  <el-button @click="customCloseNotificationOpen">
    customCloseNotification
  </el-button> 
</template>`;
    });
    const positionNotificationData = reactive({
      title: "title",
      message: "message",
      position: ref("top-right"),
      offset: ref(0),
      positionList
    });
    function positionNotificationOpen() {
      ElNotification({
        title: positionNotificationData.title,
        message: positionNotificationData.message,
        position: positionNotificationData.position,
        offset: positionNotificationData.offset
      });
    }
    const positionSource = computed(() => {
      return `<script setup lang="ts">
  const positionNotificationOpen = () => {
    ElNotification({
      title: '${positionNotificationData.title}',
      message: '${positionNotificationData.message}',${isAttribute(
        positionNotificationData.offset !== 0,
        `    offset: ${positionNotificationData.offset}`
      )}${isAttribute(
        positionNotificationData.position !== "top-right",
        `    position: '${positionNotificationData.position}'`
      )}
    })
  }
<\/script>

<template>
  <el-button @click="positionNotificationOpen">
    positionNotification
  </el-button> 
</template>`;
    });
    const htmlMessageNotificationData = reactive({
      title: "title",
      message: "message",
      dangerouslyUseHTMLString: ref(true)
    });
    function htmlMessageNotificationOpen() {
      ElNotification({
        title: htmlMessageNotificationData.title,
        dangerouslyUseHTMLString: htmlMessageNotificationData.dangerouslyUseHTMLString,
        message: htmlMessageNotificationData.message
      });
    }
    const htmlMessageNotificationSource = computed(() => {
      return `<script setup lang="ts">
  const htmlMessageNotificationOpen = () => {
    ElNotification({
      title: '${htmlMessageNotificationData.title}',
      message: '${htmlMessageNotificationData.message}',
      dangerouslyUseHTMLString: ${htmlMessageNotificationData.dangerouslyUseHTMLString},
    })
  }
<\/script>

<template>
  <el-button @click="htmlMessageNotificationOpen">
    htmlMessageNotification
  </el-button> 
</template>`;
    });
    const __returned__ = { basicNotificationData, basicNotificationOpen, basicSource, customCloseNotificationData, customCloseNotificationOpen, customCloseSource, positionNotificationData, positionNotificationOpen, positionSource, htmlMessageNotificationData, htmlMessageNotificationOpen, htmlMessageNotificationSource, get positionList() {
      return positionList;
    }, get typeList() {
      return typeList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstTextarea = resolveComponent("HstTextarea");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Feedback/Notification",
    icon: "ri:notification-badge-line"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.basicNotificationData.title,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicNotificationData.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicNotificationData.message,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicNotificationData.message = $event),
            title: "Message"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.basicNotificationData.type,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicNotificationData.type = $event),
            title: "Type",
            options: $setup.basicNotificationData.typeList
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, { onClick: $setup.basicNotificationOpen }, {
            default: withCtx(() => [
              createTextVNode(" basicNotification ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Custom Show",
        source: $setup.customCloseSource,
        icon: "mdi:close-circle-multiple-outline"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.customCloseNotificationData.title,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.customCloseNotificationData.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.customCloseNotificationData.message,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.customCloseNotificationData.message = $event),
            title: "Message"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.customCloseNotificationData.duration,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.customCloseNotificationData.duration = $event),
            title: "Duration"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.customCloseNotificationData.showClose,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.customCloseNotificationData.showClose = $event),
            title: "ShowClose"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, { onClick: $setup.customCloseNotificationOpen }, {
            default: withCtx(() => [
              createTextVNode(" customCloseNotification ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Position",
        source: $setup.positionSource,
        icon: "fluent:position-to-back-24-regular"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.positionNotificationData.title,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.positionNotificationData.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.positionNotificationData.message,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.positionNotificationData.message = $event),
            title: "Message"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.positionNotificationData.offset,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.positionNotificationData.offset = $event),
            title: "Offset"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.positionNotificationData.position,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.positionNotificationData.position = $event),
            title: "Position",
            options: $setup.positionNotificationData.positionList
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, { onClick: $setup.positionNotificationOpen }, {
            default: withCtx(() => [
              createTextVNode(" positionNotification ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "HTML Message",
        source: $setup.htmlMessageNotificationSource,
        icon: "bi:filetype-html"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.htmlMessageNotificationData.title,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.htmlMessageNotificationData.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.htmlMessageNotificationData.dangerouslyUseHTMLString,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.htmlMessageNotificationData.dangerouslyUseHTMLString = $event),
            title: "useHTMLString"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstTextarea, {
            modelValue: $setup.htmlMessageNotificationData.message,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.htmlMessageNotificationData.message = $event),
            title: "Message"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, { onClick: $setup.htmlMessageNotificationOpen }, {
            default: withCtx(() => [
              createTextVNode(" htmlMessageNotification ")
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
_sfc_main.__file = "src/components/Feedback/Notification/notification.story.vue";
const notification_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3297d3e4"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Feedback/Notification/notification.story.vue"]]);
export {
  notification_story as default
};
