const __resolved__virtual_storySource_srcComponentsFormSwitchStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ElMessage } from 'element-plus'\r
import { Check, Close } from '@element-plus/icons-vue'\r
import { logEvent } from 'histoire/client'\r
\r
type HstControlOption = {\r
  label: string\r
  value: any\r
}[]\r
\r
const isOpening = ref(true)\r
const isOpening_sec = ref(false)\r
const isInlinePrompt = ref(false)\r
const activeColor = ref('#409eff')\r
const inActiveColor = ref('#dcdfe6')\r
const sizeValue = ref('small')\r
const isDisabled = ref(true)\r
const isLoading = ref(true)\r
\r
const preventSwitchValue = ref(\r
  {\r
    value: false,\r
    value_sec: false,\r
    loading: false,\r
    loading_sec: false,\r
  },\r
)\r
const switchValue = ref(\r
  {\r
    value: 0,\r
    activeValue: 100,\r
    inActiveValue: 0,\r
  },\r
)\r
const switchText = ref(\r
  {\r
    activeText: 'Y',\r
    inActiveText: 'F',\r
  },\r
)\r
\r
function beforeChange() {\r
  preventSwitchValue.value.loading = true\r
  return new Promise((resolve) => {\r
    setTimeout(() => {\r
      preventSwitchValue.value.loading = false\r
      ElMessage.success('Switch success')\r
      return resolve(true)\r
    }, 1000)\r
  })\r
}\r
function beforeChangeSecond() {\r
  preventSwitchValue.value.loading_sec = true\r
  return new Promise((resolve, reject) => {\r
    setTimeout(() => {\r
      preventSwitchValue.value.loading_sec = false\r
      ElMessage.error('Switch failed')\r
      return reject(new Error('Error'))\r
    }, 1000)\r
  })\r
}\r
\r
const activeColorOptions: HstControlOption = [\r
  {\r
    label: 'default',\r
    value: '#409eff',\r
  },\r
  {\r
    label: 'green',\r
    value: '#13ce66',\r
  },\r
  {\r
    label: 'red',\r
    value: '#ff4949',\r
  },\r
]\r
const inActiveColorOptions: HstControlOption = [\r
  {\r
    label: 'default',\r
    value: '#dcdfe6',\r
  },\r
  {\r
    label: 'grey',\r
    value: '#747b92',\r
  },\r
  {\r
    label: 'black',\r
    value: '#000000',\r
  },\r
]\r
const sizeValueOptions: HstControlOption = [\r
  {\r
    label: 'small',\r
    value: 'small',\r
  },\r
  {\r
    label: 'normal',\r
    value: 'normal',\r
  },\r
  {\r
    label: 'large',\r
    value: 'large',\r
  },\r
]\r
<\/script>\r
\r
<template>\r
  <Story title="Form/Switch" icon="mdi:toggle-switch-off-outline">\r
    <Variant title="Basic usage">\r
      <el-switch v-model="isOpening" :active-color="activeColor" :inactive-color="inActiveColor" />\r
      <template #controls>\r
        <HstCheckbox v-model="isOpening" title="switch value" :options="isOpening" />\r
        <HstRadio v-model="activeColor" title="activeColor" :options="activeColorOptions" />\r
        <HstRadio v-model="inActiveColor" title="inActiveColor" :options="inActiveColorOptions" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Sizes">\r
      <el-switch v-model="isOpening" active-text="open" inactive-text="close" :size="sizeValue" />\r
      <template #controls>\r
        <HstRadio v-model="sizeValue" title="Sizes" :options="sizeValueOptions" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Text description">\r
      <el-switch\r
        v-model="isOpening" :active-text="switchText.activeText" :inactive-text="switchText.inActiveText"\r
        :inline-prompt="isInlinePrompt"\r
      />\r
      <template #controls>\r
        <HstCheckbox v-model="isInlinePrompt" title="inlinePrompt" :options="isInlinePrompt" />\r
        <HstText v-model="switchText.activeText" title="activeText" />\r
        <HstText v-model="switchText.inActiveText" title="inActiveText" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Display custom icons">\r
      <el-switch v-model="isOpening" :active-icon="Check" :inactive-icon="Close" :inline-prompt="isInlinePrompt" />\r
      <template #controls>\r
        <HstCheckbox v-model="isInlinePrompt" title="inlinePrompt" :options="isInlinePrompt" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Extended value types">\r
      <el-tooltip :content="\`Switch value: \${switchValue.value}\`" placement="bottom">\r
        <el-switch\r
          v-model="switchValue.value" :active-value="switchValue.activeValue"\r
          :inactive-value="switchValue.inActiveValue"\r
        />\r
      </el-tooltip>\r
      <template #controls>\r
        <HstNumber v-model="switchValue.activeValue" title="activeValue" />\r
        <HstNumber v-model="switchValue.inActiveValue" title="inActiveValue" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Disabled">\r
      <el-switch v-model="isOpening" style="margin-right: 8px;" :disabled="isDisabled" />\r
      <el-switch v-model="isOpening_sec" />\r
      <template #controls>\r
        <HstCheckbox v-model="isDisabled" title="disabled" :options="isDisabled" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Loading">\r
      <el-switch v-model="isOpening" style="margin-right: 8px;" :loading="isLoading" />\r
      <el-switch v-model="isOpening_sec" style="margin-right: 8px;" :loading="isLoading" />\r
      <template #controls>\r
        <HstCheckbox v-model="isLoading" title="loading" :options="isLoading" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="prevent switching">\r
      <el-switch\r
        v-model="preventSwitchValue.value"\r
        style="margin-right: 8px;"\r
        :before-change="beforeChange" :loading="preventSwitchValue.loading"\r
        @change="logEvent('change', { change: 'switch value has changed' })"\r
        @click="logEvent('click', $event)"\r
      />\r
      <el-switch\r
        v-model="preventSwitchValue.value_sec" :loading="preventSwitchValue.loading_sec"\r
        :before-change="beforeChangeSecond"\r
        @change="logEvent('change', { change: 'switch value has changed' })"\r
        @click="logEvent('click', $event)"\r
      />\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
Switch is used for switching between two opposing states.\r
\r
## Basic usage\r
\r
Bind v-model to a Boolean typed variable.\r
\r
## Sizes\r
\r
Switchable buttons of different sizes\r
\r
## Text description\r
\r
You can add active-text and inactive-text attribute to show texts. use inline-prompt attribute to control text is displayed inside dot.\r
\r
You can add active-text and inactive-text attribute to show texts.\r
\r
## Display custom icons\r
\r
You can add active-icon and inactive-icon attribute to show icons. use inline-prompt attribute to control icon is displayed inside dot.\r
\r
## Extended value types\r
\r
You can set active-value and inactive-value attributes. They both receive a Boolean, String or Number typed value.\r
\r
## Disabled\r
\r
Adding the disabled attribute disables Switch.\r
\r
## Loading\r
\r
Setting the loading attribute to true indicates a loading state on the Switch.\r
\r
## prevent switching\r
\r
the before-change property, If false is returned or a Promise is returned and then is rejected, will stop switching.\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormSwitchStoryVue as default
};
