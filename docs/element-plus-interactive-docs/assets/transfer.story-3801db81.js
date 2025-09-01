import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aX as normalizeStyle, bs as unref, aI as createBaseVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { u as useElDisplay } from "./useEl-0078f831.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const transfer_story_vue_vue_type_style_index_0_scoped_a480bdc4_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "transfer.story",
  setup(__props, { expose: __expose }) {
    __expose();
    function generateData() {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    }
    const basicData = reactive({
      data: generateData(),
      value: [],
      filterable: false,
      filterPlaceholder: "Enter keyword",
      targetOrder: "original",
      titles: ["List 1", "List 2"],
      buttonTexts: ["", ""]
    });
    const basicSource = computed(() => {
      return `<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: \`Option \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])
<\/script>

<el-transfar
  v-model="value"
  :data="data"${isAttribute(
        basicData.filterable,
        "filterable"
      )}${isAttribute(
        basicData.filterPlaceholder !== "Enter keyword" && basicData.filterable,
        `filter-placeholder="${basicData.filterPlaceholder}""`
      )}${isAttribute(
        basicData.targetOrder !== "original",
        "target-order"
      )}${isAttribute(
        basicData.titles.toString() !== "List 1,List 2",
        `:titles="['${basicData.titles[0]}', '${basicData.titles[1]}]"`
      )}${isAttribute(
        basicData.buttonTexts.toString() !== ",",
        `:button-texts="['${basicData.buttonTexts[0]}', '${basicData.buttonTexts[1]}]"`
      )}
/>
`;
    });
    const __returned__ = { generateData, basicData, basicSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "content-bar" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_transfer = resolveComponent("el-transfer");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Transfer",
    icon: "bx:transfer-alt",
    layout: {
      type: "grid",
      width: "100%"
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.filterable,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.filterable = $event),
            title: "filterable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.filterPlaceholder,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.filterPlaceholder = $event),
            title: "filter-placeholder",
            style: normalizeStyle(unref(useElDisplay)($setup.basicData.filterable))
          }, null, 8, ["modelValue", "style"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.basicData.targetOrder,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.targetOrder = $event),
            title: "target-order",
            options: [
              { label: "original", value: "original" },
              { label: "push", value: "push" },
              { label: "unshift", value: "unshift" }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.titles[0],
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.titles[0] = $event),
            title: "left-title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.titles[1],
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.titles[1] = $event),
            title: "right-title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.buttonTexts[0],
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.buttonTexts[0] = $event),
            title: "left-button-text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.buttonTexts[1],
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicData.buttonTexts[1] = $event),
            title: "right-button-text"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_el_transfer, {
              modelValue: $setup.basicData.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicData.value = $event),
              data: $setup.basicData.data,
              filterable: $setup.basicData.filterable,
              "filter-placeholder": $setup.basicData.filterPlaceholder,
              "target-order": $setup.basicData.targetOrder,
              titles: $setup.basicData.titles,
              "button-texts": $setup.basicData.buttonTexts
            }, null, 8, ["modelValue", "data", "filterable", "filter-placeholder", "target-order", "titles", "button-texts"])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Form/Transfer/transfer.story.vue";
const transfer_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a480bdc4"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/Transfer/transfer.story.vue"]]);
export {
  transfer_story as default
};
