import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, b1 as ElInput, aD as createVNode, aH as createTextVNode, b2 as createSlots, aE as createElementBlock, aF as renderList, aG as Fragment, b3 as withKeys, b4 as nextTick, aK as logEvent, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>Tag usage</p>
<h2 id="removable-tag" tabindex="-1">Removable Tag <a class="header-anchor" href="#removable-tag" aria-hidden="true">#</a></h2>
<p>closable attribute can be used to define a removable tag. It accepts a Boolean. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the disable-transitions attribute, which accepts a Boolean, to true. close event triggers when Tag is removed.</p>
<h2 id="edit-dynamically" tabindex="-1">Edit Dynamically <a class="header-anchor" href="#edit-dynamically" aria-hidden="true">#</a></h2>
<p>You can use the close event to add and remove tag dynamically.</p>
<h2 id="theme" tabindex="-1">Theme <a class="header-anchor" href="#theme" aria-hidden="true">#</a></h2>
<p>Tag provide three different themes: dark、light and plain</p>
<p>Using effect to change, default is light</p>
<h2 id="checkable-tag" tabindex="-1">Checkable tag <a class="header-anchor" href="#checkable-tag" aria-hidden="true">#</a></h2>
<p>Sometimes because of the business needs, we might need checkbox like tag, but button like checkbox cannot meet our needs, here comes check-tag</p>
<p>basic check-tag usage, the API is rather simple.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tag.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const currentType = ref("success");
    const closable = ref(true);
    const rounded = ref(true);
    const disableTransitions = ref(true);
    const tagTypeList = [
      {
        label: "default",
        value: ""
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
        label: "danger",
        value: "danger"
      },
      {
        label: "info",
        value: "info"
      }
    ];
    const currentSize = ref("large");
    const tagSizeList = [
      {
        label: "large",
        value: "large"
      },
      {
        label: "default",
        value: "default"
      },
      {
        label: "small",
        value: "small"
      }
    ];
    const ThemeList = [
      {
        label: "Dark Theme",
        value: "dark"
      },
      {
        label: "Light Theme",
        value: "light"
      },
      {
        label: "Plain Theme",
        value: "plain"
      }
    ];
    const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
    const currentTheme = ref("light");
    const inputValue = ref("");
    const inputVisible = ref(false);
    const InputRef = ref();
    function handleClose(tag) {
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
    }
    function showInput() {
      inputVisible.value = true;
      nextTick(() => {
        InputRef.value.input.focus();
      });
    }
    function handleInputConfirm() {
      if (inputValue.value)
        dynamicTags.value.push(inputValue.value);
      inputVisible.value = false;
      inputValue.value = "";
    }
    function fireClose(e) {
      logEvent("close", e);
    }
    const checked = ref(false);
    function onChange(status) {
      checked.value = status;
    }
    const __returned__ = { currentType, closable, rounded, disableTransitions, tagTypeList, currentSize, tagSizeList, ThemeList, dynamicTags, currentTheme, inputValue, inputVisible, InputRef, handleClose, showInput, handleInputConfirm, fireClose, checked, onChange, get ElInput() {
      return ElInput;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_el_button = resolveComponent("el-button");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_el_check_tag = resolveComponent("el-check-tag");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Tag",
    layout: {
      type: "grid",
      width: 400
    },
    icon: "mdi:tag-text-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentType,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentType = $event),
            title: "Tag Type",
            options: $setup.tagTypeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentSize,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.currentSize = $event),
            title: "Tag Sizes",
            options: $setup.tagSizeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_tag, {
            type: $setup.currentType,
            size: $setup.currentSize
          }, {
            default: withCtx(() => [
              createTextVNode(" Tag ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Removable Tag" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentType,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.currentType = $event),
            title: "Tag Type",
            options: $setup.tagTypeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.closable,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.closable = $event),
            title: "closable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.disableTransitions,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.disableTransitions = $event),
            title: "disableTransitions"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_tag, {
            closable: $setup.closable,
            type: $setup.currentType,
            "disable-transitions": $setup.disableTransitions,
            onClose: $setup.fireClose
          }, {
            default: withCtx(() => [
              createTextVNode(" Removable Tag ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["closable", "type", "disable-transitions"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(
        _component_Variant,
        { title: "Edit Dynamically" },
        createSlots({
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.dynamicTags, (tag) => {
                return openBlock(), createBlock(_component_el_tag, {
                  key: tag,
                  closable: $setup.closable,
                  "disable-transitions": $setup.disableTransitions,
                  style: { "margin": "0 5px" },
                  onClose: ($event) => $setup.handleClose(tag)
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(tag),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["closable", "disable-transitions", "onClose"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            $setup.inputVisible ? (openBlock(), createBlock($setup["ElInput"], {
              key: 0,
              ref: "InputRef",
              modelValue: $setup.inputValue,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.inputValue = $event),
              style: { "margin-left": "10px", "width": "120px" },
              size: "small",
              onKeyup: withKeys($setup.handleInputConfirm, ["enter"]),
              onBlur: $setup.handleInputConfirm
            }, null, 8, ["modelValue", "onKeyup"])) : (openBlock(), createBlock(_component_el_button, {
              key: 1,
              class: "button-new-tag ml-1",
              size: "small",
              onClick: $setup.showInput
            }, {
              default: withCtx(() => [
                createTextVNode(" + New Tag ")
              ]),
              _: 1
              /* STABLE */
            }))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          $setup.dynamicTags.length > 0 ? {
            name: "controls",
            fn: withCtx(() => [
              createVNode(_component_HstCheckbox, {
                modelValue: $setup.closable,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.closable = $event),
                title: "closable"
              }, null, 8, ["modelValue"]),
              createVNode(_component_HstCheckbox, {
                modelValue: $setup.disableTransitions,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.disableTransitions = $event),
                title: "disableTransitions"
              }, null, 8, ["modelValue"])
            ]),
            key: "0"
          } : void 0
        ]),
        1024
        /* DYNAMIC_SLOTS */
      ),
      createVNode(_component_Variant, { title: "Theme" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentType,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.currentType = $event),
            title: "Tag Type",
            options: $setup.tagTypeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.currentTheme,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.currentTheme = $event),
            title: "Theme",
            options: $setup.ThemeList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_tag, {
            type: $setup.currentType,
            effect: $setup.currentTheme
          }, {
            default: withCtx(() => [
              createTextVNode(" Tag ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type", "effect"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Rounded" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentType,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.currentType = $event),
            title: "Tag Type",
            options: $setup.tagTypeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.currentTheme,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.currentTheme = $event),
            title: "Theme",
            options: $setup.ThemeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.rounded,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.rounded = $event),
            title: "rounded"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_tag, {
            type: $setup.currentType,
            effect: $setup.currentTheme,
            round: $setup.rounded
          }, {
            default: withCtx(() => [
              createTextVNode(" Tag ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type", "effect", "round"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Checkable tag" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.checked,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.checked = $event),
            title: "checked"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_check_tag, {
            checked: "",
            style: { "margin-right": "8px" }
          }, {
            default: withCtx(() => [
              createTextVNode(" Checked ")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_check_tag, {
            checked: $setup.checked,
            onChange: $setup.onChange
          }, {
            default: withCtx(() => [
              createTextVNode(" Toggle me ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["checked"])
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
_sfc_main.__file = "src/components/Data/tag.story.vue";
const tag_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/tag.story.vue"]]);
export {
  tag_story as default
};
