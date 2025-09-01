const __resolved__virtual_storySource_srcComponentsOthersDividerDividerStoryVue = `<script setup lang="ts">\r
import type { DividerProps } from 'element-plus'\r
import { borderStyleList, contentPositionList, dividerDirectionList } from './constants'\r
\r
const currentDirection = ref<DividerProps['direction']>('horizontal')\r
const currentBorderStyle = ref<DividerProps['borderStyle']>('solid')\r
const contentPosition = ref<DividerProps['contentPosition']>('center')\r
const content = ref('Element-Plus')\r
<\/script>\r
\r
<template>\r
  <Story title="Others/Divider" icon="material-symbols:safety-divider">\r
    <Variant title="Basic Usage">\r
      <span>Rain</span>\r
      <el-divider />\r
      <span>Home</span>\r
      <el-divider />\r
      <span>Grass</span>\r
    </Variant>\r
\r
    <Variant title="Direction">\r
      <span>Rain</span>\r
      <el-divider :direction="currentDirection" />\r
      <span>Home</span>\r
      <el-divider :direction="currentDirection" />\r
      <span>Grass</span>\r
      <template #controls>\r
        <HstButtonGroup\r
          v-model="currentDirection"\r
          title="Divider Direction"\r
          :options="dividerDirectionList"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Border Style">\r
      <span>Rain</span>\r
      <el-divider :border-style="currentBorderStyle" />\r
      <span>Home</span>\r
      <el-divider :border-style="currentBorderStyle" />\r
      <span>Grass</span>\r
      <template #controls>\r
        <HstSelect\r
          v-model="currentBorderStyle"\r
          :options="borderStyleList"\r
          title="BorderStyle"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="With Content">\r
      <span>Rain</span>\r
      <el-divider :content-position="contentPosition">\r
        {{ content }}\r
      </el-divider>\r
      <span>Grass</span>\r
      <template #controls>\r
        <HstButtonGroup\r
          v-model="contentPosition"\r
          title="Position of content on the divider line"\r
          :options="contentPositionList"\r
        />\r
        <HstText\r
          v-model="content"\r
          title="content"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style>\r
.el-alert {\r
  margin: 20px 0 0;\r
}\r
.el-alert:first-child {\r
  margin: 0;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsOthersDividerDividerStoryVue as default
};
