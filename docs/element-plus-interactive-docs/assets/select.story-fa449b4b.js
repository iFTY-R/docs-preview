import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aI as createBaseVNode, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { s as sizeOptions } from "./sizeOptions-57bd3279.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const selectOptions = [
  {
    value: "Option1",
    label: "Option1"
  },
  {
    value: "Option2",
    label: "Option2",
    disabled: true
  },
  {
    value: "Option3",
    label: "Option3"
  },
  {
    value: "Option4",
    label: "Option4"
  },
  {
    value: "Option5",
    label: "Option5"
  }
];
const groupOptions = [
  {
    label: "Popular cities",
    options: [
      {
        value: "Shanghai",
        label: "Shanghai"
      },
      {
        value: "Beijing",
        label: "Beijing"
      }
    ]
  },
  {
    label: "City name",
    options: [
      {
        value: "Chengdu",
        label: "Chengdu"
      },
      {
        value: "Shenzhen",
        label: "Shenzhen"
      },
      {
        value: "Guangzhou",
        label: "Guangzhou"
      },
      {
        value: "Dalian",
        label: "Dalian"
      }
    ]
  }
];
const templateSource = `
<el-select
  v-model="value"
>
  <el-option
    v-for="item in Options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
  >
    <span style="float: left">{{ item.label }}</span>
    <span
      style="
        float: right;
        color: var(--el-text-color-secondary);
        font-size: 13px;
      "
    >{{ item.value }}</span>
  </el-option>
</el-select>
`;
const templateSourceGroup = `
<template>
  <el-select v-model="value" placeholder="Select">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
    >
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-option-group>
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    label: 'Popular cities',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Beijing',
        label: 'Beijing',
      },
    ],
  },
  {
    label: 'City name',
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
      {
        value: 'Dalian',
        label: 'Dalian',
      },
    ],
  },
]
<\/script>
`;
const select_story_vue_vue_type_style_index_0_scoped_0dec99ff_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const initState = reactive({
      value: "",
      size: "",
      disabled: false,
      clearable: false,
      filterable: false,
      allowCreate: false,
      multiple: false,
      multipleLimit: 0,
      placeholder: "Select",
      defaultFirstOption: false,
      popperClass: "",
      reserveKeyword: false,
      valueKey: "",
      collapseTags: false,
      collapseTagsTooltip: false,
      popperAppendToBody: true,
      automaticDropdown: true
    });
    const BasicSource = computed(
      () => `
<el-select
  v-model="${initState.value}"
  :placeholder="${initState.placeholder}"
  :size="state.size"
  :disabled="state.disabled"
  :clearable="state.clearable"
>
  <el-option
    v-for="item in selectOptions"
    :key="item.value"
    :label="item.label"
    :value="item.value"
    :disabled="item.disabled"
  />
</el-select>`
    );
    const __returned__ = { initState, BasicSource, get sizeOptions() {
      return sizeOptions;
    }, get groupOptions() {
      return groupOptions;
    }, get selectOptions() {
      return selectOptions;
    }, get templateSource() {
      return templateSource;
    }, get templateSourceGroup() {
      return templateSourceGroup;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "left-bar" };
const _hoisted_2 = { class: "right-bar" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_el_option_group = resolveComponent("el-option-group");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Select",
    icon: "mi:select"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        "init-state": () => $setup.initState,
        source: $setup.BasicSource
      }, {
        default: withCtx(({ state }) => [
          createVNode(_component_el_select, {
            modelValue: state.value,
            "onUpdate:modelValue": ($event) => state.value = $event,
            placeholder: state.placeholder,
            size: state.size,
            disabled: state.disabled,
            clearable: state.clearable
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.selectOptions, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value,
                    disabled: item.disabled
                  }, null, 8, ["label", "value", "disabled"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "size", "disabled", "clearable"])
        ]),
        controls: withCtx(({ state }) => [
          createVNode(_component_HstText, {
            modelValue: state.placeholder,
            "onUpdate:modelValue": ($event) => state.placeholder = $event,
            title: "Placeholder"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: state.size,
            "onUpdate:modelValue": ($event) => state.size = $event,
            title: "Size",
            options: $setup.sizeOptions
          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: state.disabled,
            "onUpdate:modelValue": ($event) => state.disabled = $event,
            title: "Disabled"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: state.clearable,
            "onUpdate:modelValue": ($event) => state.clearable = $event,
            title: "Clearable"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["init-state", "source"]),
      createVNode(_component_Variant, {
        title: "multiple select",
        "init-state": () => $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode(_component_el_select, {
            modelValue: state.value,
            "onUpdate:modelValue": ($event) => state.value = $event,
            multiple: "",
            "collapse-tags": state.collapseTags,
            "collapse-tags-tooltip": state.collapseTagsTooltip
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.selectOptions, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["modelValue", "onUpdate:modelValue", "collapse-tags", "collapse-tags-tooltip"])
        ]),
        controls: withCtx(({ state }) => [
          createVNode(_component_HstCheckbox, {
            modelValue: state.collapseTags,
            "onUpdate:modelValue": ($event) => state.collapseTags = $event,
            title: "CollapseTags"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: state.collapseTagsTooltip,
            "onUpdate:modelValue": ($event) => state.collapseTagsTooltip = $event,
            title: "TagsTooltip"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["init-state"]),
      createVNode(_component_Variant, {
        title: "Option filtering",
        "init-state": () => $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode(_component_el_select, {
            modelValue: state.value,
            "onUpdate:modelValue": ($event) => state.value = $event,
            filterable: state.filterable,
            "allow-create": state.allowCreate
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.selectOptions, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["modelValue", "onUpdate:modelValue", "filterable", "allow-create"])
        ]),
        controls: withCtx(({ state }) => [
          createVNode(_component_HstCheckbox, {
            modelValue: state.filterable,
            "onUpdate:modelValue": ($event) => state.filterable = $event,
            title: "Filterable"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: state.allowCreate,
            "onUpdate:modelValue": ($event) => state.allowCreate = $event,
            title: "AllowCreate"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["init-state"]),
      createVNode(_component_Variant, {
        title: "Custom template",
        "init-state": () => $setup.initState,
        source: $setup.templateSource
      }, {
        default: withCtx(({ state }) => [
          createVNode(_component_el_select, {
            modelValue: state.value,
            "onUpdate:modelValue": ($event) => state.value = $event
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.selectOptions, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, {
                    default: withCtx(() => [
                      createBaseVNode(
                        "span",
                        _hoisted_1,
                        toDisplayString(item.label),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_2,
                        toDisplayString(item.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label", "value"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["init-state", "source"]),
      createVNode(_component_Variant, {
        title: "Grouping",
        "init-state": () => $setup.initState,
        source: $setup.templateSourceGroup
      }, {
        default: withCtx(({ state }) => [
          createVNode(_component_el_select, {
            modelValue: state.value,
            "onUpdate:modelValue": ($event) => state.value = $event,
            placeholder: "Select"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.groupOptions, (group) => {
                  return openBlock(), createBlock(_component_el_option_group, {
                    key: group.label,
                    label: group.label
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(group.options, (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.value,
                            label: item.label,
                            value: item.value
                          }, null, 8, ["label", "value"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["init-state", "source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Form/Select/select.story.vue";
const select_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0dec99ff"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/Select/select.story.vue"]]);
export {
  select_story as default
};
