import { ax as defineComponent, aY as reactive, ay as ref, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aH as createTextVNode, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tabs.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      activeName: "first",
      type: "",
      closable: false,
      addable: false,
      editable: false,
      tabPosition: "top",
      stretch: false
    });
    const tabs = ref([
      {
        label: "Tab 1",
        name: "1",
        content: "Tab 1 content"
      },
      {
        label: "Tab 2",
        name: "2",
        content: "Tab 2 content"
      },
      {
        label: "Tab 3",
        name: "3",
        content: "Tab 3 content"
      }
    ]);
    const basicSource = computed(() => {
      return `<el-tabs
  v-model="activeName"${isAttribute(
        basicData.type !== "",
        `type="${basicData.type}"`
      )}${isAttribute(
        basicData.closable,
        "closable"
      )}${isAttribute(
        basicData.addable,
        "addable"
      )}${isAttribute(
        basicData.editable,
        "editable"
      )}${isAttribute(
        basicData.tabPosition !== "top",
        `tap-position="${basicData.tabPosition}"`
      )}${isAttribute(
        basicData.stretch,
        "stretch"
      )}
>
  <el-tab-pane
    v-for="tab in tabs"
    :key="tab.name"
    :label="tab.label" :name="tab.name"
  >
    {{ tab.content }}
  </el-tab-pane>
</el-tabs>

<script setup lang="ts">
import {ref} from 'vue'

const activeName = ref('1')
const tabs = ref([
  {
    label: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    label: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
  {
    label: 'Tab 3',
    name: '3',
    content: 'Tab 3 content',
  },
])
<\/script>
`;
    });
    const __returned__ = { basicData, tabs, basicSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tab_pane = resolveComponent("el-tab-pane");
  const _component_el_tabs = resolveComponent("el-tabs");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Navigation/Tabs",
    icon: "ph:tabs-light",
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
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.type,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.type = $event),
            options: [
              { label: "Default", value: "" },
              { label: "Card", value: "card" },
              { label: "Border Card", value: "border-card" }
            ],
            title: "Type"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.closable,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.closable = $event),
            title: "Closable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.addable,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.addable = $event),
            title: "Addable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.editable,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.editable = $event),
            title: "Editable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.tabPosition,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.tabPosition = $event),
            options: [
              { label: "Top", value: "top" },
              { label: "Right", value: "right" },
              { label: "Bottom", value: "bottom" },
              { label: "Left", value: "left" }
            ],
            title: "Tab Position"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.stretch,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.stretch = $event),
            title: "Stretch"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_tabs, {
            modelValue: $setup.basicData.activeName,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.activeName = $event),
            type: $setup.basicData.type,
            closable: $setup.basicData.closable,
            addable: $setup.basicData.addable,
            editable: $setup.basicData.editable,
            "tab-position": $setup.basicData.tabPosition,
            stretch: $setup.basicData.stretch
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.tabs, (tab) => {
                  return openBlock(), createBlock(_component_el_tab_pane, {
                    key: tab.name,
                    label: tab.label,
                    name: tab.name
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(tab.content),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label", "name"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "type", "closable", "addable", "editable", "tab-position", "stretch"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Navigation/Tabs/tabs.story.vue";
const tabs_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Navigation/Tabs/tabs.story.vue"]]);
export {
  tabs_story as default
};
