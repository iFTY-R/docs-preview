const __resolved__virtual_storySource_srcComponentsFormRadioStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import type { RadioProps } from 'element-plus'\r
import { logEvent } from 'histoire/client'\r
\r
const radio = ref('1')\r
const isDisabled = ref(true)\r
const isBorder = ref(true)\r
const currentSize = ref<RadioProps['size']>('large')\r
const radioSizeList: Record<'label' & 'value', RadioProps['size']>[] = [\r
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
function radioChange(e: string | number | boolean) {\r
  logEvent('change', e)\r
}\r
<\/script>\r
\r
<template>\r
  <Story title="Form/Radio" icon="material-symbols:radio-button-checked-outline">\r
    <Variant title="Basic Usage">\r
      <el-radio v-model="radio" :size="currentSize" label="1">\r
        Option 1\r
      </el-radio>\r
      <el-radio v-model="radio" :size="currentSize" label="2">\r
        Option 2\r
      </el-radio>\r
      <template #controls>\r
        <HstRadio\r
          v-model="radio" title="Radio"\r
          :options="[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]"\r
        />\r
        <HstRadio v-model="currentSize" title="Size" :options="radioSizeList" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Disabled">\r
      <el-radio v-model="radio" :size="currentSize" :disabled="isDisabled" label="1">\r
        Option 1\r
      </el-radio>\r
      <el-radio v-model="radio" :size="currentSize" :disabled="isDisabled" label="2">\r
        Option 2\r
      </el-radio>\r
      <template #controls>\r
        <HstCheckbox v-model="isDisabled" title="Disabled" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Group">\r
      <el-radio-group v-model="radio" @change="radioChange">\r
        <el-radio label="1">\r
          Option 1\r
        </el-radio>\r
        <el-radio label="2">\r
          Option 2\r
        </el-radio>\r
      </el-radio-group>\r
      <template #controls>\r
        <HstRadio\r
          v-model="radio" title="Radio"\r
          :options="[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Button style">\r
      <el-radio-group v-model="radio">\r
        <el-radio-button label="1">\r
          Option 1\r
        </el-radio-button>\r
        <el-radio-button label="2">\r
          Option 2\r
        </el-radio-button>\r
      </el-radio-group>\r
    </Variant>\r
\r
    <Variant title="With borders">\r
      <el-radio-group v-model="radio">\r
        <el-radio label="1" :size="currentSize" :border="isBorder">\r
          Option 1\r
        </el-radio>\r
        <el-radio label="2" :size="currentSize" :border="isBorder">\r
          Option 2\r
        </el-radio>\r
      </el-radio-group>\r
      <template #controls>\r
        <HstCheckbox v-model="isBorder" title="Border" />\r
        <HstRadio\r
          v-model="radio" title="Radio"\r
          :options="[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]"\r
        />\r
        <HstRadio v-model="currentSize" title="Size" :options="radioSizeList" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
radio usage\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormRadioStoryVue as default
};
