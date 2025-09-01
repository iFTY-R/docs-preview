import { _ as __unplugin_components_2 } from "./HstColor-f0907a47.js";
import { _ as __unplugin_components_1 } from "./HstDivider-59750961.js";
import { _ as __unplugin_components_0 } from "./HstInputNumber-11486b21.js";
import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aS as location_default, aD as createVNode, aX as normalizeStyle, bs as unref, aH as createTextVNode, aI as createBaseVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { u as useElDisplay } from "./useEl-0078f831.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "menu.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      mode: "vertical",
      defaultActive: 1,
      collapse: false,
      ellipsis: false,
      bgColor: "#FFF",
      textColor: "#303133",
      activeTextColor: "#409EFF",
      uniqueOpened: false,
      menuTrigger: "hover",
      router: false,
      collapseTransition: true,
      popperEffect: "light"
    });
    const basicSource = computed(() => {
      return `<el-menu
  default-active="${basicData.defaultActive}"${isAttribute(
        basicData.mode === "horizontal",
        'mode="horizontal"'
      )}${isAttribute(
        basicData.collapse && basicData.mode === "vertical",
        "collapse"
      )}${isAttribute(
        basicData.ellipsis && basicData.mode === "horizontal",
        ':ellipsis="false"'
      )}${isAttribute(
        basicData.bgColor !== "#FFF",
        `background-color="${basicData.bgColor}"`
      )}${isAttribute(
        basicData.textColor !== "#303133",
        `text-color="${basicData.textColor}"`
      )}${isAttribute(
        basicData.activeTextColor !== "#409EFF",
        `active-text-color="${basicData.activeTextColor}"`
      )}${isAttribute(
        basicData.uniqueOpened,
        ':unique-opened="true"'
      )}${isAttribute(
        basicData.menuTrigger === "click" && basicData.mode === "horizontal",
        'menu-trigger="click"'
      )}${isAttribute(
        basicData.router,
        "router"
      )}${isAttribute(
        !basicData.collapseTransition,
        'collapse-transition="false"'
      )}${isAttribute(
        basicData.popperEffect === "dark",
        'popper-effect="light"'
      )}
>
  <el-menu-item
    v-for="item in menuData"
    v-if="!item.children"
    :key="item.index"
    :index="item.index"
    :disabled="item.disabled"
  >
    <template #title>
      <span>{{ item.title }}</span>
    </template>
  </el-menu-item>
  <el-sub-menu
    v-for="item in menuData"
    v-if="item.children"
    :key="item.index"
    :index="item.index"
    :disabled="item.disabled"
  >
    <template #title>
      {{ item.title }}
    </template>
    <el-menu-item
      v-for="child in item.children"
      :key="child.index"
      :index="child.index"
      :disabled="child.disabled"
    >
      <template #title>
        <span>{{ child.title }}</span>
      </template>
    </el-menu-item>
  </el-sub-menu>
</el-menu>

<script setup lang="ts">
const menuData = [
  {
    index: '1',
    title: 'Navigator One',
  },
  {
    index: '2',
    title: 'Workspace',
    children: [
      {
        index: '2-1',
        title: 'item one',
      },
      {
        index: '2-2',
        title: 'item two',
      },
      {
        index: '2-3',
        title: 'item three',
      },
      {
        index: '2-4',
        title: 'item four',
        children: [
          {
            index: '2-4-1',
            title: 'item one',
          },
          {
            index: '2-4-2',
            title: 'item two',
          },
          {
            index: '2-4-3',
            title: 'item three',
          },
        ],
      },
    ],
  },
  {
    index: '3',
    title: 'Info',
    disabled: true,
  },
  {
    index: '4',
    title: 'Orders',
  },
]
<\/script>
  `;
    });
    const __returned__ = { basicData, basicSource, get Location() {
      return location_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Navigator One",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_sub_menu = resolveComponent("el-sub-menu");
  const _component_el_menu = resolveComponent("el-menu");
  const _component_el_col = resolveComponent("el-col");
  const _component_HstInputNumber = __unplugin_components_0;
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstDivider = __unplugin_components_1;
  const _component_HstColor = __unplugin_components_2;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Navigation/Menu",
    icon: "bi:menu-button-wide-fill",
    layout: {
      type: "grid",
      width: 600
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstInputNumber, {
            modelValue: $setup.basicData.defaultActive,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.defaultActive = $event),
            title: "default-active",
            min: 1,
            max: 4
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.mode,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.mode = $event),
            title: "mode",
            options: [
              { label: "vertical", value: "vertical" },
              { label: "horizontal", value: "horizontal" }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.collapse,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.collapse = $event),
            style: normalizeStyle(unref(useElDisplay)($setup.basicData.mode === "vertical")),
            title: "collapse"
          }, null, 8, ["modelValue", "style"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.ellipsis,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.ellipsis = $event),
            style: normalizeStyle(unref(useElDisplay)($setup.basicData.mode === "horizontal")),
            title: "ellipsis"
          }, null, 8, ["modelValue", "style"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.uniqueOpened,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.uniqueOpened = $event),
            title: "unique-opened"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.menuTrigger,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.menuTrigger = $event),
            style: normalizeStyle(unref(useElDisplay)($setup.basicData.mode === "horizontal")),
            title: "menu-trigger",
            options: [
              { label: "hover", value: "hover" },
              { label: "click", value: "click" }
            ]
          }, null, 8, ["modelValue", "style"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.router,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.router = $event),
            title: "router"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.collapseTransition,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicData.collapseTransition = $event),
            title: "collapse-transition"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.popperEffect,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.basicData.popperEffect = $event),
            title: "popper-effect",
            options: [
              { label: "light", value: "light" },
              { label: "dark", value: "dark" }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstDivider, { content: "Color" }),
          createVNode(_component_HstColor, {
            modelValue: $setup.basicData.bgColor,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.basicData.bgColor = $event),
            title: "bg-color"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstColor, {
            modelValue: $setup.basicData.textColor,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.basicData.textColor = $event),
            title: "text-color"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstColor, {
            modelValue: $setup.basicData.activeTextColor,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.basicData.activeTextColor = $event),
            title: "active-text-color"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_col, {
            span: $setup.basicData.mode === "vertical" || $setup.basicData.ellipsis ? 12 : 100
          }, {
            default: withCtx(() => [
              createVNode(_component_el_menu, {
                "default-active": String($setup.basicData.defaultActive),
                mode: $setup.basicData.mode,
                collapse: $setup.basicData.collapse,
                ellipsis: $setup.basicData.ellipsis,
                "background-color": $setup.basicData.bgColor,
                "text-color": $setup.basicData.textColor,
                "active-text-color": $setup.basicData.activeTextColor,
                "unique-opened": $setup.basicData.uniqueOpened,
                "menu-trigger": $setup.basicData.menuTrigger,
                router: $setup.basicData.router,
                "collapse-transition": $setup.basicData.collapseTransition,
                "popper-effect": $setup.basicData.popperEffect
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_menu_item, { index: "1" }, {
                    title: withCtx(() => [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => [
                          createVNode($setup["Location"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _hoisted_1
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_sub_menu, { index: "2" }, {
                    title: withCtx(() => [
                      createTextVNode(" Workspace ")
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_el_menu_item, { index: "2-1" }, {
                        default: withCtx(() => [
                          createTextVNode(" item one ")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_el_menu_item, { index: "2-2" }, {
                        default: withCtx(() => [
                          createTextVNode(" item two ")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_el_menu_item, { index: "2-3" }, {
                        default: withCtx(() => [
                          createTextVNode(" item three ")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_el_sub_menu, { index: "2-4" }, {
                        title: withCtx(() => [
                          createTextVNode(" item four ")
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                            default: withCtx(() => [
                              createTextVNode(" item one ")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(_component_el_menu_item, { index: "2-4-2" }, {
                            default: withCtx(() => [
                              createTextVNode(" item two ")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(_component_el_menu_item, { index: "2-4-3" }, {
                            default: withCtx(() => [
                              createTextVNode(" item three ")
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
                  createVNode(_component_el_menu_item, {
                    index: "3",
                    disabled: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Info ")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_menu_item, { index: "4" }, {
                    default: withCtx(() => [
                      createTextVNode(" Orders ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["default-active", "mode", "collapse", "ellipsis", "background-color", "text-color", "active-text-color", "unique-opened", "menu-trigger", "router", "collapse-transition", "popper-effect"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["span"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Navigation/Menu/menu.story.vue";
const menu_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Navigation/Menu/menu.story.vue"]]);
export {
  menu_story as default
};
