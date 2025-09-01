import { _ as __unplugin_components_1 } from "./HstDivider-59750961.js";
import { ax as defineComponent, aY as reactive, bz as arrow_right_default, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aX as normalizeStyle, bs as unref, aH as createTextVNode, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { u as useElDisplay } from "./useEl-0078f831.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "breadcrumb.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      isIconSeparator: false,
      separator: "/",
      separatorIcon: arrow_right_default,
      firstTitle: "homepage",
      secondTitle: "promotion management",
      thirdTitle: "promotion list"
    });
    const basicSource = computed(() => {
      return `${basicData.isIconSeparator ? `<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
<\/script>

` : ""}<el-breadcrumb ${basicData.isIconSeparator ? ':separator-icon="ArrowRight"' : `separator="${basicData.separator}"`}>
  <el-breadcrumb-item>
    ${basicData.firstTitle}
  </el-breadcrumb-item>
  <el-breadcrumb-item>
    ${basicData.secondTitle}
  </el-breadcrumb-item>
  <el-breadcrumb-item>
    ${basicData.thirdTitle}
  </el-breadcrumb-item>
</el-breadcrumb>`;
    });
    const __returned__ = { basicData, basicSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_breadcrumb_item = resolveComponent("el-breadcrumb-item");
  const _component_el_breadcrumb = resolveComponent("el-breadcrumb");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstDivider = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Navigation/Breadcrumb",
    icon: "fluent-mdl2:breadcrumb",
    layout: {
      type: "grid",
      width: 540
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.isIconSeparator,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.isIconSeparator = $event),
            title: "Use icon"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.separator,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.separator = $event),
            style: normalizeStyle(unref(useElDisplay)(!$setup.basicData.isIconSeparator)),
            title: "Separator"
          }, null, 8, ["modelValue", "style"]),
          createVNode(_component_HstDivider, { content: "Title" }),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.firstTitle,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.firstTitle = $event),
            title: "First Class"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.secondTitle,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.secondTitle = $event),
            title: "Second Class"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.thirdTitle,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.thirdTitle = $event),
            title: "Third Class"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          !$setup.basicData.isIconSeparator ? (openBlock(), createBlock(_component_el_breadcrumb, {
            key: 0,
            separator: $setup.basicData.separator
          }, {
            default: withCtx(() => [
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.basicData.firstTitle),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.basicData.secondTitle),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.basicData.thirdTitle),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["separator"])) : (openBlock(), createBlock(_component_el_breadcrumb, {
            key: 1,
            "separator-icon": $setup.basicData.separatorIcon
          }, {
            default: withCtx(() => [
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.basicData.firstTitle),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.basicData.secondTitle),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.basicData.thirdTitle),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["separator-icon"]))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Navigation/Breadcrumb/breadcrumb.story.vue";
const breadcrumb_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Navigation/Breadcrumb/breadcrumb.story.vue"]]);
export {
  breadcrumb_story as default
};
