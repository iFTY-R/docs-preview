import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aN as caret_bottom_default, aO as share_default, aD as createVNode, aH as createTextVNode, aI as createBaseVNode } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const badge_story_vue_vue_type_style_index_0_scoped_72f26fc4_lang = "";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>Displays the amount of new messages.</p>\n<p>The amount is defined with <code>value</code> which accepts <code>Number</code> or <code>String</code>.</p>\n<h2 id="max-value" tabindex="-1">Max Value <a class="header-anchor" href="#max-value" aria-hidden="true">#</a></h2>\n<p>You can customize the max value.</p>\n<p>The max value is defined by property <code>max</code> which is a <code>Number</code>. Note that it only works when <code>value</code> is also a <code>Number</code>.</p>\n<h2 id="customizations" tabindex="-1">Customizations <a class="header-anchor" href="#customizations" aria-hidden="true">#</a></h2>\n<p>Displays text content other than numbers.</p>\n<p>When <code>value</code> is a <code>String</code>, it can display customized text.</p>\n<h2 id="red-dot" tabindex="-1">Red Dot <a class="header-anchor" href="#red-dot" aria-hidden="true">#</a></h2>\n<p>Use a red dot to mark content that needs to be noticed.</p>\n<p>Use the attribute <code>is-dot</code>. It is a <code>Boolean</code>.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "badge.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const currentValue = ref(12);
    const stringValue = ref("hot");
    const currentType = ref("danger");
    const maxValue = ref(10);
    const isDot = ref(true);
    const badgeTypeList = [
      {
        label: "danger",
        value: "danger"
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
        label: "info",
        value: "info"
      }
    ];
    const __returned__ = { currentValue, stringValue, currentType, maxValue, isDot, badgeTypeList, get CaretBottom() {
      return caret_bottom_default;
    }, get Share() {
      return share_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "el-dropdown-link" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_badge = resolveComponent("el-badge");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
  const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = resolveComponent("el-dropdown");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Badge",
    icon: "mdi:bell-badge-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.currentValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentValue = $event),
            title: "Badge Value"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentType,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.currentType = $event),
            title: "Badge Type",
            options: $setup.badgeTypeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_badge, {
            value: $setup.currentValue,
            type: $setup.currentType,
            class: "item"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_button, null, {
                default: withCtx(() => [
                  createTextVNode("comments")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "type"]),
          createVNode(_component_el_dropdown, { trigger: "click" }, {
            dropdown: withCtx(() => [
              createVNode(_component_el_dropdown_menu, null, {
                default: withCtx(() => [
                  createVNode(_component_el_dropdown_item, { class: "clearfix" }, {
                    default: withCtx(() => [
                      createTextVNode(" comments "),
                      createVNode(_component_el_badge, {
                        value: $setup.currentValue,
                        type: $setup.currentType,
                        class: "mark"
                      }, null, 8, ["value", "type"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_1, [
                createTextVNode(" Click Me "),
                createVNode(_component_el_icon, { class: "el-icon--right" }, {
                  default: withCtx(() => [
                    createVNode($setup["CaretBottom"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Max value" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.currentValue,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.currentValue = $event),
            title: "Badge Value"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.maxValue,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.maxValue = $event),
            title: "Max Value"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_badge, {
            value: $setup.currentValue,
            max: $setup.maxValue,
            class: "item"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_button, null, {
                default: withCtx(() => [
                  createTextVNode("comments")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "max"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Customizations" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.stringValue,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.stringValue = $event),
            title: "Badge Value"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_badge, {
            value: $setup.stringValue,
            class: "item"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_button, null, {
                default: withCtx(() => [
                  createTextVNode("replies")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Red dot" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isDot,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.isDot = $event),
            title: "Is Dot"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_badge, {
            "is-dot": $setup.isDot,
            class: "item"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                class: "share-button",
                icon: $setup.Share,
                type: "primary"
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["is-dot"])
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
_sfc_main.__file = "src/components/Data/badge.story.vue";
const badge_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-72f26fc4"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/badge.story.vue"]]);
export {
  badge_story as default
};
