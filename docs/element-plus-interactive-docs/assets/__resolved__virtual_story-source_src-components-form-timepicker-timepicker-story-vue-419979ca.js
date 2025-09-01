const __resolved__virtual_storySource_srcComponentsFormTimepickerTimepickerStoryVue = `<script setup lang="ts">\r
import sizeOptions from '@/constants/sizeOptions'\r
import { isAttribute } from '@/utils'\r
\r
// Basic Usage\r
const basicData = reactive({\r
  value: '',\r
  arrowControl: false,\r
  readonly: false,\r
  editable: true,\r
  clearable: true,\r
  disabled: false,\r
  placeholder: 'Arbitrary time',\r
  size: 'default',\r
})\r
\r
const basicSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref('')\r
<\\/script>\r
\r
<el-time-picker\r
  v-model="value"\${isAttribute(\r
    basicData.arrowControl,\r
    'arrow-control',\r
  )}\${isAttribute(\r
    basicData.readonly,\r
    'readonly',\r
    )}\${isAttribute(\r
    !basicData.editable,\r
    ':editable="false"',\r
  )}\${isAttribute(\r
    !basicData.clearable,\r
     ':clearable="true"',\r
  )}\${isAttribute(\r
    basicData.disabled,\r
    'disabled',\r
  )}\${isAttribute(\r
    basicData.placeholder !== '',\r
    \`placeholder="\${basicData.placeholder}"\`,\r
  )}\${isAttribute(\r
    basicData.size !== 'default',\r
    \`size="\${basicData.size}"\`,\r
  )}\r
/>\r
\`\r
})\r
\r
// Limit the time range\r
const limitRangeData = reactive({\r
  value: '',\r
})\r
\r
function makeRange(rangeList: [number, number]) {\r
  const result: number[] = []\r
  const maxNum = rangeList[0] > rangeList[1] ? rangeList[0] : rangeList[1]\r
  const minNum = rangeList[0] > rangeList[1] ? rangeList[1] : rangeList[0]\r
  for (let i = minNum; i <= maxNum; i++)\r
    result.push(i)\r
\r
  return result\r
}\r
\r
const disabledHoursRange = ref<[number, number]>([0, 6])\r
function disabledHours() {\r
  return makeRange(disabledHoursRange.value)\r
}\r
\r
const disabledMinutesRange = ref<[number, number]>([30, 45])\r
function disabledMinutes() {\r
  return makeRange(disabledMinutesRange.value)\r
}\r
\r
const disabledSecondsRange = ref<[number, number]>([22, 55])\r
function disabledSeconds() {\r
  return makeRange(disabledSecondsRange.value)\r
}\r
\r
const limitRangeSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref('')\r
\r
const disabledHours = () => [\${makeRange(disabledHoursRange.value)}]\r
const disabledMinutes = () => [\${makeRange(disabledMinutesRange.value)}]\r
const disabledSeconds = () => [\${makeRange(disabledSecondsRange.value)}]\r
<\\/script>\r
\r
<el-time-picker\r
  v-model="value"\r
  :disabled-hours="disabledHours"\r
  :disabled-minutes="disabledMinutes"\r
  :disabled-seconds="disabledSeconds"\r
/>\`\r
})\r
\r
// Arbitrary time range\r
const arbitraryRangeData = reactive({\r
  value: '',\r
  separator: 'To',\r
  startPlaceholder: 'Start time',\r
  endPlaceholder: 'End time',\r
  arrowControl: false,\r
})\r
\r
const arbitraryRangeSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref('')\r
<\\/script>\r
\r
<el-time-picker\r
  v-model="value"\r
  is-range\r
  range-separator="\${arbitraryRangeData.separator}"\r
  start-placeholder="\${arbitraryRangeData.startPlaceholder}"\r
  end-placeholder="\${arbitraryRangeData.endPlaceholder}"\${isAttribute(\r
    arbitraryRangeData.arrowControl,\r
    'arrow-control',\r
  )}\r
/>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Form/TimePicker"\r
    icon="fluent:time-picker-20-regular"\r
    :layout="{\r
      type: 'grid',\r
      width: 500,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-time-picker\r
        v-if="basicData.arrowControl"\r
        v-model="basicData.value"\r
        :placeholder="basicData.placeholder"\r
        :clearable="basicData.clearable"\r
        :readonly="basicData.readonly"\r
        :disabled="basicData.disabled"\r
        :editable="basicData.editable"\r
        :size="basicData.size"\r
        arrow-control\r
      />\r
      <el-time-picker\r
        v-else\r
        v-model="basicData.value"\r
        :placeholder="basicData.placeholder"\r
        :clearable="basicData.clearable"\r
        :readonly="basicData.readonly"\r
        :disabled="basicData.disabled"\r
        :editable="basicData.editable"\r
        :size="basicData.size"\r
      />\r
      <template #controls>\r
        <HstText\r
          v-model="basicData.placeholder"\r
          title="Placeholder"\r
        />\r
        <HstButtonGroup\r
          v-model="basicData.size"\r
          title="Size"\r
          :options="sizeOptions"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.arrowControl"\r
          title="Arrow Control"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.readonly"\r
          title="Readonly"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.editable"\r
          title="Editable"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.clearable"\r
          title="Clearable"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.disabled"\r
          title="Disabled"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Limit the time range"\r
      :source="limitRangeSource"\r
    >\r
      <el-time-picker\r
        v-model="limitRangeData.value"\r
        :disabled-hours="disabledHours"\r
        :disabled-minutes="disabledMinutes"\r
        :disabled-seconds="disabledSeconds"\r
        placeholder="Arbitrary time"\r
      />\r
      <template #controls>\r
        <HstRange v-model="disabledHoursRange" title="DisabledHours" :min="0" :max="23" />\r
        <HstRange v-model="disabledMinutesRange" title="DisabledMinutes" :min="0" :max="59" />\r
        <HstRange v-model="disabledSecondsRange" title="DisabledSeconds" :min="0" :max="59" />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Arbitrary time range"\r
      :source="arbitraryRangeSource"\r
    >\r
      <el-time-picker\r
        v-if="arbitraryRangeData.arrowControl"\r
        v-model="arbitraryRangeData.value"\r
        is-range\r
        :range-separator="arbitraryRangeData.separator"\r
        :start-placeholder="arbitraryRangeData.startPlaceholder"\r
        :end-placeholder="arbitraryRangeData.endPlaceholder"\r
        arrow-control\r
      />\r
      <el-time-picker\r
        v-else\r
        v-model="arbitraryRangeData.value"\r
        is-range\r
        :range-separator="arbitraryRangeData.separator"\r
        :start-placeholder="arbitraryRangeData.startPlaceholder"\r
        :end-placeholder="arbitraryRangeData.endPlaceholder"\r
      />\r
    </Variant>\r
    <template #controls>\r
      <HstText\r
        v-model="arbitraryRangeData.separator"\r
        title="Separator"\r
      />\r
      <HstText\r
        v-model="arbitraryRangeData.startPlaceholder"\r
        title="Start Placeholder"\r
      />\r
      <HstText\r
        v-model="arbitraryRangeData.endPlaceholder"\r
        title="End Placeholder"\r
      />\r
      <HstCheckbox\r
        v-model="arbitraryRangeData.arrowControl"\r
        title="Arrow Control"\r
      />\r
    </template>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormTimepickerTimepickerStoryVue as default
};
