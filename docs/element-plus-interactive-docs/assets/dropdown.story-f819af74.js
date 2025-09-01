import { _ as __unplugin_components_1 } from "./HstDivider-59750961.js";
import { _ as __unplugin_components_0 } from "./HstInputNumber-11486b21.js";
import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode, aX as normalizeStyle, bs as unref, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { u as useElDisplay } from "./useEl-0078f831.js";
import { t as typeOptions } from "./typeOptions-0f3ae1b8.js";
import { s as sizeOptions } from "./sizeOptions-57bd3279.js";
import { p as placementOptions } from "./placementOptions-e1a73a8b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dropdown.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      split: true,
      type: "",
      size: "default",
      disabled: false,
      placement: "bottom",
      trigger: "hover",
      hideOnClick: true,
      showTimeout: 250,
      hideTimeout: 150,
      item: {
        disabled: true,
        divided: true
      }
    });
    const basicSource = computed(() => {
      return `<el-dropdown${isAttribute(
        basicData.split,
        ':split-button="true"'
      )}${isAttribute(
        basicData.split && basicData.type !== "",
        `type="${basicData.type}"`
      )}${isAttribute(
        basicData.split && basicData.size !== "default",
        `size="${basicData.size}"`
      )}${isAttribute(
        basicData.disabled,
        ':disabled="true"'
      )}${isAttribute(
        basicData.placement !== "bottom",
        `placement="${basicData.placement}"`
      )}${isAttribute(
        basicData.trigger !== "hover",
        `trigger="${basicData.trigger}"`
      )}${isAttribute(
        basicData.trigger === "hover" && basicData.showTimeout !== 250,
        `:show-timeout="${basicData.showTimeout}"`
      )}${isAttribute(
        basicData.trigger === "hover" && basicData.hideTimeout !== 150,
        `:hide-timeout="${basicData.hideTimeout}"`
      )}${isAttribute(
        !basicData.hideOnClick,
        ':hide-on-click="false"'
      )}
>
  Dropdown List
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item${basicData.item.disabled ? " disabled" : ""}>
        Action 4
      </el-dropdown-item>
      <el-dropdown-item${basicData.item.divided ? " divided" : ""}>
        Action 5
      </el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>`;
    });
    const __returned__ = { basicData, basicSource, get typeOptions() {
      return typeOptions;
    }, get sizeOptions() {
      return sizeOptions;
    }, get placementOptions() {
      return placementOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
  const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = resolveComponent("el-dropdown");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstInputNumber = __unplugin_components_0;
  const _component_HstDivider = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Navigation/Dropdown",
    icon: "carbon:list-dropdown"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.split,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.split = $event),
            title: "split-button"
          }, null, 8, ["modelValue"]),
          createBaseVNode(
            "div",
            {
              style: normalizeStyle(unref(useElDisplay)($setup.basicData.split, "block"))
            },
            [
              createVNode(_component_HstSelect, {
                modelValue: $setup.basicData.type,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.type = $event),
                options: $setup.typeOptions,
                title: "type"
              }, null, 8, ["modelValue", "options"]),
              createVNode(_component_HstSelect, {
                modelValue: $setup.basicData.size,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.size = $event),
                options: $setup.sizeOptions,
                title: "size"
              }, null, 8, ["modelValue", "options"])
            ],
            4
            /* STYLE */
          ),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.disabled,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.disabled = $event),
            title: "disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.basicData.placement,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.placement = $event),
            options: $setup.placementOptions,
            title: "placement"
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.basicData.trigger,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.trigger = $event),
            options: ["hover", "click"],
            title: "trigger"
          }, null, 8, ["modelValue"]),
          createBaseVNode(
            "div",
            {
              style: normalizeStyle(unref(useElDisplay)($setup.basicData.trigger === "hover", "block"))
            },
            [
              createVNode(_component_HstInputNumber, {
                modelValue: $setup.basicData.showTimeout,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.showTimeout = $event),
                title: "showTimeout"
              }, null, 8, ["modelValue"]),
              createVNode(_component_HstInputNumber, {
                modelValue: $setup.basicData.hideTimeout,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicData.hideTimeout = $event),
                title: "hideTimeout"
              }, null, 8, ["modelValue"])
            ],
            4
            /* STYLE */
          ),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.hideOnClick,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.basicData.hideOnClick = $event),
            title: "hideOnClick"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstDivider, { content: "dropdown-item" }),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.item.disabled,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.basicData.item.disabled = $event),
            title: "item disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.item.divided,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.basicData.item.divided = $event),
            title: "item divided"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_dropdown, {
            "split-button": $setup.basicData.split,
            type: $setup.basicData.type,
            size: $setup.basicData.size,
            disabled: $setup.basicData.disabled,
            placement: $setup.basicData.placement,
            trigger: $setup.basicData.trigger,
            "hide-on-click": $setup.basicData.hideOnClick,
            "show-timeout": $setup.basicData.showTimeout,
            "hide-timeout": $setup.basicData.hideTimeout
          }, {
            dropdown: withCtx(() => [
              createVNode(_component_el_dropdown_menu, null, {
                default: withCtx(() => [
                  createVNode(_component_el_dropdown_item, null, {
                    default: withCtx(() => [
                      createTextVNode("Action 1")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_dropdown_item, null, {
                    default: withCtx(() => [
                      createTextVNode("Action 2")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_dropdown_item, null, {
                    default: withCtx(() => [
                      createTextVNode("Action 3")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_dropdown_item, {
                    disabled: $setup.basicData.item.disabled
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Action 4 ")
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  createVNode(_component_el_dropdown_item, {
                    divided: $setup.basicData.item.divided
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Action 5 ")
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["divided"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            default: withCtx(() => [
              createTextVNode(" Dropdown List ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["split-button", "type", "size", "disabled", "placement", "trigger", "hide-on-click", "show-timeout", "hide-timeout"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Navigation/Dropdown/dropdown.story.vue";
const dropdown_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Navigation/Dropdown/dropdown.story.vue"]]);
export {
  dropdown_story as default
};
