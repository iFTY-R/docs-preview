import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aJ as user_filled_default, aD as createVNode, aI as createBaseVNode, aH as createTextVNode, aK as logEvent, aL as pushScopeId, aM as popScopeId } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const avatar_story_vue_vue_type_style_index_0_scoped_6b58c4ae_lang = "";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>Use shape and size prop to set avatar's shape and size.</p>
<h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2>
<p>It supports images, Icons, or characters.</p>
<h2 id="fallback" tabindex="-1">Fallback <a class="header-anchor" href="#fallback" aria-hidden="true">#</a></h2>
<p>fallback when image load error.</p>
<h2 id="fit-container" tabindex="-1">Fit Container <a class="header-anchor" href="#fit-container" aria-hidden="true">#</a></h2>
<p>Set how the image fit its container for an image avatar, same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank">object-fit</a>.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "avatar.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const url = ref("https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png");
    const avatarShapeList = [
      {
        label: "circle",
        value: "circle"
      },
      {
        label: "square",
        value: "square"
      }
    ];
    const avatarSizeList = [
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
    const fitList = [
      {
        label: "fill",
        value: "fill"
      },
      {
        label: "contain",
        value: "contain"
      },
      {
        label: "cover",
        value: "cover"
      },
      {
        label: "none",
        value: "none"
      },
      {
        label: "scale-down",
        value: "scale-down"
      }
    ];
    const currentShape = ref("circle");
    const currentSize = ref("default");
    const currentFit = ref("cover");
    const customSize = ref(50);
    function errorHandler() {
      return true;
    }
    function fireClose() {
      logEvent("error", errorHandler);
    }
    const __returned__ = { url, avatarShapeList, avatarSizeList, fitList, currentShape, currentSize, currentFit, customSize, errorHandler, fireClose, get UserFilled() {
      return user_filled_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-6b58c4ae"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "demo-type" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "img",
  { src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" },
  null,
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_avatar = resolveComponent("el-avatar");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Avatar",
    icon: "clarity:avatar-line"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentShape,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentShape = $event),
            title: "Avatar Shape",
            options: $setup.avatarShapeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentSize,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.currentSize = $event),
            title: "Avatar Sizes",
            options: $setup.avatarSizeList
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.customSize,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.customSize = $event),
            title: "Custom Avatar Size"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_avatar, {
            shape: $setup.currentShape,
            size: $setup.currentSize,
            src: $setup.url
          }, null, 8, ["shape", "size", "src"]),
          createVNode(_component_el_avatar, {
            shape: $setup.currentShape,
            style: { "margin": "0 20px" },
            size: $setup.customSize,
            src: $setup.url
          }, null, 8, ["shape", "size", "src"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Types" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_el_avatar, { icon: $setup.UserFilled }, null, 8, ["icon"]),
            createVNode(_component_el_avatar, { src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" }),
            createVNode(_component_el_avatar, null, {
              default: withCtx(() => [
                createTextVNode(" user ")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Fallback" }, {
        default: withCtx(() => [
          createVNode(_component_el_avatar, {
            size: 60,
            src: "https://empty",
            onError: $setup.fireClose
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Fit Container" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.currentFit,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.currentFit = $event),
            title: "Avatar Fit",
            options: $setup.fitList
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_avatar, {
            shape: "square",
            size: 100,
            fit: $setup.currentFit,
            src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          }, null, 8, ["fit"])
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
_sfc_main.__file = "src/components/Data/avatar.story.vue";
const avatar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6b58c4ae"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/avatar.story.vue"]]);
export {
  avatar_story as default
};
