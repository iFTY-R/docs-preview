import { ax as defineComponent, ay as ref, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aW as createCommentVNode } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "calendar.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value = ref(/* @__PURE__ */ new Date());
    const range = ref([/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()]);
    const basicSource = computed(() => {
      return `<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())
<\/script>

<template>
  <el-calendar v-model="value" />
</template>
`;
    });
    const __returned__ = { value, range, basicSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_calendar = resolveComponent("el-calendar");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Calendar",
    icon: "ph:calendar-light",
    layout: {
      type: "grid",
      width: 600
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource,
        range: $setup.range
      }, {
        controls: withCtx(() => [
          createCommentVNode("  ")
        ]),
        default: withCtx(() => [
          createVNode(_component_el_calendar, {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source", "range"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Data/Calendar/calendar.story.vue";
const calendar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/Calendar/calendar.story.vue"]]);
export {
  calendar_story as default
};
