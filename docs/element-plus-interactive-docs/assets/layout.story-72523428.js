import { ax as defineComponent, aY as reactive, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aI as createBaseVNode, b7 as normalizeClass } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const justifyOptions = [
  {
    label: "start",
    value: "start"
  },
  {
    label: "end",
    value: "end"
  },
  {
    label: "center",
    value: "center"
  },
  {
    label: "space-around",
    value: "space-around"
  },
  {
    label: "space-between",
    value: "space-between"
  },
  {
    label: "space-evenly",
    value: "space-evenly"
  }
];
const layout_story_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      span: 6,
      gutter: 0,
      offset: 0,
      justify: "start",
      align: "top",
      push: 0,
      pull: 0
    });
    const __returned__ = { basicData, get justifyOptions() {
      return justifyOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");
  const _component_HstSlider = resolveComponent("HstSlider");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Basic/Layout",
    icon: "lucide:layout-dashboard",
    layout: {
      type: "grid",
      width: 600
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstSlider, {
            modelValue: $setup.basicData.gutter,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.gutter = $event),
            title: "Gutter",
            min: 0,
            max: 60
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSlider, {
            modelValue: $setup.basicData.span,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.span = $event),
            title: "Span",
            min: 0,
            max: 24
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSlider, {
            modelValue: $setup.basicData.offset,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.offset = $event),
            title: "Offset",
            min: 0,
            max: 24
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSlider, {
            modelValue: $setup.basicData.push,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.push = $event),
            title: "Push",
            min: 0,
            max: 24
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSlider, {
            modelValue: $setup.basicData.pull,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.pull = $event),
            title: "Pull",
            min: 0,
            max: 24
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.basicData.justify,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.justify = $event),
            title: "Justify",
            options: $setup.justifyOptions
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_row, {
            gutter: $setup.basicData.gutter,
            justify: $setup.basicData.justify
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(4, (item) => {
                  return createVNode(_component_el_col, {
                    key: item,
                    span: $setup.basicData.span,
                    offset: $setup.basicData.offset,
                    push: $setup.basicData.push,
                    pull: $setup.basicData.pull
                  }, {
                    default: withCtx(() => [
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(["grid-item", item % 2 ? "grid-item-dark" : "grid-item-light"])
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["span", "offset", "push", "pull"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["gutter", "justify"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Basic/Layout/layout.story.vue";
const layout_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Layout/layout.story.vue"]]);
export {
  layout_story as default
};
