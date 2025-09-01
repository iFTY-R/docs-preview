import { ax as defineComponent, ay as ref, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, bq as zhCn, br as en } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "configProvider.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const language = ref("en");
    const locale = computed(() => language.value === "zhCn" ? zhCn : en);
    const basicSource = computed(() => {
      return `<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
<\/script>

<el-config-provider locale="${language.value}">
  <el-table :data="[]" />
  <el-pagination :total="5" />
</el-config-provider>`;
    });
    const __returned__ = { language, locale, basicSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");
  const _component_el_config_provider = resolveComponent("el-config-provider");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Configuration/ConfigProvider",
    icon: "icon-park-outline:config"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.language,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.language = $event),
            title: "Language",
            options: [
              { label: "zhCn", value: "zhCn" },
              { label: "en", value: "en" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_config_provider, { locale: $setup.locale }, {
            default: withCtx(() => [
              createVNode(_component_el_table, { data: [] }),
              createVNode(_component_el_pagination, { total: 5 })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["locale"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Configuration/ConfigProvider/configProvider.story.vue";
const configProvider_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Configuration/ConfigProvider/configProvider.story.vue"]]);
export {
  configProvider_story as default
};
