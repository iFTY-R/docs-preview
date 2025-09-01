const __resolved__virtual_storySource_srcComponentsDataResultStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import type { ResultProps } from 'element-plus'\r
\r
const currentIcon = ref('info')\r
const title = ref('Tip')\r
const subTitle = ref('Please follow the instructions')\r
const iconList: Record<'label' & 'value', ResultProps['icon']>[] = [\r
  {\r
    label: 'success',\r
    value: 'success',\r
  },\r
  {\r
    label: 'warning',\r
    value: 'warning',\r
  },\r
  {\r
    label: 'error',\r
    value: 'error',\r
  },\r
  {\r
    label: 'info',\r
    value: 'info',\r
  },\r
]\r
<\/script>\r
\r
<template>\r
  <Story title="Data/Result" icon="carbon:result">\r
    <Variant title="Basic usage">\r
      <el-result\r
        :icon="currentIcon"\r
        :title="title"\r
        :sub-title="subTitle"\r
      />\r
      <template #controls>\r
        <HstRadio\r
          v-model="currentIcon"\r
          title="Icon"\r
          :options="iconList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Customized content">\r
      <el-result title="404" sub-title="Sorry, request error">\r
        <template #icon>\r
          <el-image\r
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"\r
          />\r
        </template>\r
        <template #extra>\r
          <el-button type="primary">\r
            Back\r
          </el-button>\r
        </template>\r
      </el-result>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
Used to give feedback on the result of user's operation or access exception.\r
\r
## Basic usage\r
\r
Result usage\r
\r
## Customized content\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataResultStoryVue as default
};
