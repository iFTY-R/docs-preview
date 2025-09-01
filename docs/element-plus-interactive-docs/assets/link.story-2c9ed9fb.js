import { ax as defineComponent, aY as reactive, aQ as computed, b5 as shallowRef, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, bk as edit_default, aD as createVNode, aH as createTextVNode, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const linkTypeList = [
  {
    label: "default",
    value: "default"
  },
  {
    label: "primary",
    value: "primary"
  },
  {
    label: "success",
    value: "success"
  },
  {
    label: "warning",
    value: "warning"
  },
  {
    label: "danger",
    value: "danger"
  },
  {
    label: "info",
    value: "info"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "link.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicLinkData = reactive({
      text: "Link",
      type: "default",
      disabled: false,
      underline: false
    });
    const basicSource = computed(() => {
      return `<el-link${isAttribute(
        basicLinkData.type !== "default",
        `type="${basicLinkData.type}"`
      )}${isAttribute(
        basicLinkData.disabled,
        "disabled"
      )}${isAttribute(
        basicLinkData.underline,
        "underline"
      )}
>
  ${basicLinkData.text}
</el-link>`;
    });
    const iconLinkData = reactive({
      icon: shallowRef(edit_default),
      text: "Link",
      type: "default",
      disabled: false,
      underline: false
    });
    const iconSource = computed(() => {
      return `<script setup lang="ts">
import { ${iconLinkData.icon.name} } from '@element-plus/icons-vue'
<\/script>

<el-link
  :icon="${iconLinkData.icon.name}"${isAttribute(
        iconLinkData.type !== "default",
        `type="${basicLinkData.type}"`
      )}${isAttribute(
        iconLinkData.disabled,
        "disabled"
      )}${isAttribute(
        iconLinkData.underline,
        "underline"
      )}
>
  ${iconLinkData.text}
</el-link>`;
    });
    const __returned__ = { basicLinkData, basicSource, iconLinkData, iconSource, get linkTypeList() {
      return linkTypeList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_link = resolveComponent("el-link");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Basic/Link",
    icon: "ic:baseline-add-link"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.basicLinkData.text,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicLinkData.text = $event),
            title: "Text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.basicLinkData.type,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicLinkData.type = $event),
            title: "Link Type",
            options: $setup.linkTypeList
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicLinkData.underline,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicLinkData.underline = $event),
            title: "Underline"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicLinkData.disabled,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicLinkData.disabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_link, {
            type: $setup.basicLinkData.type,
            href: void 0,
            disabled: $setup.basicLinkData.disabled,
            underline: $setup.basicLinkData.underline
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.basicLinkData.text),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type", "disabled", "underline"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Icon",
        source: $setup.iconSource,
        icon: "line-md:iconify2"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.iconLinkData.text,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.iconLinkData.text = $event),
            title: "Text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.iconLinkData.type,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.iconLinkData.type = $event),
            title: "Link Type",
            options: $setup.linkTypeList
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.iconLinkData.underline,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.iconLinkData.underline = $event),
            title: "Underline"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.iconLinkData.disabled,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.iconLinkData.disabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_link, {
            icon: $setup.iconLinkData.icon,
            type: $setup.iconLinkData.type,
            href: void 0,
            disabled: $setup.iconLinkData.disabled,
            underline: $setup.iconLinkData.underline
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.iconLinkData.text),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["icon", "type", "disabled", "underline"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Basic/Link/link.story.vue";
const link_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Link/link.story.vue"]]);
export {
  link_story as default
};
