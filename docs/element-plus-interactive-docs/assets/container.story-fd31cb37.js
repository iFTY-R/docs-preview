import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const container_story_vue_vue_type_style_index_0_scoped_c26e58f4_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "container.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const headerHeight = ref(60);
    const footerHeight = ref(60);
    const asideWidth = ref(100);
    const __returned__ = { headerHeight, footerHeight, asideWidth };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_header = resolveComponent("el-header");
  const _component_el_aside = resolveComponent("el-aside");
  const _component_el_main = resolveComponent("el-main");
  const _component_el_footer = resolveComponent("el-footer");
  const _component_el_container = resolveComponent("el-container");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Basic/Container",
    icon: "ph:layout-thin"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.headerHeight,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.headerHeight = $event),
            title: "HeaderHeight"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.footerHeight,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.footerHeight = $event),
            title: "FooterHeight"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.asideWidth,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.asideWidth = $event),
            title: "AsideWidth"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_container, null, {
            default: withCtx(() => [
              createVNode(_component_el_header, {
                height: `${$setup.headerHeight}px`
              }, {
                default: withCtx(() => [
                  createTextVNode(" Header ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["height"]),
              createVNode(_component_el_container, null, {
                default: withCtx(() => [
                  createVNode(_component_el_aside, {
                    width: `${$setup.asideWidth}px`
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Aside ")
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["width"]),
                  createVNode(_component_el_container, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_main, null, {
                        default: withCtx(() => [
                          createTextVNode("Main")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_el_footer, {
                        height: `${$setup.footerHeight}px`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Footer ")
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["height"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Basic/Container/container.story.vue";
const container_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c26e58f4"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Container/container.story.vue"]]);
export {
  container_story as default
};
