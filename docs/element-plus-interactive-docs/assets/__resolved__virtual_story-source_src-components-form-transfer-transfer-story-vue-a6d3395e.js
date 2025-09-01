const __resolved__virtual_storySource_srcComponentsFormTransferTransferStoryVue = `<script setup lang="ts">\r
import type { TransferProps } from 'element-plus'\r
\r
interface Option {\r
  key: number\r
  label: string\r
  disabled: boolean\r
}\r
\r
function generateData() {\r
  const data: Option[] = []\r
  for (let i = 1; i <= 15; i++) {\r
    data.push({\r
      key: i,\r
      label: \`Option \${i}\`,\r
      disabled: i % 4 === 0,\r
    })\r
  }\r
  return data\r
}\r
\r
const basicData = reactive({\r
  data: generateData(),\r
  value: [],\r
  filterable: false,\r
  filterPlaceholder: 'Enter keyword',\r
  targetOrder: 'original' as TransferProps['targetOrder'],\r
  titles: ['List 1', 'List 2'] as TransferProps['titles'],\r
  buttonTexts: ['', ''] as TransferProps['buttonTexts'],\r
})\r
\r
const basicSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
interface Option {\r
  key: number\r
  label: string\r
  disabled: boolean\r
}\r
\r
const generateData = () => {\r
  const data: Option[] = []\r
  for (let i = 1; i <= 15; i++) {\r
    data.push({\r
      key: i,\r
      label: \\\`Option \\\${i}\\\`,\r
      disabled: i % 4 === 0,\r
    })\r
  }\r
  return data\r
}\r
\r
const data = ref<Option[]>(generateData())\r
const value = ref([])\r
<\\/script>\r
\r
<el-transfar\r
  v-model="value"\r
  :data="data"\${isAttribute(\r
    basicData.filterable,\r
    'filterable',\r
  )}\${isAttribute(\r
    basicData.filterPlaceholder !== 'Enter keyword' && basicData.filterable,\r
    \`filter-placeholder="\${basicData.filterPlaceholder}""\`,\r
  )}\${isAttribute(\r
    basicData.targetOrder !== 'original',\r
    'target-order',\r
  )}\${isAttribute(\r
    basicData.titles.toString() !== 'List 1,List 2',\r
    \`:titles="['\${basicData.titles[0]}', '\${basicData.titles[1]}]"\`,\r
  )}\${isAttribute(\r
    basicData.buttonTexts.toString() !== ',',\r
    \`:button-texts="['\${basicData.buttonTexts[0]}', '\${basicData.buttonTexts[1]}]"\`,\r
  )}\r
/>\r
\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Form/Transfer"\r
    icon="bx:transfer-alt"\r
    :layout="{\r
      type: 'grid',\r
      width: '100%',\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <div class="content-bar">\r
        <el-transfer\r
          v-model="basicData.value"\r
          :data="basicData.data"\r
          :filterable="basicData.filterable"\r
          :filter-placeholder="basicData.filterPlaceholder"\r
          :target-order="basicData.targetOrder"\r
          :titles="basicData.titles"\r
          :button-texts="basicData.buttonTexts"\r
        />\r
      </div>\r
      <template #controls>\r
        <HstCheckbox v-model="basicData.filterable" title="filterable" />\r
        <HstText v-model="basicData.filterPlaceholder" title="filter-placeholder" :style="useElDisplay(basicData.filterable)" />\r
        <HstSelect\r
          v-model="basicData.targetOrder"\r
          title="target-order"\r
          :options="[\r
            { label: 'original', value: 'original' },\r
            { label: 'push', value: 'push' },\r
            { label: 'unshift', value: 'unshift' },\r
          ]"\r
        />\r
        <HstText v-model="basicData.titles[0]" title="left-title" />\r
        <HstText v-model="basicData.titles[1]" title="right-title" />\r
        <HstText v-model="basicData.buttonTexts[0]" title="left-button-text" />\r
        <HstText v-model="basicData.buttonTexts[1]" title="right-button-text" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
.content-bar {\r
  display: flex;\r
  justify-content: center;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormTransferTransferStoryVue as default
};
