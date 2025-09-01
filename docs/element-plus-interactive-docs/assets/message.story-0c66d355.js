import { ax as defineComponent, aY as reactive, ay as ref, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode, be as ElMessage, aK as logEvent, b6 as h } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const typeList = [
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "message.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicMessageData = reactive({
      message: "message",
      offset: ref(20),
      center: ref(true),
      showClose: ref(true),
      duration: ref(3e3),
      type: ref("info"),
      typeList
    });
    function basicMessageOpen() {
      const basicElMessageInstance = ElMessage({
        message: basicMessageData.message,
        offset: basicMessageData.offset,
        center: basicMessageData.center,
        showClose: basicMessageData.showClose,
        duration: basicMessageData.duration,
        type: basicMessageData.type,
        onClose: () => {
          logEvent("onClose", { log: "basicElMessageInstance will be closed" });
          basicElMessageInstance.close();
        }
      });
    }
    const basicMessageSource = computed(() => {
      return `<script setup lang="ts">
  import { h } from 'vue'
  import { ElMessage } from 'element-plus'

  const basicMessageOpen = () => {
    const basicElMessageInstance = ElMessage({
      message: '${basicMessageData.message}',
      offset: ${basicMessageData.offset},${basicMessageData.center ? `
      center: ${basicMessageData.center},` : ""}${basicMessageData.showClose ? `
      showClose: ${basicMessageData.showClose},` : ""}
      duration: ${basicMessageData.duration},
      type: '${basicMessageData.type}',
      onClose: () => {
        console.log(log: 'basicElMessageInstance will be closed')
        basicElMessageInstance.close()
      },
    })
  }
<\/script>

<template>
  <el-button :plain="true" @click="basicMessageOpen">Show basic message</el-button>
</template>`;
    });
    function VNodeMessageOpen() {
      ElMessage({
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    }
    const VNodeMessageSource = computed(() => {
      return `<script setup lang="ts">
  import { h } from 'vue'
  import { ElMessage } from 'element-plus'

  const VNodeMessageOpen = () => {
    ElMessage({
      message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
      ]),
    })
  }
<\/script>

<template>
  <el-button :plain="true" @click="VNodeMessageOpen">show VNode message</el-button>
</template>`;
    });
    const htmlMessageData = reactive({
      message: "<strong>This is <i>HTML</i> string</strong>",
      dangerouslyUseHTMLString: ref(true),
      type: ref("info"),
      typeList
    });
    function htmlMessageOpen() {
      ElMessage({
        message: htmlMessageData.message,
        dangerouslyUseHTMLString: htmlMessageData.dangerouslyUseHTMLString,
        type: htmlMessageData.type
      });
    }
    const htmlMessageSource = computed(() => {
      return `<script setup lang="ts">
  import { ElMessage } from 'element-plus'

  const htmlMessageOpen = () => {
    ElMessage({
      message: '${htmlMessageData.message}',${htmlMessageData.dangerouslyUseHTMLString ? `
      dangerouslyUseHTMLString: ${htmlMessageData.dangerouslyUseHTMLString},` : ""}
      type: '${htmlMessageData.type}',
    })
  }
<\/script>

<template>
  <el-button :plain="true" @click="htmlMessageOpen">Show HTML message</el-button>
</template>`;
    });
    const groupingMessageData = reactive({
      message: "message",
      grouping: ref(true),
      type: ref("info"),
      typeList
    });
    function groupingMessageOpen() {
      ElMessage({
        message: groupingMessageData.message,
        grouping: groupingMessageData.grouping,
        type: groupingMessageData.type
      });
    }
    const groupingMessageSource = computed(() => {
      return `<script setup lang="ts">
  import { ElMessage } from 'element-plus'

  const groupingMessageOpen = () => {
    ElMessage({
      message: '${groupingMessageData.message}',${groupingMessageData.grouping ? `
      grouping: ${groupingMessageData.grouping},` : ""}
      type: '${groupingMessageData.type}',
    })
  }
<\/script>

<template>
  <el-button :plain="true" @click="groupingMessageOpen">Show grouping message</el-button>
</template>`;
    });
    const __returned__ = { basicMessageData, basicMessageOpen, basicMessageSource, VNodeMessageOpen, VNodeMessageSource, htmlMessageData, htmlMessageOpen, htmlMessageSource, groupingMessageData, groupingMessageOpen, groupingMessageSource, get typeList() {
      return typeList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstTextarea = resolveComponent("HstTextarea");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Feedback/Message",
    icon: "mdi:message-text-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicMessageSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.basicMessageData.message,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicMessageData.message = $event),
            title: "Message"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicMessageData.offset,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicMessageData.offset = $event),
            title: "Offset"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicMessageData.center,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicMessageData.center = $event),
            title: "Center"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicMessageData.showClose,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicMessageData.showClose = $event),
            title: "Close"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicMessageData.duration,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicMessageData.duration = $event),
            title: "Duration"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.basicMessageData.type,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicMessageData.type = $event),
            title: "Type",
            options: $setup.basicMessageData.typeList
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, {
            plain: true,
            onClick: $setup.basicMessageOpen
          }, {
            default: withCtx(() => [
              createTextVNode(" Show basic message ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "VNode Message",
        source: $setup.VNodeMessageSource,
        icon: "clarity:nodes-line"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_button, {
            plain: true,
            onClick: $setup.VNodeMessageOpen
          }, {
            default: withCtx(() => [
              createTextVNode(" show VNode message ")
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
        source: $setup.htmlMessageSource,
        icon: "bi:filetype-html"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstTextarea, {
            modelValue: $setup.htmlMessageData.message,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.htmlMessageData.message = $event),
            title: "Message"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.htmlMessageData.dangerouslyUseHTMLString,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.htmlMessageData.dangerouslyUseHTMLString = $event),
            title: "useHTMLString"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.htmlMessageData.type,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.htmlMessageData.type = $event),
            title: "Type",
            options: $setup.htmlMessageData.typeList
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, {
            plain: true,
            onClick: $setup.htmlMessageOpen
          }, {
            default: withCtx(() => [
              createTextVNode(" Show HTML message ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Grouping Message",
        source: $setup.groupingMessageSource,
        icon: "uit:layer-group"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.groupingMessageData.message,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.groupingMessageData.message = $event),
            title: "Message"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.groupingMessageData.grouping,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.groupingMessageData.grouping = $event),
            title: "Grouping"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.groupingMessageData.type,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.groupingMessageData.type = $event),
            title: "Type",
            options: $setup.groupingMessageData.typeList
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, {
            plain: true,
            onClick: $setup.groupingMessageOpen
          }, {
            default: withCtx(() => [
              createTextVNode(" Show grouping message ")
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
_sfc_main.__file = "src/components/Feedback/Message/message.story.vue";
const message_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Feedback/Message/message.story.vue"]]);
export {
  message_story as default
};
