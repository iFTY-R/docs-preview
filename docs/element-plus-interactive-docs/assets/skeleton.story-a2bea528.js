import { ax as defineComponent, ay as ref, aY as reactive, aZ as onMounted, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode, aP as toDisplayString, aH as createTextVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aL as pushScopeId, aM as popScopeId } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const skeleton_story_vue_vue_type_style_index_0_scoped_7aba62c8_lang = "";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>The basic skeleton.</p>
<h2 id="configurable-rows" tabindex="-1">Configurable rows <a class="header-anchor" href="#configurable-rows" aria-hidden="true">#</a></h2>
<p>You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the others.</p>
<h2 id="animation" tabindex="-1">Animation <a class="header-anchor" href="#animation" aria-hidden="true">#</a></h2>
<p>We have provided a switch flag indicating whether showing the loading animation, called animated when this is true, all children of el-skeleton will show animation</p>
<h2 id="customized-template" tabindex="-1">Customized Template <a class="header-anchor" href="#customized-template" aria-hidden="true">#</a></h2>
<p>Element Plus only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work.</p>
<p>Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference.</p>
<h2 id="loading-state" tabindex="-1">Loading state <a class="header-anchor" href="#loading-state" aria-hidden="true">#</a></h2>
<p>When Loading ends, we always need to show the real UI with data to our end users. with the attribute loading we can control whether showing the DOM. You can also use slot default to structure the real DOM element.</p>
<h2 id="rendering-a-list-of-data" tabindex="-1">Rendering a list of data <a class="header-anchor" href="#rendering-a-list-of-data" aria-hidden="true">#</a></h2>
<p>Most of the time, skeleton is used as indicators of rendering a list of data which haven't been fetched from server yet, then we need to create a list of skeleton out of no where to make it look like it is loading, with count attribute, you can control how many these templates you need to render to the browser.</p>
<h2 id="avoiding-rendering-bouncing" tabindex="-1">Avoiding rendering bouncing <a class="header-anchor" href="#avoiding-rendering-bouncing" aria-hidden="true">#</a></h2>
<p>Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the throttle attribute.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "skeleton.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const animated = ref(true);
    const rows = ref(5);
    const loading = reactive([true, false, true]);
    const currentDate = (/* @__PURE__ */ new Date()).toDateString();
    const lists = ref([]);
    function setLoading(index) {
      loading[index] = true;
      setTimeout(() => {
        loading[index] = false;
      }, 2e3);
    }
    onMounted(() => {
      loading[1] = false;
      lists.value = [
        {
          imgUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          name: "Deer"
        },
        {
          imgUrl: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          name: "Horse"
        },
        {
          imgUrl: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          name: "Mountain Lion"
        }
      ];
    });
    const __returned__ = { animated, rows, loading, currentDate, lists, setLoading };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-7aba62c8"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
));
const _hoisted_2 = { style: { "padding": "14px" } };
const _hoisted_3 = { style: { "display": "flex", "align-items": "center", "justify-items": "space-between" } };
const _hoisted_4 = { style: { "padding": "14px" } };
const _hoisted_5 = { class: "skeleton-item-wrapper" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    class: "image"
  },
  null,
  -1
  /* HOISTED */
));
const _hoisted_7 = { style: { "padding": "14px" } };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Delicious hamburger",
  -1
  /* HOISTED */
));
const _hoisted_9 = { class: "bottom card-header" };
const _hoisted_10 = { class: "time" };
const _hoisted_11 = { style: { "padding": "14px" } };
const _hoisted_12 = { class: "skeleton-item-wrapper" };
const _hoisted_13 = ["src"];
const _hoisted_14 = { style: { "padding": "14px" } };
const _hoisted_15 = { class: "bottom card-header" };
const _hoisted_16 = { class: "time" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "label",
  { style: { "margin-right": "16px" } },
  "Switch Loading",
  -1
  /* HOISTED */
));
const _hoisted_18 = { style: { "padding": "14px" } };
const _hoisted_19 = { class: "skeleton-item-wrapper" };
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    class: "image"
  },
  null,
  -1
  /* HOISTED */
));
const _hoisted_21 = { style: { "padding": "14px" } };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Delicious hamburger",
  -1
  /* HOISTED */
));
const _hoisted_23 = { class: "bottom card-header" };
const _hoisted_24 = { class: "time" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_skeleton = resolveComponent("el-skeleton");
  const _component_el_skeleton_item = resolveComponent("el-skeleton-item");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_card = resolveComponent("el-card");
  const _component_el_space = resolveComponent("el-space");
  const _component_el_switch = resolveComponent("el-switch");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Skeleton",
    icon: "clarity:avatar-line",
    layout: {
      type: "grid",
      width: 700
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic usage" }, {
        default: withCtx(() => [
          createVNode(_component_el_skeleton),
          _hoisted_1,
          createVNode(_component_el_skeleton, { style: { "--el-skeleton-circle-size": "100px" } }, {
            template: withCtx(() => [
              createVNode(_component_el_skeleton_item, { variant: "circle" })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Configurable rows" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.rows,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.rows = $event),
            title: "rows"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_skeleton, { rows: $setup.rows }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Animation" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.animated,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.animated = $event),
            title: "animated"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_skeleton, {
            rows: 5,
            animated: $setup.animated
          }, null, 8, ["animated"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Customized Template" }, {
        default: withCtx(() => [
          createVNode(_component_el_skeleton, { style: { "width": "240px" } }, {
            template: withCtx(() => [
              createVNode(_component_el_skeleton_item, {
                variant: "image",
                style: { "width": "240px", "height": "240px" }
              }),
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "50%" }
                }),
                createBaseVNode("div", _hoisted_3, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "margin-right": "16px" }
                  }),
                  createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "30%" }
                  })
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Loading state" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.loading[0],
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.loading[0] = $event),
            title: "loading"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_skeleton, {
            style: { "width": "240px" },
            loading: $setup.loading[0],
            animated: ""
          }, {
            template: withCtx(() => [
              createVNode(_component_el_skeleton_item, {
                variant: "image",
                style: { "width": "240px", "height": "240px" }
              }),
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_el_skeleton_item, {
                  variant: "h3",
                  style: { "width": "50%" }
                }),
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "margin-right": "16px" }
                  }),
                  createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "30%" }
                  })
                ])
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_el_card, { "body-style": { padding: "0px", marginBottom: "1px" } }, {
                default: withCtx(() => [
                  _hoisted_6,
                  createBaseVNode("div", _hoisted_7, [
                    _hoisted_8,
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode(
                        "div",
                        _hoisted_10,
                        toDisplayString($setup.currentDate),
                        1
                        /* TEXT */
                      ),
                      createVNode(_component_el_button, {
                        text: "",
                        class: "button"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Operation button ")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Rendering a list of data" }, {
        default: withCtx(() => [
          createVNode(_component_el_space, {
            direction: "vertical",
            alignment: "flex-start"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                onClick: _cache[3] || (_cache[3] = ($event) => $setup.setLoading(1))
              }, {
                default: withCtx(() => [
                  createTextVNode(" Click me to reload ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_skeleton, {
                style: { "width": "240px" },
                loading: $setup.loading[1],
                animated: "",
                count: 3
              }, {
                template: withCtx(() => [
                  createVNode(_component_el_skeleton_item, {
                    variant: "image",
                    style: { "width": "400px", "height": "267px" }
                  }),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "h3",
                      style: { "width": "50%" }
                    }),
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "text",
                        style: { "margin-right": "16px" }
                      }),
                      createVNode(_component_el_skeleton_item, {
                        variant: "text",
                        style: { "width": "30%" }
                      })
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($setup.lists, (item) => {
                      return openBlock(), createBlock(
                        _component_el_card,
                        {
                          key: item.name,
                          "body-style": { padding: "0px", marginBottom: "1px" }
                        },
                        {
                          default: withCtx(() => [
                            createBaseVNode("img", {
                              src: item.imgUrl,
                              style: { "width": "260px", "height": "173px", "overflow": "scroll" },
                              class: "image multi-content"
                            }, null, 8, _hoisted_13),
                            createBaseVNode("div", _hoisted_14, [
                              createBaseVNode(
                                "span",
                                null,
                                toDisplayString(item.name),
                                1
                                /* TEXT */
                              ),
                              createBaseVNode("div", _hoisted_15, [
                                createBaseVNode(
                                  "div",
                                  _hoisted_16,
                                  toDisplayString($setup.currentDate),
                                  1
                                  /* TEXT */
                                ),
                                createVNode(_component_el_button, {
                                  text: "",
                                  class: "button"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Operation button ")
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ])
                            ])
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
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Avoiding rendering bouncing" }, {
        default: withCtx(() => [
          createVNode(_component_el_space, {
            direction: "vertical",
            alignment: "flex-start"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                _hoisted_17,
                createVNode(_component_el_switch, {
                  modelValue: $setup.loading[2],
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.loading[2] = $event)
                }, null, 8, ["modelValue"])
              ]),
              createVNode(_component_el_skeleton, {
                style: { "width": "240px" },
                loading: $setup.loading[2],
                animated: "",
                throttle: 500
              }, {
                template: withCtx(() => [
                  createVNode(_component_el_skeleton_item, {
                    variant: "image",
                    style: { "width": "240px", "height": "240px" }
                  }),
                  createBaseVNode("div", _hoisted_18, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "h3",
                      style: { "width": "50%" }
                    }),
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "text",
                        style: { "margin-right": "16px" }
                      }),
                      createVNode(_component_el_skeleton_item, {
                        variant: "text",
                        style: { "width": "30%" }
                      })
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_el_card, { "body-style": { padding: "0px", marginBottom: "1px" } }, {
                    default: withCtx(() => [
                      _hoisted_20,
                      createBaseVNode("div", _hoisted_21, [
                        _hoisted_22,
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode(
                            "div",
                            _hoisted_24,
                            toDisplayString($setup.currentDate),
                            1
                            /* TEXT */
                          ),
                          createVNode(_component_el_button, {
                            text: "",
                            class: "button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" operation button ")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"])
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
_sfc_main.__file = "src/components/Data/skeleton.story.vue";
const skeleton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7aba62c8"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/skeleton.story.vue"]]);
export {
  skeleton_story as default
};
