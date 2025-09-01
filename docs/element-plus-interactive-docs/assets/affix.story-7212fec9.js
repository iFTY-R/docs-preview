import { ax as defineComponent, ay as ref, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aK as logEvent, aD as createVNode, aI as createBaseVNode, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const positionList = [
  {
    label: "top",
    value: "top"
  },
  {
    label: "bottom",
    value: "bottom"
  }
];
const affix_story_vue_vue_type_style_index_0_scoped_9a9b6d1d_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "affix.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const affixData = ref({
      offset: ref(50),
      position: ref("top"),
      zIndex: 100,
      positionList
    });
    const affixSource = computed(() => {
      return `<template>
  <div class="wrapper">
    <div class="scroll">
      <div class="affix-container">
        <el-affix
          position="${affixData.value.position}"${isAttribute(Boolean(affixData.value.offset) || affixData.value.offset === 0, `        :offset="${affixData.value.offset}"`)}${isAttribute(Boolean(affixData.value.zIndex) || affixData.value.zIndex === 0, `        :z-index="${affixData.value.zIndex}"`)}
        >
          <el-button type="primary">
            Affix content
          </el-button>
        </el-affix>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  height: 100vh;
  .scroll {
    height: 3000px;
    display: flex;
    justify-content: center;
    align-items: center;
    .affix-container {
      text-align: center;
      border-radius: 4px;
      width: 80%;
      height: 400px;
      background: var(--el-color-primary-light-9);
    }
  }
}
</style>`;
    });
    const targetData = ref({
      offset: ref(150),
      target: ref(".target-affix-container"),
      positionList
    });
    const targetSource = computed(() => {
      return `<template>
  <div class="wrapper">
    <div class="affix-container">
      <el-affix${isAttribute(Boolean(targetData.value.offset) || targetData.value.offset === 0, `      :offset="${targetData.value.offset}"`)}${isAttribute(Boolean(targetData.value.target), `      target="${targetData.value.target}"`)}
      >
        <el-button type="primary">
          Affix content
        </el-button>
      </el-affix>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.target-wrapper {
  height: 2500px;
  .target-affix-container {
    text-align: center;
    height: 700px;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
  }
}
</style>`;
    });
    const __returned__ = { affixData, affixSource, targetData, targetSource, get logEvent() {
      return logEvent;
    }, get positionList() {
      return positionList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "wrapper" };
const _hoisted_2 = { class: "scroll" };
const _hoisted_3 = { class: "affix-container" };
const _hoisted_4 = { class: "target-wrapper" };
const _hoisted_5 = { class: "target-affix-container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_affix = resolveComponent("el-affix");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstText = resolveComponent("HstText");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Navigation/Affix",
    icon: "arcticons:photo-affix",
    layout: {
      type: "single",
      iframe: true
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.affixSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.affixData.offset,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.affixData.offset = $event),
            title: "offset"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.affixData.position,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.affixData.position = $event),
            title: "position",
            options: $setup.affixData.positionList
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.affixData.zIndex,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.affixData.zIndex = $event),
            title: "z-index"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_el_affix, {
                  offset: $setup.affixData.offset,
                  "z-index": $setup.affixData.zIndex,
                  position: $setup.affixData.position,
                  onChange: _cache[0] || (_cache[0] = ($event) => $setup.logEvent("change", $event)),
                  onScroll: _cache[1] || (_cache[1] = ($event) => $setup.logEvent("scroll", $event))
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_button, { type: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode(" Affix content ")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["offset", "z-index", "position"])
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Target Affix",
        source: $setup.targetSource,
        icon: "et:traget"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.targetData.offset,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.targetData.offset = $event),
            disabled: "",
            title: "offset"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.targetData.target,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.targetData.target = $event),
            disabled: "",
            title: "target"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_el_affix, {
                target: $setup.targetData.target,
                offset: $setup.targetData.offset,
                onChange: _cache[5] || (_cache[5] = ($event) => $setup.logEvent("change", $event)),
                onScroll: _cache[6] || (_cache[6] = ($event) => $setup.logEvent("scroll", $event))
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, { type: "primary" }, {
                    default: withCtx(() => [
                      createTextVNode(" Target Affix content ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["target", "offset"])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Navigation/Affix/affix.story.vue";
const affix_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9a9b6d1d"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Navigation/Affix/affix.story.vue"]]);
export {
  affix_story as default
};
