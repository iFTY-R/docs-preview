const __resolved__virtual_storySource_srcComponentsFormDatetimepickerStoryVue = `<script setup lang="ts">\r
import { logEvent } from 'histoire/client'\r
import { ref } from 'vue'\r
\r
const date = ref()\r
const size = ref<'large' | 'default' | 'small'>('default')\r
const valueFormat = ref()\r
const range = ref(false)\r
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)\r
const defaultRangeTime: [Date, Date] = [\r
  new Date(2000, 1, 1, 12, 0, 0),\r
  new Date(2000, 2, 1, 8, 0, 0),\r
]\r
const shortcuts = [\r
  {\r
    text: 'Today',\r
    value: new Date(),\r
  },\r
  {\r
    text: 'Yesterday',\r
    value: () => {\r
      const date = new Date()\r
      date.setTime(date.getTime() - 3600 * 1000 * 24)\r
      return date\r
    },\r
  },\r
  {\r
    text: 'A week ago',\r
    value: () => {\r
      const date = new Date()\r
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)\r
      return date\r
    },\r
  },\r
]\r
const rangeShortcuts = [\r
  {\r
    text: 'Last week',\r
    value: () => {\r
      const end = new Date()\r
      const start = new Date()\r
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)\r
      return [start, end]\r
    },\r
  },\r
  {\r
    text: 'Last month',\r
    value: () => {\r
      const end = new Date()\r
      const start = new Date()\r
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)\r
      return [start, end]\r
    },\r
  },\r
  {\r
    text: 'Last 3 months',\r
    value: () => {\r
      const end = new Date()\r
      const start = new Date()\r
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)\r
      return [start, end]\r
    },\r
  },\r
]\r
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
const valueFormatList = [\r
  {\r
    label: 'YYYY-MM-DD h:m:s a',\r
    value: 'YYYY-MM-DD h:m:s a',\r
  },\r
  {\r
    label: 'x',\r
    value: 'x',\r
  },\r
]\r
function handleChange(dateTime: any) {\r
  logEvent('change', { dateTime })\r
}\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Form/DateTimePicker"\r
    icon="material-symbols:calendar-month-outline"\r
    :layout="{ type: 'grid', width: 480 }"\r
  >\r
    <Variant title="Basic Usage">\r
      <el-date-picker\r
        v-model="date"\r
        type="datetime"\r
        placeholder="Select date and time"\r
        :size="size"\r
        @change="handleChange"\r
      />\r
      <template #controls>\r
        <HstRadio v-model="size" :options="sizeList" title="Size" />\r
      </template>\r
    </Variant>\r
    <Variant title="With shortcuts">\r
      <el-date-picker\r
        v-model="date"\r
        type="datetime"\r
        placeholder="Select date and time"\r
        :shortcuts="shortcuts"\r
        @change="handleChange"\r
      />\r
    </Variant>\r
    <Variant title="Date time format">\r
      <el-date-picker\r
        v-model="date"\r
        type="datetime"\r
        placeholder="Pick a Date"\r
        format="YYYY/MM/DD HH:mm:ss"\r
        :value-format="valueFormat"\r
        @change="handleChange"\r
      />\r
      <template #controls>\r
        <HstRadio\r
          v-model="valueFormat"\r
          :options="valueFormatList"\r
          title="Date time format"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Date and time range">\r
      <el-date-picker\r
        v-model="date"\r
        type="datetimerange"\r
        range-separator="To"\r
        start-placeholder="Start date"\r
        end-placeholder="End date"\r
        :size="size"\r
        :shortcuts="rangeShortcuts"\r
        @change="handleChange"\r
      />\r
      <template #controls>\r
        <HstRadio v-model="size" :options="sizeList" title="Size" />\r
      </template>\r
    </Variant>\r
    <Variant title="Default time">\r
      <el-date-picker\r
        v-model="date"\r
        :type="\`datetime\${range ? 'range' : ''}\`"\r
        placeholder="Select date"\r
        start-placeholder="Start Date"\r
        end-placeholder="End Date"\r
        :default-time="range ? defaultRangeTime : defaultTime"\r
        @change="handleChange"\r
      />\r
      <template #controls>\r
        <HstCheckbox v-model="range" title="Range" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
# DateTimePicker\r
Select date and time in one picker.\r
\r
## Basic Usage\r
You can select date and time in one picker at the same time by setting \`type\` to \`datetime\`. The way to use shortcuts is the same as Date Picker.\r
\r
## Date Time Formats\r
Use \`format\` to control displayed text's format in the input box. Use \`value-format\` to control binding value's format.\r
\r
By default, the component accepts and emits a \`Date\` object.\r
\r
Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.\r
\r
## Date and time range\r
You can select date and time range by setting \`type\` to \`datetimerange\`.\r
\r
## Default time value for start date and end date\r
When picking date range on the date panel with type \`datetimerange\`, \`00:00:00\` will be used as the default time value for start and end date. We can control it with the \`default-time\` attribute. \`default-time\` accepts an array of up to two Date objects. The first item controls time value of the start date and the second item controls time value of the end date.\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormDatetimepickerStoryVue as default
};
