import { ax as defineComponent, ay as ref, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aR as iphone_default, aS as location_default, aT as office_building_default, aU as tickets_default, aV as user_default, aD as createVNode, aW as createCommentVNode, aH as createTextVNode, aI as createBaseVNode, aX as normalizeStyle } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const descriptions_story_vue_vue_type_style_index_0_scoped_49f51c28_lang = "";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>Descriptions usage</p>\n<h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-hidden="true">#</a></h2>\n<p>size of list</p>\n<h2 id="vertical-list" tabindex="-1">Vertical List <a class="header-anchor" href="#vertical-list" aria-hidden="true">#</a></h2>\n<p>direction of list</p>\n<h2 id="customized-style" tabindex="-1">Customized Style <a class="header-anchor" href="#customized-style" aria-hidden="true">#</a></h2>\n<p>column label or content custom class name</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "descriptions.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const size = ref("default");
    const sizeVertical = ref("default");
    const sizeList = ["large", "default", "small"];
    const iconStyle = computed(() => {
      const marginMap = {
        large: "8px",
        default: "6px",
        small: "4px"
      };
      return {
        marginRight: marginMap[size.value] || marginMap.default
      };
    });
    const blockMargin = computed(() => {
      const marginMap = {
        large: "32px",
        default: "28px",
        small: "24px"
      };
      return {
        marginTop: marginMap[size.value] || marginMap.default
      };
    });
    const __returned__ = { size, sizeVertical, sizeList, iconStyle, blockMargin, get Iphone() {
      return iphone_default;
    }, get Location() {
      return location_default;
    }, get OfficeBuilding() {
      return office_building_default;
    }, get Tickets() {
      return tickets_default;
    }, get User() {
      return user_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "cell-item" };
const _hoisted_2 = { class: "cell-item" };
const _hoisted_3 = { class: "cell-item" };
const _hoisted_4 = { class: "cell-item" };
const _hoisted_5 = { class: "cell-item" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_descriptions_item = resolveComponent("el-descriptions-item");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_descriptions = resolveComponent("el-descriptions");
  const _component_Variant = resolveComponent("Variant");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Descriptions",
    icon: "mdi:card-account-details-outline",
    layout: {
      type: "grid",
      width: 700
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createCommentVNode(" HstControl ")
        ]),
        default: withCtx(() => [
          createVNode(_component_el_descriptions, { title: "User Info" }, {
            default: withCtx(() => [
              createVNode(_component_el_descriptions_item, { label: "Username" }, {
                default: withCtx(() => [
                  createTextVNode(" kooriookami ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Telephone" }, {
                default: withCtx(() => [
                  createTextVNode(" 18100000000 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Place" }, {
                default: withCtx(() => [
                  createTextVNode(" Suzhou ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Remarks" }, {
                default: withCtx(() => [
                  createVNode(_component_el_tag, { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode(" School ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Address" }, {
                default: withCtx(() => [
                  createTextVNode(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")
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
      }),
      createVNode(_component_Variant, { title: "Sizes" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.size = $event),
            title: "size",
            options: $setup.sizeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_descriptions, {
            class: "margin-top",
            title: "With border",
            column: 3,
            size: $setup.size,
            border: ""
          }, {
            extra: withCtx(() => [
              createVNode(_component_el_button, { type: "primary" }, {
                default: withCtx(() => [
                  createTextVNode(" Operation ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_el_descriptions_item, null, {
                label: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(_component_el_icon, {
                      style: normalizeStyle($setup.iconStyle)
                    }, {
                      default: withCtx(() => [
                        createVNode($setup["User"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    createTextVNode(" Username ")
                  ])
                ]),
                default: withCtx(() => [
                  createTextVNode(" kooriookami ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, null, {
                label: withCtx(() => [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(_component_el_icon, {
                      style: normalizeStyle($setup.iconStyle)
                    }, {
                      default: withCtx(() => [
                        createVNode($setup["Iphone"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    createTextVNode(" Telephone ")
                  ])
                ]),
                default: withCtx(() => [
                  createTextVNode(" 18100000000 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, null, {
                label: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_component_el_icon, {
                      style: normalizeStyle($setup.iconStyle)
                    }, {
                      default: withCtx(() => [
                        createVNode($setup["Location"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    createTextVNode(" Place ")
                  ])
                ]),
                default: withCtx(() => [
                  createTextVNode(" Suzhou ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, null, {
                label: withCtx(() => [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_el_icon, {
                      style: normalizeStyle($setup.iconStyle)
                    }, {
                      default: withCtx(() => [
                        createVNode($setup["Tickets"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    createTextVNode(" Remarks ")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_el_tag, { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode(" School ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, null, {
                label: withCtx(() => [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_el_icon, {
                      style: normalizeStyle($setup.iconStyle)
                    }, {
                      default: withCtx(() => [
                        createVNode($setup["OfficeBuilding"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    createTextVNode(" Address ")
                  ])
                ]),
                default: withCtx(() => [
                  createTextVNode(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["size"]),
          createVNode(_component_el_descriptions, {
            class: "margin-top",
            title: "Without border",
            column: 3,
            size: $setup.size,
            style: normalizeStyle($setup.blockMargin)
          }, {
            extra: withCtx(() => [
              createVNode(_component_el_button, { type: "primary" }, {
                default: withCtx(() => [
                  createTextVNode(" Operation ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_el_descriptions_item, { label: "Username" }, {
                default: withCtx(() => [
                  createTextVNode(" kooriookami ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Telephone" }, {
                default: withCtx(() => [
                  createTextVNode(" 18100000000 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Place" }, {
                default: withCtx(() => [
                  createTextVNode(" Suzhou ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Remarks" }, {
                default: withCtx(() => [
                  createVNode(_component_el_tag, { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode(" School ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Address" }, {
                default: withCtx(() => [
                  createTextVNode(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["size", "style"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Vertical List" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.sizeVertical,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.sizeVertical = $event),
            title: "size",
            options: $setup.sizeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_descriptions, {
            title: "Vertical list with border",
            direction: "vertical",
            column: 4,
            size: $setup.sizeVertical,
            border: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_el_descriptions_item, { label: "Username" }, {
                default: withCtx(() => [
                  createTextVNode(" kooriookami ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Telephone" }, {
                default: withCtx(() => [
                  createTextVNode(" 18100000000 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, {
                label: "Place",
                span: 2
              }, {
                default: withCtx(() => [
                  createTextVNode(" Suzhou ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Remarks" }, {
                default: withCtx(() => [
                  createVNode(_component_el_tag, { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode(" School ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Address" }, {
                default: withCtx(() => [
                  createTextVNode(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["size"]),
          createVNode(_component_el_descriptions, {
            title: "Vertical list without border",
            column: 4,
            size: $setup.sizeVertical,
            direction: "vertical",
            style: normalizeStyle($setup.blockMargin)
          }, {
            default: withCtx(() => [
              createVNode(_component_el_descriptions_item, { label: "Username" }, {
                default: withCtx(() => [
                  createTextVNode(" kooriookami ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Telephone" }, {
                default: withCtx(() => [
                  createTextVNode(" 18100000000 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, {
                label: "Place",
                span: 2
              }, {
                default: withCtx(() => [
                  createTextVNode(" Suzhou ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Remarks" }, {
                default: withCtx(() => [
                  createVNode(_component_el_tag, { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode(" School ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, { label: "Address" }, {
                default: withCtx(() => [
                  createTextVNode(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["size", "style"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Customized Style" }, {
        controls: withCtx(() => [
          createCommentVNode(" HstControl ")
        ]),
        default: withCtx(() => [
          createVNode(_component_el_descriptions, {
            title: "Customized style list",
            column: 3,
            border: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_el_descriptions_item, {
                label: "Username",
                "label-align": "right",
                align: "center",
                "label-class-name": "my-label",
                "class-name": "my-content",
                width: "150px"
              }, {
                default: withCtx(() => [
                  createTextVNode(" kooriookami ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, {
                label: "Telephone",
                "label-align": "right",
                align: "center"
              }, {
                default: withCtx(() => [
                  createTextVNode(" 18100000000 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, {
                label: "Place",
                "label-align": "right",
                align: "center"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Suzhou ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, {
                label: "Remarks",
                "label-align": "right",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_tag, { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode(" School ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_descriptions_item, {
                label: "Address",
                "label-align": "right",
                align: "center"
              }, {
                default: withCtx(() => [
                  createTextVNode(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")
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
      })
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/components/Data/descriptions.story.vue";
const descriptions_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-49f51c28"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/descriptions.story.vue"]]);
export {
  descriptions_story as default
};
