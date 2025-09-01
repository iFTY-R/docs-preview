import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>Empty usage</p>\n<h2 id="custom-image" tabindex="-1">Custom image <a class="header-anchor" href="#custom-image" aria-hidden="true">#</a></h2>\n<p>Use <code>image</code> prop to set image URL.</p>\n<h2 id="image-size" tabindex="-1">Image size <a class="header-anchor" href="#image-size" aria-hidden="true">#</a></h2>\n<p>Use <code>image-size</code> prop to control image size.</p>\n<h2 id="bottom-content" tabindex="-1">Bottom content <a class="header-anchor" href="#bottom-content" aria-hidden="true">#</a></h2>\n<p>Use the default slot to insert content at the bottom.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "empty.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const description = ref("thisdescription");
    const imageSize = ref(200);
    const __returned__ = { description, imageSize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_empty = resolveComponent("el-empty");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_el_button = resolveComponent("el-button");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Empty",
    icon: "mdi:delete-empty-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.description,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.description = $event),
            title: "description"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_empty, { description: $setup.description }, null, 8, ["description"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom image" }, {
        default: withCtx(() => [
          createVNode(_component_el_empty, { image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Image size" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.imageSize,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.imageSize = $event),
            title: "image-size"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_empty, { "image-size": $setup.imageSize }, null, 8, ["image-size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Bottom content" }, {
        default: withCtx(() => [
          createVNode(_component_el_empty, null, {
            default: withCtx(() => [
              createVNode(_component_el_button, { type: "primary" }, {
                default: withCtx(() => [
                  createTextVNode(" Button ")
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
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/components/Data/empty.story.vue";
const empty_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/empty.story.vue"]]);
export {
  empty_story as default
};
