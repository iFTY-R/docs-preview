import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aP as toDisplayString, aX as normalizeStyle, aL as pushScopeId, aM as popScopeId } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const border_story_vue_vue_type_style_index_0_scoped_7596f817_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "border.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const radiusGroup = ref([
      {
        name: "No Radius",
        type: ""
      },
      {
        name: "Small Radius",
        type: "small"
      },
      {
        name: "Large Radius",
        type: "base"
      },
      {
        name: "Round Radius",
        type: "round"
      }
    ]);
    function getValue(type) {
      const getCssVarValue = (prefix, type2) => getComputedStyle(document.documentElement).getPropertyValue(
        `--el-${prefix}-${type2}`
      );
      return getCssVarValue("border-radius", type);
    }
    const shadowGroup = ref([
      {
        name: "Basic Shadow",
        type: ""
      },
      {
        name: "Light Shadow",
        type: "light"
      },
      {
        name: "Lighter Shadow",
        type: "lighter"
      },
      {
        name: "Dark Shadow",
        type: "dark"
      }
    ]);
    function getCssVarName(type) {
      return `--el-box-shadow${type ? "-" : ""}${type}`;
    }
    const __returned__ = { radiusGroup, getValue, shadowGroup, getCssVarName };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-7596f817"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "table",
  { class: "demo-border" },
  [
    /* @__PURE__ */ createBaseVNode("tbody", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", { class: "text" }, " Name "),
        /* @__PURE__ */ createBaseVNode("td", { class: "text" }, " Thickness "),
        /* @__PURE__ */ createBaseVNode("td", { class: "line" }, " Demo ")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", { class: "text" }, " Solid "),
        /* @__PURE__ */ createBaseVNode("td", { class: "text" }, " 1px "),
        /* @__PURE__ */ createBaseVNode("td", { class: "line" }, [
          /* @__PURE__ */ createBaseVNode("div")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", { class: "text" }, " Dashed "),
        /* @__PURE__ */ createBaseVNode("td", { class: "text" }, " 2px "),
        /* @__PURE__ */ createBaseVNode("td", { class: "line" }, [
          /* @__PURE__ */ createBaseVNode("div", { class: "dashed" })
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
));
const _hoisted_2 = { class: "demo-radius" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "code-value" };
const _hoisted_5 = { class: "shadow-box" };
const _hoisted_6 = { class: "code-value" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_el_col = resolveComponent("el-col");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Basic/Border",
    icon: "teenyicons:border-radius-solid",
    source: " ",
    layout: {
      type: "grid",
      width: 260
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Border style" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Radius" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.radiusGroup, (radius, i) => {
                return openBlock(), createBlock(
                  _component_el_col,
                  {
                    key: i,
                    xs: { span: 12 }
                  },
                  {
                    default: withCtx(() => [
                      createBaseVNode(
                        "div",
                        _hoisted_3,
                        toDisplayString(radius.name),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "code",
                        _hoisted_4,
                        "border-radius: " + toDisplayString($setup.getValue(radius.type) || "0px"),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "div",
                        {
                          class: "radius",
                          style: normalizeStyle({
                            borderRadius: radius.type ? `var(--el-border-radius-${radius.type})` : ""
                          })
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Shadow" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.shadowGroup, (shadow, i) => {
                return openBlock(), createElementBlock("div", {
                  key: i,
                  class: "shadow-item"
                }, [
                  createBaseVNode(
                    "div",
                    {
                      class: "shadow",
                      style: normalizeStyle({
                        boxShadow: `var(${$setup.getCssVarName(shadow.type)})`
                      })
                    },
                    null,
                    4
                    /* STYLE */
                  ),
                  createBaseVNode(
                    "span",
                    null,
                    toDisplayString(shadow.name),
                    1
                    /* TEXT */
                  ),
                  createBaseVNode(
                    "code",
                    _hoisted_6,
                    toDisplayString($setup.getCssVarName(shadow.type)),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Basic/Border/border.story.vue";
const border_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7596f817"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Border/border.story.vue"]]);
export {
  border_story as default
};
