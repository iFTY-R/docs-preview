import { ax as defineComponent, ay as ref, aZ as onMounted, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aK as logEvent, aD as createVNode, aI as createBaseVNode, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>You can get some recommended tips based on the current input.</p>\n<p>Autocomplete component provides input suggestions. The <code>fetch-suggestions</code> attribute is a method that returns suggested input. In this example, <code>querySearch(queryString, cb)</code> returns suggestions to Autocomplete via <code>cb(data)</code> when suggestions are ready.</p>\n<h2 id="custom-template" tabindex="-1">Custom template <a class="header-anchor" href="#custom-template" aria-hidden="true">#</a></h2>\n<p>Customize how suggestions are displayed.</p>\n<p>Use <code>scoped slot</code> to customize suggestion items. In the scope, you can access the suggestion object via the <code>item</code> key.</p>\n<h2 id="remote-search" tabindex="-1">Remote search <a class="header-anchor" href="#remote-search" aria-hidden="true">#</a></h2>\n<p>Search data from server-side.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "autocomplete.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const clearable = ref(true);
    const triggerOnFocus = ref(false);
    const state1 = ref("");
    const state = ref("");
    const isAsync = ref(true);
    const links = ref([]);
    function createFilter(queryString) {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    }
    function querySearch(queryString, cb) {
      const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
      cb(results);
    }
    let timeout;
    function querySearchAsync(queryString, cb) {
      const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 3e3 * Math.random());
    }
    function loadAll() {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" }
      ];
    }
    function handleSelect(value) {
      logEvent("select", value);
    }
    onMounted(() => {
      links.value = loadAll();
    });
    const __returned__ = { clearable, triggerOnFocus, state1, state, isAsync, links, createFilter, querySearch, get timeout() {
      return timeout;
    }, set timeout(v) {
      timeout = v;
    }, querySearchAsync, loadAll, handleSelect, get logEvent() {
      return logEvent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "value" };
const _hoisted_2 = { class: "link" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_autocomplete = resolveComponent("el-autocomplete");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_edit = resolveComponent("edit");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Autocomplete",
    icon: "ph:list-dashes"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.clearable,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.clearable = $event),
            title: "Clearable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.triggerOnFocus,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.triggerOnFocus = $event),
            title: "Trigger on focus"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_autocomplete, {
            modelValue: $setup.state1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state1 = $event),
            "fetch-suggestions": $setup.querySearch,
            clearable: $setup.clearable,
            placeholder: "Please Input",
            "trigger-on-focus": $setup.triggerOnFocus,
            onSelect: $setup.handleSelect
          }, null, 8, ["modelValue", "clearable", "trigger-on-focus"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom template" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.clearable,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.clearable = $event),
            title: "Clearable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_autocomplete, {
            modelValue: $setup.state,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state = $event),
            "fetch-suggestions": $setup.querySearch,
            "popper-class": "my-autocomplete",
            placeholder: "Please input",
            onSelect: $setup.handleSelect
          }, {
            suffix: withCtx(() => [
              createVNode(_component_el_icon, {
                class: "el-input__icon",
                onClick: _cache[3] || (_cache[3] = ($event) => $setup.logEvent("iconClick", $event))
              }, {
                default: withCtx(() => [
                  createVNode(_component_edit)
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            default: withCtx(({ item }) => [
              createBaseVNode(
                "div",
                _hoisted_1,
                toDisplayString(item.value),
                1
                /* TEXT */
              ),
              createBaseVNode(
                "span",
                _hoisted_2,
                toDisplayString(item.link),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Remote search" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.clearable,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.clearable = $event),
            title: "Clearable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isAsync,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.isAsync = $event),
            title: "Remote search"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_autocomplete, {
            modelValue: $setup.state,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state = $event),
            clearable: $setup.clearable,
            "fetch-suggestions": $setup.isAsync ? $setup.querySearchAsync : $setup.querySearch,
            placeholder: "Please input",
            onSelect: $setup.handleSelect
          }, null, 8, ["modelValue", "clearable", "fetch-suggestions"])
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
_sfc_main.__file = "src/components/Form/autocomplete.story.vue";
const autocomplete_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/autocomplete.story.vue"]]);
export {
  autocomplete_story as default
};
