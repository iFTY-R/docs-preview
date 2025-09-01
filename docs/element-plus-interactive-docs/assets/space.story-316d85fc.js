import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aH as createTextVNode, aI as createBaseVNode } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>The basic use case is using this component to provide unified space between each components</p>\n<p>Using Space to provide space</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "space.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const currentDirection = ref("vertical");
    const spaceDirectionList = [
      { label: "horizontal", value: "horizontal" },
      { label: "vertical", value: "vertical" }
    ];
    const spaceSizeList = [
      {
        label: "default",
        value: "default"
      },
      {
        label: "large",
        value: "large"
      },
      {
        label: "small",
        value: "small"
      }
    ];
    const spaceAlignmentList = [
      {
        label: "center",
        value: "center"
      },
      {
        label: "flex-start",
        value: "flex-start"
      },
      {
        label: "flex-end",
        value: "flex-end"
      },
      {
        label: "start",
        value: "start"
      },
      {
        label: "end",
        value: "end"
      }
    ];
    const currentSize = ref("default");
    const customSize = ref(20);
    const isWrap = ref(true);
    const spacer = ref("|");
    const alignment = ref("center");
    const isFill = ref(true);
    const fillRatio = ref(30);
    const __returned__ = { currentDirection, spaceDirectionList, spaceSizeList, spaceAlignmentList, currentSize, customSize, isWrap, spacer, alignment, isFill, fillRatio };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "alignment-container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_space = resolveComponent("el-space");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_el_card = resolveComponent("el-card");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Basic/Space",
    icon: "ic:twotone-space-bar"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic usage" }, {
        default: withCtx(() => [
          createVNode(_component_el_space, { wrap: "" }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (i) => {
                  return createVNode(
                    _component_el_button,
                    { key: i },
                    {
                      default: withCtx(() => [
                        createTextVNode(" button ")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
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
      createVNode(_component_Variant, { title: "Vertical layout" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentDirection,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentDirection = $event),
            title: "Direction",
            options: $setup.spaceDirectionList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_space, { direction: $setup.currentDirection }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (i) => {
                  return createVNode(
                    _component_el_button,
                    { key: i },
                    {
                      default: withCtx(() => [
                        createTextVNode(" button ")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["direction"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Control the size of the gap" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentSize,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.currentSize = $event),
            title: "Size",
            options: $setup.spaceSizeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_space, {
            direction: "vertical",
            alignment: "start",
            size: 30
          }, {
            default: withCtx(() => [
              createVNode(_component_el_space, {
                wrap: "",
                size: $setup.currentSize
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList(3, (i) => {
                      return createVNode(
                        _component_el_button,
                        { key: i },
                        {
                          default: withCtx(() => [
                            createTextVNode(" button ")
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      );
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["size"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom size" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.customSize,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.customSize = $event),
            title: "Custom Size"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_space, {
            wrap: "",
            size: $setup.customSize
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (i) => {
                  return createVNode(
                    _component_el_button,
                    { key: i },
                    {
                      default: withCtx(() => [
                        createTextVNode(" button ")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Wrap" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isWrap,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.isWrap = $event),
            title: "Wrap"
          }, {
            default: withCtx(() => [
              createTextVNode(" Wrap ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_space, { wrap: $setup.isWrap }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (i) => {
                  return createBaseVNode("div", { key: i }, [
                    createVNode(_component_el_button, { text: "" }, {
                      default: withCtx(() => [
                        createTextVNode(" Text button ")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["wrap"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Separator" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.spacer,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.spacer = $event),
            title: "Separator"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_space, {
            size: "large",
            direction: "vertical"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_space, {
                size: "default",
                spacer: $setup.spacer
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList(2, (i) => {
                      return createBaseVNode("div", { key: i }, [
                        createVNode(_component_el_button, null, {
                          default: withCtx(() => [
                            createTextVNode("button")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["spacer"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Alignment" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.alignment,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.alignment = $event),
            title: "Alignment",
            options: $setup.spaceAlignmentList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_el_space, { alignment: $setup.alignment }, {
              default: withCtx(() => [
                createTextVNode(" string "),
                createVNode(_component_el_button, null, {
                  default: withCtx(() => [
                    createTextVNode(" button ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_el_card, null, {
                  header: withCtx(() => [
                    createTextVNode(" header ")
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" body ")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["alignment"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Fill container" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isFill,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.isFill = $event),
            title: "Fill"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_space, {
            fill: $setup.isFill,
            wrap: ""
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (i) => {
                  return createVNode(
                    _component_el_button,
                    { key: i },
                    {
                      default: withCtx(() => [
                        createTextVNode(" button ")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["fill"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "fillRatio" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.fillRatio,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.fillRatio = $event),
            title: "FillRatio"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentDirection,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.currentDirection = $event),
            title: "Direction",
            options: $setup.spaceDirectionList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_space, {
            fill: "",
            wrap: "",
            "fill-ratio": $setup.fillRatio,
            direction: $setup.currentDirection,
            style: { "width": "100%" }
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (i) => {
                  return createVNode(
                    _component_el_button,
                    { key: i },
                    {
                      default: withCtx(() => [
                        createTextVNode(" button ")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["fill-ratio", "direction"])
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
_sfc_main.__file = "src/components/Basic/space.story.vue";
const space_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/space.story.vue"]]);
export {
  space_story as default
};
