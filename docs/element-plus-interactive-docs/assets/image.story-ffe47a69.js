import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode, aH as createTextVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aW as createCommentVNode, aL as pushScopeId, aM as popScopeId } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
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
const urls = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
];
const image_story_vue_vue_type_style_index_0_scoped_7827a589_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "image.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicImageData = reactive({
      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      fit: "fill"
    });
    const basicSource = computed(() => {
      return `<el-image
  src="${basicImageData.src}"${isAttribute(
        basicImageData.fit !== "fill",
        `fit="${basicImageData.fit}"`
      )}
/>`;
    });
    const placeholderImageData = reactive({
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      load: false
    });
    function reloadClick() {
      placeholderImageData.src = `https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg?${/* @__PURE__ */ new Date()}`;
    }
    const lazyImageData = reactive({
      lazy: true,
      urls
    });
    const lazySource = computed(() => {
      return `<script setup lang="ts">
const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
<\/script>

<el-image
  v-for="url in urls"
  :key="url"
  :src="url"${isAttribute(
        lazyImageData.lazy,
        `lazy="${lazyImageData.lazy}"`
      )}
/>`;
    });
    const previewImageData = reactive({
      url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      urls
    });
    const previewSource = computed(() => {
      return `<script setup lang="ts">
const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
<\/script>

<el-image
  style="width: 100px; height: 100px"
  :src="url"
  :preview-src-list="urls"
  :initial-index="4"
  fit="cover"
/>`;
    });
    const __returned__ = { basicImageData, basicSource, placeholderImageData, reloadClick, lazyImageData, lazySource, previewImageData, previewSource, get fitList() {
      return fitList;
    }, get urls() {
      return urls;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-7827a589"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  [
    /* @__PURE__ */ createTextVNode(" Loading"),
    /* @__PURE__ */ createBaseVNode("span", { class: "dot" }, "...")
  ],
  -1
  /* HOISTED */
));
const _hoisted_2 = { class: "container" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "title" },
  " Reload ",
  -1
  /* HOISTED */
));
const _hoisted_4 = { class: "demo-image__lazy" };
const _hoisted_5 = { class: "demo-image__preview" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_image = resolveComponent("el-image");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_Variant = resolveComponent("Variant");
  const _component_el_button = resolveComponent("el-button");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Image",
    layout: {
      type: "grid",
      width: 600
    },
    icon: "mdi:file-image-outline"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.basicImageData.fit,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicImageData.fit = $event),
            title: "Fit",
            options: $setup.fitList
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_image, {
            style: { "width": "100px", "height": "100px" },
            src: $setup.basicImageData.src,
            fit: $setup.basicImageData.fit
          }, null, 8, ["src", "fit"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, { title: "Placeholder" }, {
        controls: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createVNode(_component_el_button, {
              loading: $setup.placeholderImageData.load,
              onClick: $setup.reloadClick
            }, {
              default: withCtx(() => [
                createTextVNode(" Reload ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_image, {
            src: $setup.placeholderImageData.src
          }, {
            placeholder: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
            /* STABLE */
          }, 8, ["src"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Lazy Load",
        source: $setup.lazySource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.lazyImageData.lazy,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.lazyImageData.lazy = $event),
            title: "Lazy"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.lazyImageData.urls, (url) => {
                return openBlock(), createBlock(_component_el_image, {
                  key: url,
                  src: url,
                  lazy: $setup.lazyImageData.lazy
                }, null, 8, ["src", "lazy"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Image Preview",
        source: $setup.previewSource
      }, {
        controls: withCtx(() => [
          createCommentVNode(' <HstCheckbox v-model="lazyImageData.lazy" title="Lazy" /> ')
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_el_image, {
              style: { "width": "100px", "height": "100px" },
              src: $setup.previewImageData.url,
              "preview-src-list": $setup.previewImageData.urls,
              fit: "cover"
            }, null, 8, ["src", "preview-src-list"])
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
_sfc_main.__file = "src/components/Data/Image/image.story.vue";
const image_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7827a589"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/Image/image.story.vue"]]);
export {
  image_story as default
};
