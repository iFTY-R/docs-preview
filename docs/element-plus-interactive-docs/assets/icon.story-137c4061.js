import { _ as __unplugin_components_2 } from "./HstColor-f0907a47.js";
import { ax as defineComponent, aY as reactive, b5 as shallowRef, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, bk as edit_default, bl as delete_default, aD as createVNode, bm as resolveDynamicComponent, aW as createCommentVNode, aX as normalizeStyle } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const elIconData = reactive({
      icon: shallowRef(edit_default),
      size: 20,
      color: ""
    });
    const elIconSource = computed(() => {
      return `<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
<\/script>

<el-icon${isAttribute(
        elIconData.size !== 20,
        `size="${elIconData.size}"`
      )}${isAttribute(
        elIconData.color !== "",
        `color="${elIconData.color}"`
      )}
>
  <${elIconData.icon.name} />
</el-icon>`;
    });
    const svgData = reactive({
      icon: shallowRef(delete_default),
      customClass: {
        width: "1em",
        height: "1em"
      }
    });
    const svgSource = computed(() => {
      return `<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
<\/script>

<${svgData.icon.name}
  style="${JSON.stringify(svgData.customClass)}"
/>`;
    });
    const __returned__ = { elIconData, elIconSource, svgData, svgSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstColor = __unplugin_components_2;
  const _component_Variant = resolveComponent("Variant");
  const _component_HstJson = resolveComponent("HstJson");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Basic/Icon",
    icon: "line-md:iconify2"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Combined with el-icon",
        source: $setup.elIconSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.elIconData.size,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.elIconData.size = $event),
            title: "Size"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstColor, {
            modelValue: $setup.elIconData.color,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.elIconData.color = $event),
            title: "Color"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_icon, {
            size: $setup.elIconData.size,
            color: $setup.elIconData.color
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent($setup.elIconData.icon)))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["size", "color"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Using SVG icon directly",
        source: $setup.svgSource,
        icon: "iconoir:svg-format"
      }, {
        controls: withCtx(() => [
          createCommentVNode(" a "),
          createVNode(_component_HstJson, {
            modelValue: $setup.svgData.customClass,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.svgData.customClass = $event),
            title: "style"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent($setup.svgData.icon), {
            style: normalizeStyle($setup.svgData.customClass)
          }, null, 8, ["style"]))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Basic/Icon/icon.story.vue";
const icon_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Icon/icon.story.vue"]]);
export {
  icon_story as default
};
