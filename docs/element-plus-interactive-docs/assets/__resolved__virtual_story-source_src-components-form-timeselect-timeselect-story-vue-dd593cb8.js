const __resolved__virtual_storySource_srcComponentsFormTimeselectTimeselectStoryVue = `<script setup lang="ts">\r
import type { ISelectProps } from 'element-plus'\r
import { Link } from '@element-plus/icons-vue'\r
import sizeOptions from '@/constants/sizeOptions'\r
\r
// Basic Usage\r
const basicData = reactive({\r
  value: '',\r
  start: '09:00',\r
  step: '00:30',\r
  end: '18:00',\r
  placeholder: 'Select time',\r
  disabled: false,\r
  editable: true,\r
  clearable: true,\r
  size: 'default' as ISelectProps['size'],\r
})\r
\r
const basicSource = computed(() => {\r
  return \`<el-time-select\r
  v-model="value"\${isAttribute(\r
    basicData.start !== '09:00',\r
    \`start="\${basicData.start}"\`,\r
  )}\${isAttribute(\r
    basicData.step !== '00:30',\r
    \`step="\${basicData.step}"\`,\r
  )}\${isAttribute(\r
    basicData.end !== '18:00',\r
    \`end="\${basicData.end}"\`,\r
  )}\${isAttribute(\r
    basicData.placeholder !== '',\r
    \`placeholder="\${basicData.placeholder}"\`,\r
  )}\${isAttribute(\r
    basicData.disabled,\r
    'disabled',\r
  )}\${isAttribute(\r
    !basicData.editable,\r
    ':editable="false"',\r
  )}\${isAttribute(\r
    !basicData.clearable,\r
    ':clearable="false"',\r
  )}\${isAttribute(\r
    basicData.size !== 'default',\r
    \`size="\${basicData.size}"\`,\r
  )}\r
/>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref('')\r
<\\/script>\r
\`\r
})\r
\r
// Time Formats\r
const timeFormatsData = reactive({\r
  value: '',\r
  format: 'hh:mm A',\r
})\r
\r
const timeFormatsSource = computed(() => {\r
  return \`<el-time-select\r
  v-model="value"\r
  format="\${timeFormatsData.format}"\r
/>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref('')\r
<\\/script>\r
\`\r
})\r
\r
// Fixed time range\r
const fixedTimeData = reactive({\r
  value: 'startTime',\r
  endTime: '',\r
  startTime: '',\r
})\r
\r
const fixedTimeSource = computed(() => {\r
  return \`<template>\r
  <el-time-select\r
    v-model="fixedTimeData.startTime"\r
    :max-time="fixedTimeData.endTime"\r
    placeholder="Start time"\r
    start="08:30"\r
    step="00:15"\r
    end="18:30"\r
  />\r
  <el-time-select\r
    v-model="fixedTimeData.endTime"\r
    :min-time="fixedTimeData.startTime"\r
    placeholder="End time"\r
    start="08:30"\r
    step="00:15"\r
    end="18:30"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
  import { reactive } from 'vue'\r
  const basicData = reactive({\r
    endTime: '',\r
    startTime: '',\r
  })\r
<\\/script>\r
\`\r
})\r
<\/script>\r
\r
<!-- icon from https://icones.js.org/collection/all?s=timeSelect -->\r
<template>\r
  <Story\r
    title="Form/TimeSelect"\r
    icon="fad:timeselect"\r
    :layout="{\r
      type: 'grid',\r
      width: 400,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-time-select\r
        v-model="basicData.value"\r
        :start="basicData.start"\r
        :step="basicData.step"\r
        :end="basicData.end"\r
        :placeholder="basicData.placeholder"\r
        :disabled="basicData.disabled"\r
        :editable="basicData.editable"\r
        :clearable="basicData.clearable"\r
        :size="basicData.size"\r
      />\r
      <template #controls>\r
        <HstText\r
          v-model="basicData.start"\r
          title="Start"\r
        />\r
        <HstText\r
          v-model="basicData.step"\r
          title="Step"\r
        />\r
        <HstText\r
          v-model="basicData.end"\r
          title="End"\r
        />\r
        <HstText\r
          v-model="basicData.placeholder"\r
          title="Placeholder"\r
        />\r
        <HstButtonGroup v-model="basicData.size" :options="sizeOptions" title="Size" />\r
        <HstCheckbox v-model="basicData.disabled" title="Disabled" />\r
        <HstCheckbox v-model="basicData.editable" title="Editable" />\r
        <HstCheckbox v-model="basicData.clearable" title="Clearable" />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Time Formats"\r
      :source="timeFormatsSource"\r
    >\r
      <el-time-select\r
        v-model="timeFormatsData.value"\r
        start="08:30"\r
        step="00:15"\r
        end="18:30"\r
        placeholder="Select time"\r
        :format="timeFormatsData.format"\r
      />\r
      <template #controls>\r
        <HstText\r
          v-model="timeFormatsData.format"\r
          title="Format"\r
        />\r
        <div class="htw-p-2 tips">\r
          Use format to control format of time(hours and minutes).\r
          Check the list\r
          <el-link\r
            type="primary"\r
            target="_blank"\r
            href="https://day.js.org/docs/zh-CN/display/format"\r
            :icon="Link"\r
          >\r
            here\r
          </el-link>\r
          of all available formats of Day.js.\r
        </div>\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Fixed time range"\r
      :source="fixedTimeSource"\r
    >\r
      <div class="demo-time-range">\r
        <el-time-select\r
          v-model="fixedTimeData.startTime"\r
          :max-time="fixedTimeData.endTime"\r
          class="mr-4"\r
          placeholder="Start time"\r
          start="08:30"\r
          step="00:15"\r
          end="18:30"\r
        />\r
        <el-time-select\r
          v-model="fixedTimeData.endTime"\r
          :min-time="fixedTimeData.startTime"\r
          placeholder="End time"\r
          start="08:30"\r
          step="00:15"\r
          end="18:30"\r
        />\r
      </div>\r
      <template #controls />\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
.demo-time-range .el-select{\r
  width: 160px;\r
}\r
.demo-time-range .el-select:first-child{\r
  margin-right: 6px;\r
}\r
.tips{\r
  color: #606266;\r
  font-size: 12px;\r
  margin-top: 10px;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormTimeselectTimeselectStoryVue as default
};
