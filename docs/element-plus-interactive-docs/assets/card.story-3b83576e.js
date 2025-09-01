import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode, aH as createTextVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aP as toDisplayString, aL as pushScopeId, aM as popScopeId } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const card_story_vue_vue_type_style_index_0_scoped_ce105e00_lang = "";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>Card includes title, content and operations.</p>\n<p>Card is made up of <code>header</code> and <code>body</code>. <code>header</code> is optional, and its content distribution depends on a named slot.</p>\n<h2 id="simple-card" tabindex="-1">Simple card <a class="header-anchor" href="#simple-card" aria-hidden="true">#</a></h2>\n<p>The header part can be omitted.</p>\n<h2 id="with-images" tabindex="-1">With images <a class="header-anchor" href="#with-images" aria-hidden="true">#</a></h2>\n<p>Display richer content by adding some configs.</p>\n<p>The <code>body-style</code> attribute defines CSS style of custom <code>body</code>. This example also uses <code>el-col</code> for layout.</p>\n<h2 id="shadow" tabindex="-1">Shadow <a class="header-anchor" href="#shadow" aria-hidden="true">#</a></h2>\n<p>You can define when to show the card shadows</p>\n<p>The <code>shadow</code> attribute determines when the card shadows are displayed. It can be <code>always</code>, <code>hover</code> or <code>never</code>.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "card.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const header = ref("Card Name");
    const currentDate = /* @__PURE__ */ new Date();
    const bodyStyle = ref({ padding: "0px" });
    const currentShadow = ref("always");
    const shadowTypeList = [
      {
        label: "always",
        value: "always"
      },
      {
        label: "hover",
        value: "hover"
      },
      {
        label: "never",
        value: "never"
      }
    ];
    const __returned__ = { header, currentDate, bodyStyle, currentShadow, shadowTypeList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-ce105e00"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "card-header" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Card name",
  -1
  /* HOISTED */
));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    class: "image"
  },
  null,
  -1
  /* HOISTED */
));
const _hoisted_4 = { style: { "padding": "14px" } };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Yummy hamburger",
  -1
  /* HOISTED */
));
const _hoisted_6 = { class: "bottom" };
const _hoisted_7 = { class: "time" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_card = resolveComponent("el-card");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstText = resolveComponent("HstText");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");
  const _component_HstJson = resolveComponent("HstJson");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Card",
    icon: "majesticons:code-block-line",
    layout: {
      type: "grid",
      width: 540
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic usage" }, {
        default: withCtx(() => [
          createVNode(_component_el_card, { class: "box-card" }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                _hoisted_2,
                createVNode(_component_el_button, {
                  class: "button",
                  text: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Operation button ")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(4, (o) => {
                  return createBaseVNode(
                    "div",
                    {
                      key: o,
                      class: "text item"
                    },
                    toDisplayString(`List item ${o}`),
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
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Simple card" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.header,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.header = $event),
            title: "Card Header"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_card, {
            class: "box-card",
            header: $setup.header
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(4, (o) => {
                  return createBaseVNode(
                    "div",
                    {
                      key: o,
                      class: "text item"
                    },
                    toDisplayString(`List item ${o}`),
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
          }, 8, ["header"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With images" }, {
        controls: withCtx(() => [
          createVNode(_component_HstJson, {
            modelValue: $setup.bodyStyle,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.bodyStyle = $event),
            title: "Body Style"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_row, null, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(2, (o, index) => {
                  return createVNode(_component_el_col, {
                    key: o,
                    span: 8,
                    offset: index > 0 ? 2 : 0
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_card, { "body-style": $setup.bodyStyle }, {
                        default: withCtx(() => [
                          _hoisted_3,
                          createBaseVNode("div", _hoisted_4, [
                            _hoisted_5,
                            createBaseVNode("div", _hoisted_6, [
                              createBaseVNode(
                                "time",
                                _hoisted_7,
                                toDisplayString($setup.currentDate),
                                1
                                /* TEXT */
                              ),
                              createVNode(_component_el_button, {
                                text: "",
                                class: "button"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Operating ")
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ])
                          ])
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["body-style"])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["offset"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Shadow" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentShadow,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.currentShadow = $event),
            title: "Shadow",
            options: $setup.shadowTypeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_card, { shadow: $setup.currentShadow }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.currentShadow),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["shadow"])
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
_sfc_main.__file = "src/components/Data/card.story.vue";
const card_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ce105e00"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/card.story.vue"]]);
export {
  card_story as default
};
