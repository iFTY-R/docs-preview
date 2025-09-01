import { ax as defineComponent, ay as ref, bn as watchDebounced, aQ as computed, az as resolveComponent, bo as resolveDirective, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode, bp as withDirectives, aE as createElementBlock, aG as Fragment, aF as renderList, aW as createCommentVNode, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const infiniteScroll_story_vue_vue_type_style_index_0_scoped_2124fc03_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "infiniteScroll.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const count = ref(7);
    const distance = ref(0);
    const delay = ref(200);
    const disabled = ref(false);
    const refresh = ref(true);
    function load() {
      return count.value += 2;
    }
    watchDebounced(delay, () => {
      refresh.value = false;
      setTimeout(() => refresh.value = true, 0);
    }, { debounce: 500, maxWait: 1e3 });
    watchDebounced(distance, () => {
      refresh.value = false;
      setTimeout(() => refresh.value = true, 0);
    }, { debounce: 500, maxWait: 1e3 });
    const disableSource = computed(() => {
      return `<script setup lang="ts">
  import { ref } from 'vue'
  const count = ref(7)
  const disabled = ref(false)
  const delay = ref(200)
  const distance = ref(0)
  const load = () => count.value += 2
<\/script>
<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      v-infinite-scroll="load"
      class="list"
      :infinite-scroll-disabled="${disabled.value}"
      :infinite-scroll-delay="${delay.value}"
      :infinite-scroll-distance="${distance.value}"
    >
      <li v-for="i in count" :key="i" class="list-item">
        {{ i }}
      </li>
    </ul>
  </div>
</template>`;
    });
    const __returned__ = { count, distance, delay, disabled, refresh, load, disableSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "infinite-list-wrapper",
  style: { "overflow": "auto" }
};
const _hoisted_2 = ["infinite-scroll-disabled", "infinite-scroll-delay", "infinite-scroll-distance"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  const _directive_infinite_scroll = resolveDirective("infinite-scroll");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/InfiniteScroll",
    icon: "carbon:auto-scroll"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic usage",
        source: $setup.disableSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.disabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.disabled = $event),
            title: "infinite-scroll-disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.delay,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.delay = $event),
            title: "infinite-scroll-delay"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.distance,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.distance = $event),
            title: "infinite-scroll-distance"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            $setup.refresh ? withDirectives((openBlock(), createElementBlock("ul", {
              key: 0,
              class: "list",
              "infinite-scroll-disabled": $setup.disabled,
              "infinite-scroll-delay": $setup.delay,
              "infinite-scroll-distance": $setup.distance
            }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.count, (i) => {
                  return openBlock(), createElementBlock(
                    "li",
                    {
                      key: i,
                      class: "list-item"
                    },
                    toDisplayString(i),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, _hoisted_2)), [
              [_directive_infinite_scroll, $setup.load]
            ]) : createCommentVNode("v-if", true)
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
_sfc_main.__file = "src/components/Data/InfiniteScroll/infiniteScroll.story.vue";
const infiniteScroll_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2124fc03"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/InfiniteScroll/infiniteScroll.story.vue"]]);
export {
  infiniteScroll_story as default
};
