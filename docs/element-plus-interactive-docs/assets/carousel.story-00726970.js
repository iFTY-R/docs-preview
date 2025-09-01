import { ax as defineComponent, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aI as createBaseVNode, aX as normalizeStyle, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const carousel_story_vue_vue_type_style_index_0_scoped_b9c1a107_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "carousel.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicUsage = reactive({
      trigger: "hover",
      interval: 3e3,
      height: 150,
      autoplay: true,
      arrow: "hover",
      indicatorPosition: "",
      type: "",
      loop: true,
      direction: "horizontal",
      pauseOnHover: true
    });
    const isCardType = computed({
      get: () => basicUsage.type === "card",
      set: (flag) => {
        basicUsage.type = flag ? "card" : "";
      }
    });
    const CarouselBasicSource = computed(() => {
      return `<el-carousel
  height="${basicUsage.height}px"${isAttribute(
        basicUsage.trigger === "click",
        'trigger="click"'
      )}${isAttribute(
        basicUsage.direction === "vertical",
        'direction="vertical"'
      )}${isAttribute(
        !basicUsage.autoplay,
        'autoplay="false"'
      )}${isAttribute(
        basicUsage.autoplay && basicUsage.interval !== 3e3,
        `interval="${basicUsage.interval}"`
      )}${isAttribute(
        basicUsage.arrow !== "hover",
        `arrow="${basicUsage.arrow}"`
      )}${isAttribute(
        basicUsage.indicatorPosition !== "",
        `indicator-position="${basicUsage.indicatorPosition}"`
      )}${isAttribute(
        isCardType.value,
        'type="card"'
      )}${isAttribute(
        !basicUsage.loop,
        'loop="false"'
      )}${isAttribute(
        !basicUsage.pauseOnHover && basicUsage.autoplay,
        'pause-on-hover="false"'
      )}
>
  <el-carousel-item
    v-for="item in 3"
    :key="item"
  >
    <h3>{{ item }}</h3>
  </el-carousel-item>
</el-carousel>`;
    });
    const __returned__ = { basicUsage, isCardType, CarouselBasicSource };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_carousel_item = resolveComponent("el-carousel-item");
  const _component_el_carousel = resolveComponent("el-carousel");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSlider = resolveComponent("HstSlider");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Carousel",
    icon: "material-symbols:view-carousel-outline-rounded",
    layout: {
      type: "grid",
      width: 400
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.CarouselBasicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicUsage.trigger,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicUsage.trigger = $event),
            title: "Trigger",
            options: [
              { label: "click", value: "click" },
              { label: "hover", value: "hover" }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicUsage.direction,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicUsage.direction = $event),
            title: "Direction",
            options: [
              { label: "horizontal", value: "horizontal" },
              { label: "vertical", value: "vertical" }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicUsage.autoplay,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicUsage.autoplay = $event),
            title: "Autoplay"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicUsage.pauseOnHover,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicUsage.pauseOnHover = $event),
            title: "Pause On Hover"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSlider, {
            modelValue: $setup.basicUsage.interval,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicUsage.interval = $event),
            title: "Interval",
            min: 0,
            max: 1e4
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicUsage.height,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicUsage.height = $event),
            title: "Height"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicUsage.arrow,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicUsage.arrow = $event),
            title: "Arrow",
            options: [
              { label: "always", value: "always" },
              { label: "hover", value: "hover" },
              { label: "never", value: "never" }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicUsage.indicatorPosition,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicUsage.indicatorPosition = $event),
            title: "Indicator Position",
            options: [
              { label: "default", value: "" },
              { label: "outside", value: "outside" },
              { label: "none", value: "none" }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.isCardType,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.isCardType = $event),
            title: "Card Type"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicUsage.loop,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.basicUsage.loop = $event),
            title: "Loop"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_carousel, {
            height: `${$setup.basicUsage.height}px`,
            trigger: $setup.basicUsage.trigger,
            autoplay: $setup.basicUsage.autoplay,
            interval: $setup.basicUsage.interval,
            "indicator-position": $setup.basicUsage.indicatorPosition,
            arrow: $setup.basicUsage.arrow,
            type: $setup.basicUsage.type,
            loop: $setup.basicUsage.loop,
            direction: $setup.basicUsage.direction,
            "pause-on-hover": $setup.basicUsage.pauseOnHover
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (item) => {
                  return createVNode(
                    _component_el_carousel_item,
                    { key: item },
                    {
                      default: withCtx(() => [
                        createBaseVNode(
                          "h3",
                          {
                            class: "small justify-center",
                            text: "2xl",
                            style: normalizeStyle({ lineHeight: `${$setup.basicUsage.height}px` })
                          },
                          toDisplayString(item),
                          5
                          /* TEXT, STYLE */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["height", "trigger", "autoplay", "interval", "indicator-position", "arrow", "type", "loop", "direction", "pause-on-hover"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Data/Carousel/carousel.story.vue";
const carousel_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b9c1a107"], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/Carousel/carousel.story.vue"]]);
export {
  carousel_story as default
};
