import { ax as defineComponent, ay as ref, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode, aI as createBaseVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "collapse.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const activeNames = ref(["1"]);
    const accordion = ref(false);
    const firstCollapseItem = reactive({
      title: "Consistency",
      disabled: false
    });
    const secondCollapseItem = reactive({
      title: "Feedback",
      disabled: false
    });
    const source = computed(() => {
      return `<script setup lang="ts">
const activeNames = ref(['1'])
<\/script>

<template>
    <el-collapse v-model="activeNames">
      <el-collapse-item
        title="${firstCollapseItem.title}"
        name="1"${isAttribute(
        firstCollapseItem.disabled,
        "      disabled"
      )}
      >
        Consistent with real life: in line with the process and logic of real
        life, and comply with languages and habits that the users are used to;
      </el-collapse-item>
      <el-collapse-item
        title="${firstCollapseItem.title}"
        name="2"${isAttribute(
        firstCollapseItem.disabled,
        "      disabled"
      )}
      >
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects;
      </el-collapse-item>
    </el-collapse>
</template>
`;
    });
    const __returned__ = { activeNames, accordion, firstCollapseItem, secondCollapseItem, source };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "First Collapse Item",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Second Collapse Item",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_collapse_item = resolveComponent("el-collapse-item");
  const _component_el_collapse = resolveComponent("el-collapse");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_el_divider = resolveComponent("el-divider");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Collapse",
    icon: "mdi:collapse-all"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.source
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.accordion,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.accordion = $event),
            title: "Accordion"
          }, null, 8, ["modelValue"]),
          createVNode(_component_el_divider, {
            "border-style": "dotted",
            "content-position": "left"
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_HstText, {
            modelValue: $setup.firstCollapseItem.title,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.firstCollapseItem.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.firstCollapseItem.disabled,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.firstCollapseItem.disabled = $event),
            title: "Disable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_el_divider, {
            "border-style": "dotted",
            "content-position": "left"
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_HstText, {
            modelValue: $setup.secondCollapseItem.title,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.secondCollapseItem.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.secondCollapseItem.disabled,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.secondCollapseItem.disabled = $event),
            title: "Disable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_collapse, {
            modelValue: $setup.activeNames,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.activeNames = $event),
            accordion: $setup.accordion
          }, {
            default: withCtx(() => [
              createVNode(_component_el_collapse_item, {
                title: $setup.firstCollapseItem.title,
                disabled: $setup.firstCollapseItem.disabled,
                name: "1"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              createVNode(_component_el_collapse_item, {
                title: $setup.secondCollapseItem.title,
                disabled: $setup.secondCollapseItem.disabled,
                name: "2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "accordion"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Data/Collapse/collapse.story.vue";
const collapse_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/Collapse/collapse.story.vue"]]);
export {
  collapse_story as default
};
