import { _ as __unplugin_components_2 } from "./HstColor-f0907a47.js";
import { ax as defineComponent, ay as ref, aQ as computed, aY as reactive, az as resolveComponent, bo as resolveDirective, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, bp as withDirectives, aH as createTextVNode, aK as logEvent, bu as ElLoading, aL as pushScopeId, aM as popScopeId, aI as createBaseVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const loading_story_vue_vue_type_style_index_0_scoped_ab306206_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "loading.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicLoadingData = ref(false);
    const basicSource = computed(() => {
      return `<template>
  <el-card v-loading="${basicLoadingData.value}"}>
    <div class="content">
      content
    </div>
  </el-card>
</template>

<style scoped>
.content {
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
`;
    });
    const customLoadingData = reactive({
      loading: false,
      text: "",
      spinner: "",
      svg: "",
      viewBox: "",
      background: ""
    });
    const customLoadingSource = computed(() => {
      return `<el-card 
  v-loading="${customLoadingData.loading}"${isAttribute(
        customLoadingData.text !== "",
        `element-loading-text="${customLoadingData.text}"`
      )}${isAttribute(
        customLoadingData.spinner !== "",
        `element-loading-spinner="${customLoadingData.spinner}"`
      )}${isAttribute(
        customLoadingData.svg !== "",
        `element-loading-svg="${customLoadingData.svg}"`
      )}${isAttribute(
        customLoadingData.viewBox !== "",
        `element-loading-svg-view-box="${customLoadingData.viewBox}"`
      )}${isAttribute(
        customLoadingData.background !== "",
        `element-loading-background="${customLoadingData.background}"`
      )}
>
  <div class="content">
    content
  </div>
</el-card>

<style scoped>
.content {
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
`;
    });
    const fullscreenLoading = ref(false);
    function openFullScreen1() {
      logEvent("click", { log: "Full Screen Loading as a directive" });
      fullscreenLoading.value = true;
      setTimeout(() => {
        fullscreenLoading.value = false;
      }, 2e3);
    }
    function openFullScreen2() {
      logEvent("click", { log: "Full Screen Loading as a service" });
      const loading = ElLoading.service();
      setTimeout(() => {
        loading.close();
      }, 2e3);
    }
    const fullscreenLoadingSource = computed(() => {
      return `<script setup lang="ts">
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}

const openFullScreen2 = () => {
  const loading = ElLoading.service()
  setTimeout(() => {
    loading.close()
  }, 2000)
}
<\/script>

<template>
  <el-button
    v-loading.fullscreen.lock="fullscreenLoading"
    type="primary"
    @click="openFullScreen1"
  >
    As a directive
  </el-button>
  <el-button type="primary" @click="openFullScreen2"> As a service </el-button>
</template>
`;
    });
    const serviceLoadingData = reactive({
      lock: false,
      text: "",
      spinner: "",
      background: ""
    });
    function openServiceLoading() {
      const loading = ElLoading.service(serviceLoadingData);
      setTimeout(() => {
        loading.close();
      }, 2e3);
    }
    const serviceLoadingSource = computed(() => {
      return `<script setup lang="ts">
import { ElLoading } from 'element-plus'

const openServiceLoading = () => {
  const loading = ElLoading.service({
    lock: ${serviceLoadingData.lock},${serviceLoadingData.text !== "" ? `
    text: ${serviceLoadingData.text},` : ""}${serviceLoadingData.spinner !== "" ? `
    spinner: ${serviceLoadingData.spinner},` : ""}${serviceLoadingData.background !== "" ? `
    background: ${serviceLoadingData.background},` : ""}
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
<\/script>

<template>
  <el-button type="primary" @click="openServiceLoading"> Service Loading </el-button>
</template>
`;
    });
    const __returned__ = { basicLoadingData, basicSource, customLoadingData, customLoadingSource, fullscreenLoading, openFullScreen1, openFullScreen2, fullscreenLoadingSource, serviceLoadingData, openServiceLoading, serviceLoadingSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-ab306206"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "content" },
  " content ",
  -1
  /* HOISTED */
));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "content" },
  " content ",
  -1
  /* HOISTED */
));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "element-loading",
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_card = resolveComponent("el-card");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_el_divider = resolveComponent("el-divider");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstColor = __unplugin_components_2;
  const _component_el_button = resolveComponent("el-button");
  const _component_Story = resolveComponent("Story");
  const _directive_loading = resolveDirective("loading");
  return openBlock(), createBlock(_component_Story, {
    title: "Feedback/Loading",
    icon: "ep:loading"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicLoadingData,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicLoadingData = $event),
            title: "v-loading"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          withDirectives((openBlock(), createBlock(_component_el_card, null, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
            /* STABLE */
          })), [
            [_directive_loading, $setup.basicLoadingData]
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Custom Loading",
        source: $setup.customLoadingSource,
        icon: "material-symbols:dashboard-customize-outline"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.customLoadingData.loading,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.customLoadingData.loading = $event),
            title: "v-loading"
          }, null, 8, ["modelValue"]),
          createVNode(_component_el_divider, {
            "border-style": "dotted",
            "content-position": "left"
          }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_HstText, {
            modelValue: $setup.customLoadingData.text,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.customLoadingData.text = $event),
            title: "text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.customLoadingData.spinner,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.customLoadingData.spinner = $event),
            title: "spinner"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.customLoadingData.svg,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.customLoadingData.svg = $event),
            title: "svg"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.customLoadingData.viewBox,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.customLoadingData.viewBox = $event),
            title: "svg-view-box"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstColor, {
            modelValue: $setup.customLoadingData.background,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.customLoadingData.background = $event),
            title: "background"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          withDirectives((openBlock(), createBlock(_component_el_card, {
            "element-loading-text": $setup.customLoadingData.text,
            "element-loading-spinner": $setup.customLoadingData.spinner,
            "element-loading-svg": $setup.customLoadingData.svg,
            "element-loading-svg-view-box": $setup.customLoadingData.viewBox,
            "element-loading-background": $setup.customLoadingData.background
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
            /* STABLE */
          }, 8, ["element-loading-text", "element-loading-spinner", "element-loading-svg", "element-loading-svg-view-box", "element-loading-background"])), [
            [_directive_loading, $setup.customLoadingData.loading]
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Full Screen Loading",
        source: $setup.fullscreenLoadingSource,
        icon: "material-symbols:fullscreen-rounded"
      }, {
        default: withCtx(() => [
          withDirectives((openBlock(), createBlock(_component_el_button, {
            type: "primary",
            onClick: $setup.openFullScreen1
          }, {
            default: withCtx(() => [
              createTextVNode(" As a directive ")
            ]),
            _: 1
            /* STABLE */
          })), [
            [
              _directive_loading,
              $setup.fullscreenLoading,
              void 0,
              {
                fullscreen: true,
                lock: true
              }
            ]
          ]),
          createVNode(_component_el_button, {
            type: "primary",
            onClick: $setup.openFullScreen2
          }, {
            default: withCtx(() => [
              createTextVNode(" As a service ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Service Loading",
        source: $setup.serviceLoadingSource,
        icon: "carbon:edge-service"
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.serviceLoadingData.lock,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.serviceLoadingData.lock = $event),
            title: "Lock"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.serviceLoadingData.text,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.serviceLoadingData.text = $event),
            title: "Text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.serviceLoadingData.spinner,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.serviceLoadingData.spinner = $event),
            title: "Spinner"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstColor, {
            modelValue: $setup.serviceLoadingData.background,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.serviceLoadingData.background = $event),
            title: "Background"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, {
            type: "primary",
            onClick: $setup.openServiceLoading
          }, {
            default: withCtx(() => [
              createTextVNode(" Service Loading ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Feedback/Loading/loading.story.vue";
const loading_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ab306206"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Feedback/Loading/loading.story.vue"]]);
export {
  loading_story as default
};
