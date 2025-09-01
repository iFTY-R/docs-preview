import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pageHeader.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      icon: true,
      title: "",
      content: "Content"
    });
    const basicSource = computed(() => {
      return `<el-page-header${isAttribute(
        !basicData.icon,
        'icon="null"'
      )}${isAttribute(
        Boolean(basicData.title),
        `title="${basicData.title}"`
      )}
  content="${basicData.content}"
/>`;
    });
    const __returned__ = { basicData, basicSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_page_header = resolveComponent("el-page-header");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Navigation/PageHeader",
    icon: "fluent:panel-right-expand-20-regular"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.icon,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.icon = $event),
            title: "show icon"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.content,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.content = $event),
            title: "content"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.title,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.title = $event),
            title: "title"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          $setup.basicData.icon ? (openBlock(), createBlock(_component_el_page_header, {
            key: 0,
            title: $setup.basicData.title,
            content: $setup.basicData.content
          }, null, 8, ["title", "content"])) : (openBlock(), createBlock(_component_el_page_header, {
            key: 1,
            icon: "null",
            title: $setup.basicData.title,
            content: $setup.basicData.content
          }, null, 8, ["title", "content"]))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Navigation/PageHeader/pageHeader.story.vue";
const pageHeader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Navigation/PageHeader/pageHeader.story.vue"]]);
export {
  pageHeader_story as default
};
