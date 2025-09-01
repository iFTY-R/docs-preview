const __resolved__virtual_storySource_srcComponentsFeedbackAlertStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import type { AlertProps } from 'element-plus'\r
import { logEvent } from 'histoire/client'\r
\r
const currentType = ref<AlertProps['type']>('success')\r
const currentTheme = ref<AlertProps['effect']>('light')\r
const closableState = ref({\r
  text: 'Gotcha',\r
  closable: true,\r
})\r
const showIcon = ref(true)\r
const centeredText = ref(false)\r
const description = ref('This is a description')\r
\r
const alertTypeList = [\r
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
\r
function fireClose(e: Event) {\r
  logEvent('close', e)\r
}\r
<\/script>\r
\r
<template>\r
  <Story title="Feedback/Alert" icon="material-symbols:add-alert-outline">\r
    <Variant title="Basic Usage">\r
      <el-alert :type="currentType" :title="currentType" />\r
      <template #controls>\r
        <HstRadio\r
          v-model="currentType"\r
          title="Alert Type"\r
          :options="alertTypeList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Theme">\r
      <el-alert :type="currentType" :effect="currentTheme" :title="currentType" />\r
      <template #controls>\r
        <HstRadio\r
          v-model="currentType"\r
          title="Alert Type"\r
          :options="alertTypeList"\r
        />\r
\r
        <HstButtonGroup\r
          v-model="currentTheme"\r
          title="Theme"\r
          :options="[\r
            {\r
              label: 'Dark Theme',\r
              value: 'dark',\r
            },\r
            {\r
              label: 'Light Theme',\r
              value: 'light',\r
            },\r
          ]"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Customizable Close Button">\r
      <el-alert :title="currentType" :type="currentType" :close-text="closableState.text" :closable="closableState.closable" :effect="currentTheme" @close="fireClose" />\r
\r
      <template #controls>\r
        <HstText\r
          v-model="closableState.text"\r
          title="Custom Close Text"\r
        />\r
        <HstCheckbox\r
          v-model="closableState.closable"\r
          title="Closable"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="With Icon">\r
      <el-alert :title="currentType" :type="currentType" :show-icon="showIcon" :effect="currentTheme" />\r
      <template #controls>\r
        <HstCheckbox\r
          v-model="showIcon"\r
          title="Show Icon"\r
        />\r
        <HstRadio\r
          v-model="currentType"\r
          title="Alert Type"\r
          :options="alertTypeList"\r
        />\r
        <HstButtonGroup\r
          v-model="currentTheme"\r
          title="Theme"\r
          :options="[\r
            {\r
              label: 'Dark Theme',\r
              value: 'dark',\r
            },\r
            {\r
              label: 'Light Theme',\r
              value: 'light',\r
            },\r
          ]"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Centered Text">\r
      <el-alert :title="currentType" :type="currentType" :center="centeredText" :show-icon="showIcon" />\r
      <template #controls>\r
        <HstCheckbox\r
          v-model="showIcon"\r
          title="Show Icon"\r
        />\r
        <HstCheckbox\r
          v-model="centeredText"\r
          title="Centered Text"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="With Icon and Description">\r
      <el-alert :title="currentType" :type="currentType" :show-icon="showIcon" :effect="currentTheme" :description="description" />\r
      <template #controls>\r
        <HstText\r
          v-model="description"\r
          title="Description"\r
        />\r
        <HstCheckbox\r
          v-model="showIcon"\r
          title="Show Icon"\r
        />\r
        <HstRadio\r
          v-model="currentType"\r
          title="Alert Type"\r
          :options="alertTypeList"\r
        />\r
        <HstButtonGroup\r
          v-model="currentTheme"\r
          title="Theme"\r
          :options="[\r
            {\r
              label: 'Dark Theme',\r
              value: 'dark',\r
            },\r
            {\r
              label: 'Light Theme',\r
              value: 'light',\r
            },\r
          ]"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
Alert usage\r
\r
## Theme\r
\r
Alert provide two different themes, light and dark.\r
\r
Set effect to change theme, default is light.\r
</docs>\r
\r
<style scoped>\r
.el-alert {\r
  margin: 20px 0 0;\r
}\r
.el-alert:first-child {\r
  margin: 0;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFeedbackAlertStoryVue as default
};
