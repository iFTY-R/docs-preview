const __resolved__virtual_storySource_srcComponentsNavigationTabsTabsStoryVue = `<script setup lang="ts">\r
import type { TabsProps } from 'element-plus'\r
\r
const basicData = reactive({\r
  activeName: 'first',\r
  type: '' as TabsProps['type'],\r
  closable: false,\r
  addable: false,\r
  editable: false,\r
  tabPosition: 'top' as TabsProps['tabPosition'],\r
  stretch: false,\r
})\r
\r
const tabs = ref([\r
  {\r
    label: 'Tab 1',\r
    name: '1',\r
    content: 'Tab 1 content',\r
  },\r
  {\r
    label: 'Tab 2',\r
    name: '2',\r
    content: 'Tab 2 content',\r
  },\r
  {\r
    label: 'Tab 3',\r
    name: '3',\r
    content: 'Tab 3 content',\r
  },\r
])\r
\r
const basicSource = computed(() => {\r
  return \`<el-tabs\r
  v-model="activeName"\${isAttribute(\r
    basicData.type !== '',\r
    \`type="\${basicData.type}"\`,\r
  )}\${isAttribute(\r
    basicData.closable,\r
    'closable',\r
  )}\${isAttribute(\r
    basicData.addable,\r
    'addable',\r
  )}\${isAttribute(\r
    basicData.editable,\r
    'editable',\r
  )}\${isAttribute(\r
    basicData.tabPosition !== 'top',\r
    \`tap-position="\${basicData.tabPosition}"\`,\r
  )}\${isAttribute(\r
    basicData.stretch,\r
    'stretch',\r
  )}\r
>\r
  <el-tab-pane\r
    v-for="tab in tabs"\r
    :key="tab.name"\r
    :label="tab.label" :name="tab.name"\r
  >\r
    {{ tab.content }}\r
  </el-tab-pane>\r
</el-tabs>\r
\r
<script setup lang="ts">\r
import {ref} from 'vue'\r
\r
const activeName = ref('1')\r
const tabs = ref([\r
  {\r
    label: 'Tab 1',\r
    name: '1',\r
    content: 'Tab 1 content',\r
  },\r
  {\r
    label: 'Tab 2',\r
    name: '2',\r
    content: 'Tab 2 content',\r
  },\r
  {\r
    label: 'Tab 3',\r
    name: '3',\r
    content: 'Tab 3 content',\r
  },\r
])\r
<\\/script>\r
\`\r
})\r
<\/script>\r
\r
<!-- icon from https://icones.js.org/collection/all?s=tabs -->\r
<template>\r
  <Story\r
    title="Navigation/Tabs"\r
    icon="ph:tabs-light"\r
    :layout="{\r
      type: 'grid',\r
      width: 600,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-tabs\r
        v-model="basicData.activeName"\r
        :type="basicData.type"\r
        :closable="basicData.closable"\r
        :addable="basicData.addable"\r
        :editable="basicData.editable"\r
        :tab-position="basicData.tabPosition"\r
        :stretch="basicData.stretch"\r
      >\r
        <el-tab-pane\r
          v-for="tab in tabs"\r
          :key="tab.name"\r
          :label="tab.label" :name="tab.name"\r
        >\r
          {{ tab.content }}\r
        </el-tab-pane>\r
      </el-tabs>\r
      <template #controls>\r
        <HstButtonGroup\r
          v-model="basicData.type"\r
          :options="[\r
            { label: 'Default', value: '' },\r
            { label: 'Card', value: 'card' },\r
            { label: 'Border Card', value: 'border-card' },\r
          ]"\r
          title="Type"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.closable"\r
          title="Closable"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.addable"\r
          title="Addable"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.editable"\r
          title="Editable"\r
        />\r
        <HstButtonGroup\r
          v-model="basicData.tabPosition"\r
          :options="[\r
            { label: 'Top', value: 'top' },\r
            { label: 'Right', value: 'right' },\r
            { label: 'Bottom', value: 'bottom' },\r
            { label: 'Left', value: 'left' },\r
          ]"\r
          title="Tab Position"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.stretch"\r
          title="Stretch"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsNavigationTabsTabsStoryVue as default
};
