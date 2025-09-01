const __resolved__virtual_storySource_srcComponentsBasicLinkLinkStoryVue = `<script setup lang="ts">\r
import { Edit } from '@element-plus/icons-vue'\r
import { isAttribute } from '@utils'\r
import { linkTypeList } from './constants'\r
\r
// basic usage\r
const basicLinkData = reactive({\r
  text: 'Link',\r
  type: 'default',\r
  disabled: false,\r
  underline: false,\r
})\r
const basicSource = computed(() => {\r
  return \`<el-link\${isAttribute(\r
    basicLinkData.type !== 'default',\r
    \`type="\${basicLinkData.type}"\`,\r
  )}\${isAttribute(\r
    basicLinkData.disabled,\r
    'disabled',\r
  )}\${isAttribute(\r
    basicLinkData.underline,\r
    'underline',\r
  )}\r
>\r
  \${basicLinkData.text}\r
</el-link>\`\r
})\r
\r
// Icon usage\r
const iconLinkData = reactive({\r
  icon: shallowRef(Edit),\r
  text: 'Link',\r
  type: 'default',\r
  disabled: false,\r
  underline: false,\r
})\r
const iconSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { \${iconLinkData.icon.name} } from '@element-plus/icons-vue'\r
<\\/script>\r
\r
<el-link\r
  :icon="\${iconLinkData.icon.name}"\${isAttribute(\r
    iconLinkData.type !== 'default',\r
    \`type="\${basicLinkData.type}"\`,\r
  )}\${isAttribute(\r
    iconLinkData.disabled,\r
    'disabled',\r
  )}\${isAttribute(\r
    iconLinkData.underline,\r
    'underline',\r
  )}\r
>\r
  \${iconLinkData.text}\r
</el-link>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Basic/Link" icon="ic:baseline-add-link">\r
    <Variant title="Basic Usage" :source="basicSource">\r
      <el-link\r
        :type="basicLinkData.type"\r
        :href="void 0"\r
        :disabled="basicLinkData.disabled"\r
        :underline="basicLinkData.underline"\r
      >\r
        {{ basicLinkData.text }}\r
      </el-link>\r
      <template #controls>\r
        <HstText v-model="basicLinkData.text" title="Text" />\r
        <HstRadio v-model="basicLinkData.type" title="Link Type" :options="linkTypeList" />\r
        <HstCheckbox\r
          v-model="basicLinkData.underline"\r
          title="Underline"\r
        />\r
        <HstCheckbox\r
          v-model="basicLinkData.disabled"\r
          title="Disabled"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Icon" :source="iconSource" icon="line-md:iconify2">\r
      <el-link\r
        :icon="iconLinkData.icon"\r
        :type="iconLinkData.type"\r
        :href="void 0"\r
        :disabled="iconLinkData.disabled"\r
        :underline="iconLinkData.underline"\r
      >\r
        {{ iconLinkData.text }}\r
      </el-link>\r
      <template #controls>\r
        <HstText v-model="iconLinkData.text" title="Text" />\r
        <HstRadio v-model="iconLinkData.type" title="Link Type" :options="linkTypeList" />\r
        <HstCheckbox\r
          v-model="iconLinkData.underline"\r
          title="Underline"\r
        />\r
        <HstCheckbox\r
          v-model="iconLinkData.disabled"\r
          title="Disabled"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsBasicLinkLinkStoryVue as default
};
