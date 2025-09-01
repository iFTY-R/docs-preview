const __resolved__virtual_storySource_srcComponentsFormColorpickerStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import type { ColorPickerProps } from 'element-plus'\r
import { logEvent } from 'histoire/client'\r
\r
const color = ref('#409EFF')\r
const alphaColor = ref('rgba(19, 206, 102, 0.8)')\r
const predefine = ref(true)\r
const predefineColors = ref([\r
  '#ff4500',\r
  '#ff8c00',\r
  '#ffd700',\r
  '#90ee90',\r
  '#00ced1',\r
  '#409EFF',\r
  '#c71585',\r
  'rgba(255, 69, 0, 0.68)',\r
  'rgb(255, 120, 0)',\r
  'hsv(51, 100, 98)',\r
  'hsva(120, 40, 94, 0.5)',\r
  'hsl(181, 100%, 37%)',\r
  'hsla(209, 100%, 56%, 0.73)',\r
  '#c7158577',\r
])\r
const size = ref<ColorPickerProps['size']>('default')\r
const sizeList = [\r
  {\r
    label: 'large',\r
    value: 'large',\r
  },\r
  {\r
    label: 'default',\r
    value: 'default',\r
  },\r
  {\r
    label: 'small',\r
    value: 'small',\r
  },\r
]\r
function handleChange(val: string | null) {\r
  logEvent('change', { color: val })\r
}\r
function handleActiveChange(val: string | null) {\r
  logEvent('active-change', { color: val })\r
}\r
<\/script>\r
\r
<template>\r
  <Story title="Form/ColorPicker" icon="clarity:color-picker-line">\r
    <Variant title="Basic Usage">\r
      <el-color-picker\r
        v-model="color"\r
        :size="size"\r
        @change="handleChange"\r
        @active-change="handleActiveChange"\r
      />\r
      <template #controls>\r
        <HstRadio v-model="size" :options="sizeList" title="Size" />\r
      </template>\r
    </Variant>\r
    <Variant title="Alpha">\r
      <el-color-picker\r
        v-model="alphaColor"\r
        :size="size"\r
        show-alpha\r
        @change="handleChange"\r
        @active-change="handleActiveChange"\r
      />\r
      <template #controls>\r
        <HstRadio v-model="size" :options="sizeList" title="Size" />\r
      </template>\r
    </Variant>\r
    <Variant title="Predefined colors">\r
      <el-color-picker\r
        v-model="color"\r
        :size="size"\r
        show-alpha\r
        :predefine="predefine ? predefineColors : []"\r
        @change="handleChange"\r
        @active-change="handleActiveChange"\r
      />\r
      <template #controls>\r
        <HstRadio v-model="size" :options="sizeList" title="Size" />\r
        <HstCheckbox v-model="predefine" title="predefine" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic Usage\r
ColorPicker requires a string typed variable to be bound to v-model.\r
\r
## Alpha\r
ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the \`show-alpha\` attribute.\r
\r
## Predefined colors\r
ColorPicker supports predefined color options\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormColorpickerStoryVue as default
};
