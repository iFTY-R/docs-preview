import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, ba as chat_round_default, aD as createVNode, bb as chat_line_round_default, bc as chat_dot_round_default } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>The scores are divided into three levels by default, and the scores and emotional tendencies can be graded using an array of colors (by default, no colors are distinguished). The colors corresponding to the three levels are set using the <code>colors</code> property, while their corresponding two thresholds are set via <code>low-threshold</code> and <code>high-threshold</code>.</p>
<h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-hidden="true">#</a></h2>
<h2 id="half-selection" tabindex="-1">Half-selection <a class="header-anchor" href="#half-selection" aria-hidden="true">#</a></h2>
<p>Attribute <code>allow-half</code> allows half stars</p>
<h2 id="auxiliary-text" tabindex="-1">Auxiliary Text <a class="header-anchor" href="#auxiliary-text" aria-hidden="true">#</a></h2>
<p>Expressing the corresponding score directly with auxiliary text
Setting the <code>show-text</code> property for the component will display the auxiliary text on the right-hand side. The auxiliary text can be specified for each score by setting <code>texts</code>. <code>texts</code> is an array whose length should be equal to the maximum <code>max</code>.</p>
<h2 id="clearable" tabindex="-1">Clearable <a class="header-anchor" href="#clearable" aria-hidden="true">#</a></h2>
<p>When you click the same value again, you can reset the value to 0.</p>
<h2 id="more-kinds-of-icons" tabindex="-1">More kinds of icons <a class="header-anchor" href="#more-kinds-of-icons" aria-hidden="true">#</a></h2>
<p>When there are multiple levels of ratings, different types of icons can be used to distinguish the rating levels.
Setting the <code>icon-classes</code> property allows you to customize the icons for different segments. If you pass in an array, there are 3 elements, which are the class names corresponding to the 3 segments; if you pass in an object, you can customize the segments, with the key being the segment's bounds value and the key being the corresponding class name. This example also uses <code>void-icon</code> to specify the class name of the icon when it is not selected.</p>
<h2 id="read-only" tabindex="-1">Read-only <a class="header-anchor" href="#read-only" aria-hidden="true">#</a></h2>
<p>Read-only ratings are used to display scores, allowing half-stars to appear.
Setting the <code>disabled</code> property for a component means that the component is read-only. If <code>show-score</code> is set in this case, the current score will be displayed on the right-hand side. In addition, you can use the attribute <code>score-template</code> to provide a scoring template. The template is a string containing <code>{value}</code>, which will be replaced with the current score.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rate.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const currentRate = ref(0);
    const maxRate = ref(5);
    const colors = ["#409eff", "#67c23a", "#FF9900"];
    const sizeValue = ref("small");
    const sizeValueOptions = [
      {
        label: "small",
        value: "small"
      },
      {
        label: "default",
        value: "default"
      },
      {
        label: "large",
        value: "large"
      }
    ];
    const allowedHalf = ref(true);
    const auxiliaryText = ref(["oops", "disappointed", "normal", "good", "great"]);
    const showText = ref(true);
    const disabled = ref(true);
    const showScore = ref(true);
    const clearable = ref(true);
    const icons = [chat_round_default, chat_line_round_default, chat_dot_round_default];
    const __returned__ = { currentRate, maxRate, colors, sizeValue, sizeValueOptions, allowedHalf, auxiliaryText, showText, disabled, showScore, clearable, icons, get ChatRound() {
      return chat_round_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_rate = resolveComponent("el-rate");
  const _component_HstSlider = resolveComponent("HstSlider");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstRadio = resolveComponent("HstRadio");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Rate",
    icon: "material-symbols:star-rate-half-rounded"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        controls: withCtx(() => [
          createVNode(_component_HstSlider, {
            modelValue: $setup.currentRate,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.currentRate = $event),
            title: "Rate",
            max: $setup.maxRate
          }, null, 8, ["modelValue", "max"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_rate, {
            modelValue: $setup.currentRate,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentRate = $event),
            max: $setup.maxRate
          }, null, 8, ["modelValue", "max"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Sizes" }, {
        controls: withCtx(() => [
          createVNode(_component_HstRadio, {
            modelValue: $setup.sizeValue,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.sizeValue = $event),
            title: "Sizes",
            options: $setup.sizeValueOptions
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_rate, {
            modelValue: $setup.currentRate,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.currentRate = $event),
            size: $setup.sizeValue
          }, null, 8, ["modelValue", "size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Half-selection allowed" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.allowedHalf,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.allowedHalf = $event),
            title: "allowedHalf"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_rate, {
            modelValue: $setup.currentRate,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.currentRate = $event),
            "allow-half": $setup.allowedHalf
          }, null, 8, ["modelValue", "allow-half"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Auxiliary text" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.showText,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.showText = $event),
            title: "showText"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_rate, {
            modelValue: $setup.currentRate,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.currentRate = $event),
            texts: $setup.auxiliaryText,
            "show-text": $setup.showText
          }, null, 8, ["modelValue", "texts", "show-text"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Clearable" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.clearable,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.clearable = $event),
            title: "Clearable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_rate, {
            modelValue: $setup.currentRate,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.currentRate = $event),
            clearable: $setup.clearable
          }, null, 8, ["modelValue", "clearable"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "More kinds of icon" }, {
        default: withCtx(() => [
          createVNode(_component_el_rate, {
            modelValue: $setup.currentRate,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.currentRate = $event),
            icons: $setup.icons,
            "void-icon": $setup.ChatRound,
            colors: $setup.colors
          }, null, 8, ["modelValue", "void-icon"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Readonly" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.disabled,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.disabled = $event),
            title: "Readonly"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.showScore,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.showScore = $event),
            title: "ShowScore"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_rate, {
            modelValue: $setup.currentRate,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.currentRate = $event),
            disabled: $setup.disabled,
            "show-score": $setup.showScore,
            "score-template": "{value} points"
          }, null, 8, ["modelValue", "disabled", "show-score"])
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
_sfc_main.__file = "src/components/Form/rate.story.vue";
const rate_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/rate.story.vue"]]);
export {
  rate_story as default
};
