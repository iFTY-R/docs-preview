import { ax as defineComponent, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode, bf as Teleport, aI as createBaseVNode, aP as toDisplayString } from "./vendor-bdcf0029.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>Dialog pops up a dialog box, and it's quite customizable.</p>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dialog.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const dialogVisible = ref(false);
    const dialogCustomVisible = ref(false);
    const outerVisible = ref(false);
    const innerVisible = ref(false);
    const dialogData = ref({
      title: "Title",
      draggable: false,
      center: false,
      alignCenter: false,
      destroyOnClose: false,
      header: "custom header",
      content: "custom content",
      footer: "custom footer"
    });
    const __returned__ = { dialogVisible, dialogCustomVisible, outerVisible, innerVisible, dialogData };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "This is a message",
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "dialog-footer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Feedback/Dialog",
    icon: "ri:message-3-line"
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstText, {
        modelValue: $setup.dialogData.title,
        "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.dialogData.title = $event),
        title: "title"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.dialogData.alignCenter,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.dialogData.alignCenter = $event),
        title: "align-center"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.dialogData.center,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.dialogData.center = $event),
        title: "center"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.dialogData.draggable,
        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.dialogData.draggable = $event),
        title: "draggable"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.dialogData.destroyOnClose,
        "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.dialogData.destroyOnClose = $event),
        title: "destroyOnClose"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic Usage" }, {
        default: withCtx(() => [
          createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.dialogVisible = true)
          }, {
            default: withCtx(() => [
              createTextVNode(" click to open the Dialog ")
            ]),
            _: 1
            /* STABLE */
          }),
          (openBlock(), createBlock(Teleport, { to: "#app" }, [
            createVNode(_component_el_dialog, {
              modelValue: $setup.dialogVisible,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.dialogVisible = $event),
              title: $setup.dialogData.title,
              "align-center": $setup.dialogData.alignCenter,
              center: $setup.dialogData.center,
              draggable: $setup.dialogData.draggable,
              width: "30%"
            }, {
              footer: withCtx(() => [
                createBaseVNode("span", null, [
                  createVNode(_component_el_button, {
                    onClick: _cache[1] || (_cache[1] = ($event) => $setup.dialogVisible = false)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Cancel")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: _cache[2] || (_cache[2] = ($event) => $setup.dialogVisible = false)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Confirm")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ]),
              default: withCtx(() => [
                _hoisted_1
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "title", "align-center", "center", "draggable"])
          ]))
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Customized" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.dialogData.header,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.dialogData.header = $event),
            title: "header"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.dialogData.content,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.dialogData.content = $event),
            title: "default"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.dialogData.footer,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.dialogData.footer = $event),
            title: "footer"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_button, {
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.dialogCustomVisible = true)
          }, {
            default: withCtx(() => [
              createTextVNode(" open a Customized Dialog ")
            ]),
            _: 1
            /* STABLE */
          }),
          (openBlock(), createBlock(Teleport, { to: "#app" }, [
            createVNode(_component_el_dialog, {
              modelValue: $setup.dialogCustomVisible,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.dialogCustomVisible = $event),
              title: $setup.dialogData.title,
              "align-center": $setup.dialogData.alignCenter,
              center: $setup.dialogData.center,
              draggable: $setup.dialogData.draggable
            }, {
              header: withCtx(() => [
                createTextVNode(
                  toDisplayString($setup.dialogData.header),
                  1
                  /* TEXT */
                )
              ]),
              footer: withCtx(() => [
                createTextVNode(
                  toDisplayString($setup.dialogData.footer),
                  1
                  /* TEXT */
                )
              ]),
              default: withCtx(() => [
                createTextVNode(
                  " " + toDisplayString($setup.dialogData.content) + " ",
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "title", "align-center", "center", "draggable"])
          ]))
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Nested Dialog" }, {
        default: withCtx(() => [
          createVNode(_component_el_button, {
            onClick: _cache[9] || (_cache[9] = ($event) => $setup.outerVisible = true)
          }, {
            default: withCtx(() => [
              createTextVNode(" open the outer Dialog ")
            ]),
            _: 1
            /* STABLE */
          }),
          (openBlock(), createBlock(Teleport, { to: "#app" }, [
            createVNode(_component_el_dialog, {
              modelValue: $setup.outerVisible,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.outerVisible = $event),
              title: "Outer Dialog"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_dialog, {
                  modelValue: $setup.innerVisible,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.innerVisible = $event),
                  width: "30%",
                  title: "Inner Dialog",
                  "append-to-body": true
                }, null, 8, ["modelValue"])
              ]),
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_el_button, {
                    onClick: _cache[11] || (_cache[11] = ($event) => $setup.outerVisible = false)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: _cache[12] || (_cache[12] = ($event) => $setup.innerVisible = true)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" open the inner Dialog ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]))
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
_sfc_main.__file = "src/components/Feedback/dialog.story.vue";
const dialog_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Feedback/dialog.story.vue"]]);
export {
  dialog_story as default
};
