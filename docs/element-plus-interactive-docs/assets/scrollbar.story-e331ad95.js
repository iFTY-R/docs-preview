import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aW as createCommentVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aI as createBaseVNode, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const scrollbar_story_vue_vue_type_style_index_0_scoped_2d475894_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "scrollbar.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      height: 200,
      always: false,
      native: false,
      minSize: 20
    });
    const basicSource = computed(() => {
      return `<el-scrollbar
  height="${basicData.height}"${isAttribute(
        basicData.always && !basicData.native,
        "always"
      )}${isAttribute(
        basicData.native,
        "native"
      )}${isAttribute(
        basicData.minSize !== 20 && !basicData.native,
        `min-size="${basicData.minSize}"`
      )}
>
  <p
    v-for="item in 10"
    :key="item"
    class="scrollbar-demo-item"
  >
    {{ item }}
  </p>
</el-scrollbar>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>`;
    });
    const __returned__ = { basicData, basicSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Basic/Scrollbar",
    icon: "fluent:phone-vertical-scroll-24-regular"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.height,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.height = $event),
            title: "Height"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.native,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.native = $event),
            title: "Native"
          }, null, 8, ["modelValue"]),
          !$setup.basicData.native ? (openBlock(), createBlock(_component_HstCheckbox, {
            key: 0,
            modelValue: $setup.basicData.always,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.always = $event),
            title: "Always"
          }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
          !$setup.basicData.native ? (openBlock(), createBlock(_component_HstNumber, {
            key: 1,
            modelValue: $setup.basicData.minSize,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.minSize = $event),
            title: "Min Size"
          }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)
        ]),
        default: withCtx(() => [
          createVNode(_component_el_scrollbar, {
            height: `${$setup.basicData.height}px`,
            native: $setup.basicData.native,
            always: $setup.basicData.always,
            "min-size": $setup.basicData.minSize
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(10, (item) => {
                  return createBaseVNode(
                    "p",
                    {
                      key: item,
                      class: "scrollbar-demo-item"
                    },
                    toDisplayString(item),
                    1
                    /* TEXT */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["height", "native", "always", "min-size"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Basic/Scrollbar/scrollbar.story.vue";
const scrollbar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2d475894"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Scrollbar/scrollbar.story.vue"]]);
export {
  scrollbar_story as default
};
