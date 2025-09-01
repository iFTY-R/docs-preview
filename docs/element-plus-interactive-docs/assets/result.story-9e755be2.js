import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = `<p>Used to give feedback on the result of user's operation or access exception.</p>
<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>Result usage</p>
<h2 id="customized-content" tabindex="-1">Customized content <a class="header-anchor" href="#customized-content" aria-hidden="true">#</a></h2>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "result.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const currentIcon = ref("info");
    const title = ref("Tip");
    const subTitle = ref("Please follow the instructions");
    const iconList = [
      {
        label: "success",
        value: "success"
      },
      {
        label: "warning",
        value: "warning"
      },
      {
        label: "error",
        value: "error"
      },
      {
        label: "info",
        value: "info"
      }
    ];
    const __returned__ = { currentIcon, title, subTitle, iconList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_result = resolveComponent("el-result");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_el_image = resolveComponent("el-image");
  const _component_el_button = resolveComponent("el-button");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Result",
    icon: "carbon:result"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentIcon,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentIcon = $event),
            title: "Icon",
            options: $setup.iconList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_result, {
            icon: $setup.currentIcon,
            title: $setup.title,
            "sub-title": $setup.subTitle
          }, null, 8, ["icon", "title", "sub-title"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Customized content" }, {
        default: withCtx(() => [
          createVNode(_component_el_result, {
            title: "404",
            "sub-title": "Sorry, request error"
          }, {
            icon: withCtx(() => [
              createVNode(_component_el_image, { src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" })
            ]),
            extra: withCtx(() => [
              createVNode(_component_el_button, { type: "primary" }, {
                default: withCtx(() => [
                  createTextVNode(" Back ")
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
_sfc_main.__file = "src/components/Data/result.story.vue";
const result_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/result.story.vue"]]);
export {
  result_story as default
};
