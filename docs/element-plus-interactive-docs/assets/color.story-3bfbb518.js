import { ay as ref, bg as watch, bh as isDark, bi as useClipboard, be as ElMessage, ax as defineComponent, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode, aE as createElementBlock, aG as Fragment, aF as renderList, aX as normalizeStyle, aH as createTextVNode, aP as toDisplayString, bj as useCssVar } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
function getCssVarName(namespace, type) {
  return type ? `--el-${namespace}-${type}` : `--el-${namespace}`;
}
function getCssVarValue(name) {
  const val = ref(
    getComputedStyle(document.documentElement).getPropertyValue(name)
  );
  watch(
    () => isDark.value,
    () => {
      setTimeout(() => {
        val.value = getComputedStyle(document.documentElement).getPropertyValue(
          name
        );
      }, 100);
    }
  );
  return val;
}
function getColorValue(type) {
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    `--el-color-${type}`
  );
  return color;
}
function useCopyColor() {
  const source = ref("");
  const { copy, isSupported } = useClipboard({ source });
  const copyColor = async (colorType) => {
    const colorValue = getColorValue(colorType);
    source.value = colorValue;
    if (!isSupported)
      ElMessage.error("Copy failed");
    try {
      await copy();
      ElMessage.success(`--el-color-${colorType}: ${source.value}`);
    } catch (e) {
      ElMessage.error(e.message);
    }
  };
  return {
    copyColor
  };
}
const black = "#000000";
const white = "#FFFFFF";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "neutral-color",
  setup(__props, { expose: __expose }) {
    __expose();
    const backgroundTypes = ["page", "", "overlay"];
    const backgroundColors = backgroundTypes.map((type) => {
      return {
        name: type ? `${type[0].toUpperCase() + type.slice(1)} Background` : "Base Background",
        var: getCssVarValue(getCssVarName("bg-color", type))
      };
    });
    const borderTypes = ["darker", "dark", "", "light", "lighter", "extra-light"];
    const borderColors = borderTypes.map((type) => {
      return {
        name: type ? `${type[0].toUpperCase() + type.slice(1)} Border` : "Base Border",
        var: getCssVarValue(getCssVarName("border-color", type))
      };
    });
    const fillTypes = [
      "darker",
      "dark",
      "",
      "light",
      "lighter",
      "extra-light",
      "blank"
    ];
    const fillColors = fillTypes.map((type) => {
      return {
        name: type ? `${type[0].toUpperCase() + type.slice(1)} Fill` : "Base Fill",
        var: getCssVarValue(getCssVarName("fill-color", type))
      };
    });
    const textTypes = ["primary", "regular", "secondary", "placeholder", "disabled"];
    const textColors = textTypes.map((type) => {
      return {
        name: `${type[0].toUpperCase() + type.slice(1)} Text`,
        var: getCssVarValue(getCssVarName("text-color", type))
      };
    });
    const __returned__ = { backgroundTypes, backgroundColors, borderTypes, borderColors, fillTypes, fillColors, textTypes, textColors, black, white, get isDark() {
      return isDark;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "demo-color-box-group" };
const _hoisted_2$3 = {
  class: "value",
  text: "xs"
};
const _hoisted_3$2 = { class: "demo-color-box-group" };
const _hoisted_4$1 = {
  class: "value",
  text: "xs"
};
const _hoisted_5$1 = { class: "demo-color-box-group" };
const _hoisted_6$1 = {
  class: "value",
  text: "xs"
};
const _hoisted_7$1 = { class: "demo-color-box-group" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "demo-color-box demo-color-box-other demo-color-box-lite bg-transparent" },
  [
    /* @__PURE__ */ createTextVNode(" Transparent "),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "value",
      text: "xs"
    }, " Transparent ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  class: "value",
  text: "xs"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");
  return openBlock(), createBlock(_component_el_row, { gutter: 12 }, {
    default: withCtx(() => [
      createVNode(_component_el_col, {
        span: 6,
        xs: { span: 12 }
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.textColors, (text, i) => {
                return openBlock(), createElementBlock(
                  "div",
                  {
                    key: i,
                    class: "demo-color-box demo-color-box-other",
                    style: normalizeStyle({
                      color: "var(--el-bg-color)",
                      background: text.var.value
                    })
                  },
                  [
                    createTextVNode(
                      toDisplayString(text.name) + " ",
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "div",
                      _hoisted_2$3,
                      toDisplayString(text.var.value.toUpperCase()),
                      1
                      /* TEXT */
                    )
                  ],
                  4
                  /* STYLE */
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
      createVNode(_component_el_col, {
        span: 6,
        xs: { span: 12 }
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3$2, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.borderColors, (border, i) => {
                return openBlock(), createElementBlock(
                  "div",
                  {
                    key: i,
                    class: "demo-color-box demo-color-box-other demo-color-box-lite",
                    style: normalizeStyle({ background: border.var.value })
                  },
                  [
                    createTextVNode(
                      toDisplayString(border.name) + " ",
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "div",
                      _hoisted_4$1,
                      toDisplayString(border.var.value.toUpperCase()),
                      1
                      /* TEXT */
                    )
                  ],
                  4
                  /* STYLE */
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
      createVNode(_component_el_col, {
        span: 6,
        xs: { span: 12 }
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5$1, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.fillColors, (fill, i) => {
                return openBlock(), createElementBlock(
                  "div",
                  {
                    key: i,
                    class: "demo-color-box demo-color-box-other demo-color-box-lite",
                    style: normalizeStyle({
                      background: fill.var.value,
                      border: `1px solid ${fill.name === "Blank Fill" ? "var(--el-border-color-light)" : "transparent"}`
                    })
                  },
                  [
                    createTextVNode(
                      toDisplayString(fill.name) + " ",
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "div",
                      _hoisted_6$1,
                      toDisplayString(fill.var.value.toUpperCase()),
                      1
                      /* TEXT */
                    )
                  ],
                  4
                  /* STYLE */
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
      createVNode(_component_el_col, {
        span: 6,
        xs: { span: 12 }
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_7$1, [
            createBaseVNode(
              "div",
              {
                class: "demo-color-box demo-color-box-other",
                style: normalizeStyle({ background: $setup.black })
              },
              [
                createTextVNode(" Basic Black "),
                createBaseVNode("div", {
                  class: "value",
                  text: "xs"
                }, toDisplayString($setup.black))
              ],
              4
              /* STYLE */
            ),
            createBaseVNode(
              "div",
              {
                class: "demo-color-box demo-color-box-other",
                style: normalizeStyle({
                  background: $setup.white,
                  color: "#303133",
                  border: "1px solid #eee"
                })
              },
              [
                createTextVNode(" Basic White "),
                createBaseVNode("div", {
                  class: "value",
                  text: "xs"
                }, toDisplayString($setup.white))
              ],
              4
              /* STYLE */
            ),
            _hoisted_8$1,
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.backgroundColors, (bg, i) => {
                return openBlock(), createElementBlock(
                  "div",
                  {
                    key: i,
                    class: "demo-color-box demo-color-box-other demo-color-box-lite",
                    style: normalizeStyle({
                      background: bg.var.value,
                      border: `1px solid ${!$setup.isDark || bg.name === "Base Background" ? "var(--el-border-color-light)" : "transparent"}`
                    })
                  },
                  [
                    createTextVNode(
                      toDisplayString(bg.name) + " ",
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "div",
                      _hoisted_9,
                      toDisplayString(bg.var.value.toUpperCase()),
                      1
                      /* TEXT */
                    )
                  ],
                  4
                  /* STYLE */
                );
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
_sfc_main$3.__file = "src/components/Basic/Color/neutral-color.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Color/neutral-color.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "secondary-colors",
  setup(__props, { expose: __expose }) {
    __expose();
    const colorsType = ["success", "warning", "danger", "info"];
    const colorLevel = [3, 5, 7, 8, 9].map((item) => `light-${item}`);
    colorLevel.unshift("dark-2");
    const { copyColor } = useCopyColor();
    const __returned__ = { colorsType, colorLevel, copyColor, get getColorValue() {
      return getColorValue;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = {
  class: "value",
  text: "xs"
};
const _hoisted_2$2 = { class: "bg-color-sub" };
const _hoisted_3$1 = ["onClick"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");
  return openBlock(), createBlock(_component_el_row, { gutter: 12 }, {
    default: withCtx(() => [
      (openBlock(), createElementBlock(
        Fragment,
        null,
        renderList($setup.colorsType, (type, i) => {
          return createVNode(
            _component_el_col,
            {
              key: i,
              span: 6,
              xs: { span: 12 }
            },
            {
              default: withCtx(() => [
                createBaseVNode(
                  "div",
                  {
                    class: "demo-color-box",
                    style: normalizeStyle({ background: $setup.getColorValue(type) })
                  },
                  [
                    createTextVNode(
                      toDisplayString(type.charAt(0).toUpperCase() + type.slice(1)) + " ",
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "div",
                      _hoisted_1$2,
                      toDisplayString($setup.getColorValue(type).toUpperCase()),
                      1
                      /* TEXT */
                    ),
                    createBaseVNode("div", _hoisted_2$2, [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList($setup.colorLevel, (level, key) => {
                          return openBlock(), createElementBlock("div", {
                            key,
                            class: "bg-secondary-sub-item transition cursor-pointer hover:shadow",
                            style: normalizeStyle({
                              width: `${100 / 6}%`,
                              background: `var(--el-color-${type}-${level})`
                            }),
                            onClick: ($event) => $setup.copyColor(`${type}-${level}`)
                          }, null, 12, _hoisted_3$1);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ],
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
        64
        /* STABLE_FRAGMENT */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$2.__file = "src/components/Basic/Color/secondary-colors.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Color/secondary-colors.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "main-color",
  setup(__props, { expose: __expose }) {
    __expose();
    const primary = useCssVar("--el-color-primary");
    const colorLevel = [3, 5, 7, 8, 9].map((i) => `light-${i}`);
    colorLevel.unshift("dark-2");
    const { copyColor } = useCopyColor();
    const __returned__ = { primary, colorLevel, copyColor };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  class: "value",
  text: "xs"
};
const _hoisted_2$1 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");
  return openBlock(), createBlock(_component_el_row, { gutter: 12 }, {
    default: withCtx(() => [
      createVNode(_component_el_col, {
        span: 10,
        xs: { span: 12 }
      }, {
        default: withCtx(() => [
          createBaseVNode(
            "div",
            {
              class: "demo-color-box",
              style: normalizeStyle({ background: $setup.primary })
            },
            [
              createTextVNode(" Brand Color "),
              createBaseVNode(
                "div",
                _hoisted_1$1,
                toDisplayString($setup.primary.toUpperCase()),
                1
                /* TEXT */
              ),
              createBaseVNode(
                "div",
                {
                  class: "bg-color-sub",
                  style: normalizeStyle({ background: $setup.primary })
                },
                [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($setup.colorLevel, (level) => {
                      return openBlock(), createElementBlock("div", {
                        key: level,
                        class: "bg-blue-sub-item cursor-pointer hover:shadow",
                        style: normalizeStyle({
                          width: `${100 / 6}%`,
                          background: `var(--el-color-primary-${level})`
                        }),
                        onClick: ($event) => $setup.copyColor(`primary-${level}`)
                      }, null, 12, _hoisted_2$1);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$1.__file = "src/components/Basic/Color/main-color.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Color/main-color.vue"]]);
const color_story_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  null,
  " Color ",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  " Element Plus uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build. ",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Main Color",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  " The main color of Element Plus is bright and friendly blue. ",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Secondary Color",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  " Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation) ",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  " Neutral Color ",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  " Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure. ",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_MainColor = __unplugin_components_0;
  const _component_SecondaryColors = __unplugin_components_1;
  const _component_NeutralColor = __unplugin_components_2;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Basic/Color",
    layout: {
      type: "single",
      iframe: true
    },
    icon: "ic:outline-color-lens"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: " "
      }, {
        default: withCtx(() => [
          _hoisted_1,
          _hoisted_2,
          _hoisted_3,
          _hoisted_4,
          createVNode(_component_MainColor),
          _hoisted_5,
          _hoisted_6,
          createVNode(_component_SecondaryColors),
          _hoisted_7,
          _hoisted_8,
          createVNode(_component_NeutralColor)
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Basic/Color/color.story.vue";
const color_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Basic/Color/color.story.vue"]]);
export {
  color_story as default
};
