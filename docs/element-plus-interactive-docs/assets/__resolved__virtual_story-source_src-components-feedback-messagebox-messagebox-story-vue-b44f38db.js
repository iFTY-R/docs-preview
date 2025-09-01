const __resolved__virtual_storySource_srcComponentsFeedbackMessageboxMessageboxStoryVue = `<script setup lang="ts">\r
import { ElMessageBox } from 'element-plus'\r
import { cloneDeep } from 'lodash'\r
import { genSourceCode } from './gen-code'\r
import controls, { defaultMessageBoxOptions } from './controls'\r
import type { MessageBoxOptions } from './controls'\r
\r
// AlertMessageBox\r
const alertMessageBoxOptions = ref<MessageBoxOptions>()\r
function openAlertMessageBox() {\r
  const options = alertMessageBoxOptions.value || cloneDeep(defaultMessageBoxOptions)\r
  ElMessageBox.alert(options.title, options)\r
}\r
\r
const alertMessageBoxSource = computed(() => {\r
  return genSourceCode('alert', unref(alertMessageBoxOptions))\r
})\r
\r
// ConfirmMessageBox\r
const confirmMessageBoxOptions = ref<MessageBoxOptions>()\r
function openConfirmMessageBox() {\r
  const options = confirmMessageBoxOptions.value || cloneDeep(defaultMessageBoxOptions)\r
  ElMessageBox.confirm(options.title, options)\r
}\r
\r
const confirmMessageBoxSource = computed(() => {\r
  return genSourceCode('confirm', unref(confirmMessageBoxOptions))\r
})\r
\r
// PromptMessageBox\r
const promptMessageBoxOptions = ref<MessageBoxOptions>()\r
function openPromptMessageBox() {\r
  const options = promptMessageBoxOptions.value || cloneDeep(defaultMessageBoxOptions)\r
  ElMessageBox.prompt(options.title || 'title', options)\r
}\r
\r
const promptMessageBoxSource = computed(() => {\r
  return genSourceCode('prompt', unref(promptMessageBoxOptions))\r
})\r
\r
// Customization\r
const customizationMessageBoxOptions = ref<MessageBoxOptions>()\r
\r
function openCustomizationMessageBox() {\r
  const options = customizationMessageBoxOptions.value || cloneDeep(defaultMessageBoxOptions)\r
  ElMessageBox(options)\r
}\r
\r
const customizationMessageBoxSource = computed(() => {\r
  return genSourceCode(undefined, unref(customizationMessageBoxOptions))\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Feedback/MessageBox" icon="mdi:message-text-fast-outline">\r
    <Variant\r
      title="Alert"\r
      :source="alertMessageBoxSource"\r
    >\r
      <el-button @click="openAlertMessageBox">\r
        Open the Alert Message Box\r
      </el-button>\r
      <template #controls>\r
        <controls v-model="alertMessageBoxOptions" />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Confirm"\r
      :source="confirmMessageBoxSource"\r
    >\r
      <el-button @click="openConfirmMessageBox">\r
        Open the Confirm Message Box\r
      </el-button>\r
      <template #controls>\r
        <controls v-model="confirmMessageBoxOptions" />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Prompt"\r
      :source="promptMessageBoxSource"\r
    >\r
      <el-button @click="openPromptMessageBox">\r
        Open the Prompt Message Box\r
      </el-button>\r
      <template #controls>\r
        <controls v-model="promptMessageBoxOptions" />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Customization"\r
      :source="customizationMessageBoxSource"\r
    >\r
      <el-button @click="openCustomizationMessageBox">\r
        Open the Customization Message Box\r
      </el-button>\r
      <template #controls>\r
        <controls v-model="customizationMessageBoxOptions" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFeedbackMessageboxMessageboxStoryVue as default
};
