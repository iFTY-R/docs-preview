const __resolved__virtual_storySource_srcComponentsFormUploadUploadStoryVue = `<script setup lang="ts">\r
import type { UploadProps, UploadUserFile } from 'element-plus'\r
import { ElMessage } from 'element-plus'\r
\r
const basicData = reactive({\r
  tip: 'jpg/png files with a size less than 500KB.',\r
  multiple: false,\r
  showFileList: true,\r
  drag: false,\r
  listType: 'text' as UploadProps['listType'],\r
  autoUpload: true,\r
  disabled: false,\r
  limit: 0,\r
})\r
\r
const basicSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import type { UploadProps, UploadUserFile } from 'element-plus'\r
import { ElMessage } from 'element-plus'\r
\r
const fileList = ref<UploadUserFile[]>([\r
  {\r
    name: 'element-plus-logo.svg',\r
    url: 'https://element-plus.org/images/element-plus-logo.svg',\r
  },\r
  {\r
    name: 'element-plus-logo2.svg',\r
    url: 'https://element-plus.org/images/element-plus-logo.svg',\r
  },\r
])\r
\r
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {\r
  ElMessage.warning(\r
    'The limit is \${basicData.limit}, you selected \\\${files.length} files this time, add up to \\\${files.length + uploadFiles.length} totally\\\`\r
  )\r
}\r
<\\/script>\r
\r
<el-upload\r
  v-model:file-list="fileList"\r
  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"\r
  :on-exceed="handleExceed"\${isAttribute(\r
    !basicData.showFileList,\r
    'show-file-list="false"',\r
  )}\${isAttribute(\r
    basicData.drag,\r
    'drag',\r
  )}\${isAttribute(\r
    basicData.listType !== 'text',\r
    \`:list-type="\${basicData.listType}"\`,\r
  )}\${isAttribute(\r
    !basicData.autoUpload,\r
    ':auto-upload="false"',\r
  )}\${isAttribute(\r
    basicData.disabled,\r
    'disabled',\r
  )} \${isAttribute(\r
    basicData.multiple,\r
    ':multiple="true"',\r
  )}\${isAttribute(\r
    basicData.limit !== 0,\r
    \`:limit="\${basicData.limit}\`,\r
  )}\r
>\r
  <el-button type="primary">Click to upload</el-button>\r
  <template #tip>\r
    <div class="el-upload__tip">\r
      \${basicData.tip}\r
    </div>\r
  </template>\r
</el-upload>\r
\`\r
})\r
\r
const fileList = ref<UploadUserFile[]>([\r
  {\r
    name: 'element-plus-logo.svg',\r
    url: 'https://element-plus.org/images/element-plus-logo.svg',\r
  },\r
  {\r
    name: 'element-plus-logo2.svg',\r
    url: 'https://element-plus.org/images/element-plus-logo.svg',\r
  },\r
])\r
\r
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {\r
  ElMessage.warning(\r
    \`The limit is \${basicData.limit}, you selected \${files.length} files this time, add up to \${\r
      files.length + uploadFiles.length\r
    } totally\`,\r
  )\r
}\r
<\/script>\r
\r
<template>\r
  <Story title="Form/Upload" icon="carbon:cloud-upload">\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-upload\r
        v-model:file-list="fileList"\r
        :show-file-list="basicData.showFileList"\r
        :drag="basicData.drag"\r
        :list-type="basicData.listType"\r
        :auto-upload="basicData.autoUpload"\r
        :disabled="basicData.disabled"\r
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"\r
        :multiple="basicData.multiple"\r
        :limit="basicData.limit"\r
        :on-exceed="handleExceed"\r
      >\r
        <el-button type="primary">\r
          Click to upload\r
        </el-button>\r
        <template #tip>\r
          <div class="el-upload__tip">\r
            {{ basicData.tip }}\r
          </div>\r
        </template>\r
      </el-upload>\r
      <template #controls>\r
        <HstText v-model="basicData.tip" title="tip" />\r
        <HstCheckbox v-model="basicData.multiple" title="multiple" />\r
        <HstCheckbox v-model="basicData.showFileList" title="showFileList" />\r
        <HstCheckbox v-model="basicData.drag" title="drag" />\r
        <HstButtonGroup\r
          v-model="basicData.listType"\r
          title="listType"\r
          :options="[\r
            { label: 'text', value: 'text' },\r
            { label: 'picture', value: 'picture' },\r
            { label: 'picture-card', value: 'picture-card' },\r
          ]"\r
        />\r
        <HstCheckbox v-model="basicData.autoUpload" title="autoUpload" />\r
        <HstCheckbox v-model="basicData.disabled" title="disabled" />\r
        <HstNumber v-model="basicData.limit" title="limit" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormUploadUploadStoryVue as default
};
