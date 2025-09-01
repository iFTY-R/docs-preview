import { ax as defineComponent, aY as reactive, aQ as computed, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aI as createBaseVNode, aP as toDisplayString, aH as createTextVNode, be as ElMessage } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "upload.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const basicData = reactive({
      tip: "jpg/png files with a size less than 500KB.",
      multiple: false,
      showFileList: true,
      drag: false,
      listType: "text",
      autoUpload: true,
      disabled: false,
      limit: 0
    });
    const basicSource = computed(() => {
      return `<script setup lang="ts">
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ElMessage } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    'The limit is ${basicData.limit}, you selected \${files.length} files this time, add up to \${files.length + uploadFiles.length} totally\`
  )
}
<\/script>

<el-upload
  v-model:file-list="fileList"
  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
  :on-exceed="handleExceed"${isAttribute(
        !basicData.showFileList,
        'show-file-list="false"'
      )}${isAttribute(
        basicData.drag,
        "drag"
      )}${isAttribute(
        basicData.listType !== "text",
        `:list-type="${basicData.listType}"`
      )}${isAttribute(
        !basicData.autoUpload,
        ':auto-upload="false"'
      )}${isAttribute(
        basicData.disabled,
        "disabled"
      )} ${isAttribute(
        basicData.multiple,
        ':multiple="true"'
      )}${isAttribute(
        basicData.limit !== 0,
        `:limit="${basicData.limit}`
      )}
>
  <el-button type="primary">Click to upload</el-button>
  <template #tip>
    <div class="el-upload__tip">
      ${basicData.tip}
    </div>
  </template>
</el-upload>
`;
    });
    const fileList = ref([
      {
        name: "element-plus-logo.svg",
        url: "https://element-plus.org/images/element-plus-logo.svg"
      },
      {
        name: "element-plus-logo2.svg",
        url: "https://element-plus.org/images/element-plus-logo.svg"
      }
    ]);
    const handleExceed = (files, uploadFiles) => {
      ElMessage.warning(
        `The limit is ${basicData.limit}, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length} totally`
      );
    };
    const __returned__ = { basicData, basicSource, fileList, handleExceed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "el-upload__tip" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_upload = resolveComponent("el-upload");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Upload",
    icon: "carbon:cloud-upload"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.basicData.tip,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicData.tip = $event),
            title: "tip"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.multiple,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicData.multiple = $event),
            title: "multiple"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.showFileList,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicData.showFileList = $event),
            title: "showFileList"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.drag,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicData.drag = $event),
            title: "drag"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicData.listType,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicData.listType = $event),
            title: "listType",
            options: [
              { label: "text", value: "text" },
              { label: "picture", value: "picture" },
              { label: "picture-card", value: "picture-card" }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.autoUpload,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicData.autoUpload = $event),
            title: "autoUpload"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicData.disabled,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicData.disabled = $event),
            title: "disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicData.limit,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.basicData.limit = $event),
            title: "limit"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_upload, {
            "file-list": $setup.fileList,
            "onUpdate:fileList": _cache[0] || (_cache[0] = ($event) => $setup.fileList = $event),
            "show-file-list": $setup.basicData.showFileList,
            drag: $setup.basicData.drag,
            "list-type": $setup.basicData.listType,
            "auto-upload": $setup.basicData.autoUpload,
            disabled: $setup.basicData.disabled,
            action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
            multiple: $setup.basicData.multiple,
            limit: $setup.basicData.limit,
            "on-exceed": $setup.handleExceed
          }, {
            tip: withCtx(() => [
              createBaseVNode(
                "div",
                _hoisted_1,
                toDisplayString($setup.basicData.tip),
                1
                /* TEXT */
              )
            ]),
            default: withCtx(() => [
              createVNode(_component_el_button, { type: "primary" }, {
                default: withCtx(() => [
                  createTextVNode(" Click to upload ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["file-list", "show-file-list", "drag", "list-type", "auto-upload", "disabled", "multiple", "limit"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Form/Upload/upload.story.vue";
const upload_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/Upload/upload.story.vue"]]);
export {
  upload_story as default
};
