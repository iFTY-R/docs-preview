const __resolved__virtual_storySource_srcComponentsFormDatepickerStoryVue = `<script setup lang="ts">\r
import { h, ref, shallowRef } from 'vue'\r
import type { RadioProps } from 'element-plus'\r
import { logEvent } from 'histoire/client'\r
import type { DateCell } from 'element-plus/es/components/date-picker/src/date-picker.type'\r
\r
const date = ref('')\r
const dateRange = ref('')\r
const dateRange2 = ref('')\r
const dateMonth = ref('')\r
const dateMonth2 = ref('')\r
const date2 = ref('')\r
const date3 = ref('')\r
const date4 = ref('')\r
const size = ref<'large' | 'default' | 'small'>('default')\r
const valueCustom = ref('2022-10-29')\r
\r
const customPrefix = shallowRef({\r
  render() {\r
    return h('p', 'pre')\r
  },\r
})\r
\r
const holidays1 = ref([\r
  '2022-10-01',\r
  '2022-10-02',\r
  '2022-10-03',\r
  '2022-10-04',\r
  '2022-10-05',\r
  '2022-10-06',\r
  '2022-10-07',\r
])\r
const holidays2 = ref([\r
  '2022-10-08',\r
  '2022-10-09',\r
  '2022-10-10',\r
  '2022-10-11',\r
  '2022-10-12',\r
  '2022-10-13',\r
  '2022-10-14',\r
])\r
const holidays3 = ([\r
  '2022-10-15',\r
  '2022-10-16',\r
  '2022-10-17',\r
  '2022-10-18',\r
  '2022-10-19',\r
  '2022-10-20',\r
  '2022-10-21',\r
])\r
const holidaysOptions: {\r
  label: string\r
  value: any\r
}[] = [\r
  {\r
    label: '2022-10-01 TO 2022-10-07',\r
    value: holidays1,\r
  }, {\r
    label: '2022-10-08 TO 2022-10-14',\r
    value: holidays2,\r
  }, {\r
    label: '2022-10-15 TO 2022-10-21',\r
    value: holidays3,\r
  },\r
]\r
const sizeList: Record<'label' | 'value', RadioProps['size']>[] = [\r
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
const shortcutsDataRange = [\r
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
const shortcutsMountRange = [\r
  {\r
    text: 'This month',\r
    value: [new Date(), new Date()],\r
  },\r
  {\r
    text: 'This year',\r
    value: () => {\r
      const end = new Date()\r
      const start = new Date(new Date().getFullYear(), 0)\r
      return [start, end]\r
    },\r
  },\r
  {\r
    text: 'Last 6 months',\r
    value: () => {\r
      const end = new Date()\r
      const start = new Date()\r
      start.setMonth(start.getMonth() - 6)\r
      return [start, end]\r
    },\r
  },\r
]\r
const holidays = [\r
  '2022-10-01',\r
  '2022-10-02',\r
  '2022-10-03',\r
  '2022-10-04',\r
  '2022-10-05',\r
  '2022-10-06',\r
  '2022-10-07',\r
]\r
\r
function disabledDate(time: Date) {\r
  return time.getTime() > Date.now()\r
}\r
function handleChange(val: typeof date) {\r
  logEvent('change', { date: val })\r
}\r
function calendarChange(val: [Date, Date]) {\r
  logEvent('calendar-change', { calendarValue: val })\r
}\r
function visibleChange(val: boolean) {\r
  logEvent('visible-change', { visible: val })\r
}\r
function isHoliday({ dayjs }: DateCell) {\r
  return holidays.includes(dayjs!.format('YYYY-MM-DD'))\r
}\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Form/DatePicker"\r
    icon="carbon:calendar"\r
    :layout="{ type: 'grid', width: 480 }"\r
  >\r
    <Variant title="Basic Usage">\r
      <div>\r
        <el-radio-group v-model="size" label="size control" style="margin-bottom: 20px;">\r
          <el-radio-button v-for="(item, index) in sizeList" :key="index" :label="item.label">\r
            {{ item.value }}\r
          </el-radio-button>\r
        </el-radio-group>\r
      </div>\r
      <el-date-picker\r
        v-model="date"\r
        type="date"\r
        placeholder="Pick a day"\r
        value-format="YYYY-MM-DD"\r
        :disabled-date="disabledDate"\r
        :size="size"\r
        @blur="logEvent('blur', $event)"\r
        @focus="logEvent('focus', $event)"\r
        @change="handleChange"\r
        @visible-change="visibleChange"\r
      />\r
      <template #controls>\r
        <HstButtonGroup v-model="size" :options="sizeList" title="Size" />\r
        <HstText v-model="date" title="date input" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Quick options">\r
      <div class="block">\r
        <span class="demonstration">Picker with quick options</span>\r
        <el-date-picker\r
          v-model="date" type="date" placeholder="Pick a day" :disabled-date="disabledDate"\r
          :shortcuts="shortcuts" format="YYYY/MM/DD" value-format="YYYY-MM-DD"\r
        />\r
      </div>\r
\r
      <template #controls>\r
        <HstText v-model="date" title="date input" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Other measurements">\r
      <div class="demo-date-picker">\r
        <div class="container">\r
          <div class="block">\r
            <span class="demonstration">Week</span>\r
            <el-date-picker v-model="date" type="week" format="[Week] ww" placeholder="Pick a week" />\r
          </div>\r
          <div class="block">\r
            <span class="demonstration">Month</span>\r
            <el-date-picker v-model="date2" type="month" placeholder="Pick a month" />\r
          </div>\r
        </div>\r
        <div class="container">\r
          <div class="block">\r
            <span class="demonstration">Year</span>\r
            <el-date-picker v-model="date3" type="year" placeholder="Pick a year" />\r
          </div>\r
          <div class="block">\r
            <span class="demonstration">Dates</span>\r
            <el-date-picker v-model="date4" type="dates" placeholder="Pick one or more dates" />\r
          </div>\r
        </div>\r
      </div>\r
    </Variant>\r
\r
    <Variant title="Date Range">\r
      <div class="demo-date-picker">\r
        <div class="block">\r
          <span class="demonstration">Default</span>\r
          <el-date-picker\r
            v-model="dateRange"\r
            type="daterange"\r
            range-separator="To"\r
            start-placeholder="Start date"\r
            end-placeholder="End date"\r
            @calendar-change="calendarChange"\r
          />\r
        </div>\r
        <div class="block">\r
          <span class="demonstration">With quick options</span>\r
          <el-date-picker\r
            v-model="dateRange2"\r
            type="daterange"\r
            unlink-panels\r
            range-separator="To"\r
            start-placeholder="Start date"\r
            end-placeholder="End date"\r
            :shortcuts="shortcutsDataRange"\r
            @calendar-change="calendarChange"\r
          />\r
        </div>\r
      </div>\r
    </Variant>\r
\r
    <Variant title="Month Range">\r
      <div class="demo-date-picker">\r
        <div class="block">\r
          <span class="demonstration">Default</span>\r
          <el-date-picker\r
            v-model="dateMonth"\r
            type="monthrange"\r
            range-separator="To"\r
            start-placeholder="Start month"\r
            end-placeholder="End month"\r
          />\r
        </div>\r
        <div class="block">\r
          <span class="demonstration">With quick options</span>\r
          <el-date-picker\r
            v-model="dateMonth2"\r
            type="monthrange"\r
            unlink-panels\r
            range-separator="To"\r
            start-placeholder="Start month"\r
            end-placeholder="End month"\r
            :shortcuts="shortcutsMountRange"\r
          />\r
        </div>\r
      </div>\r
    </Variant>\r
\r
    <Variant title="Default Value and different format values">\r
      <div class="demo-date-picker">\r
        <div class="block">\r
          <span class="demonstration">Emits Date object</span>\r
          <div class="demonstration">\r
            Value: {{ date }}\r
          </div>\r
          <el-date-picker\r
            v-model="date"\r
            type="date"\r
            placeholder="Pick a Date"\r
            format="YYYY/MM/DD"\r
          />\r
        </div>\r
        <div class="block">\r
          <span class="demonstration">Use value-format</span>\r
          <div class="demonstration">\r
            Value：{{ date2 }}\r
          </div>\r
          <el-date-picker\r
            v-model="date2"\r
            type="date"\r
            placeholder="Pick a Date"\r
            format="YYYY/MM/DD"\r
            value-format="YYYY-MM-DD"\r
          />\r
        </div>\r
        <div class="block">\r
          <span class="demonstration">Timestamp</span>\r
          <div class="demonstration">\r
            Value：{{ date3 }}\r
          </div>\r
          <el-date-picker\r
            v-model="date3"\r
            type="date"\r
            placeholder="Pick a Date"\r
            format="YYYY/MM/DD"\r
            value-format="x"\r
          />\r
        </div>\r
      </div>\r
    </Variant>\r
\r
    <Variant title="Set custom content of prefix">\r
      <el-date-picker\r
        v-model="date"\r
        type="date"\r
        placeholder="Pick a day"\r
        format="YYYY/MM/DD"\r
        :prefix-icon="customPrefix"\r
      />\r
    </Variant>\r
\r
    <Variant title="Custom content">\r
      <div class="demo-date-picker" style="justify-content: center; margin-top: 20px;">\r
        The content of cell can be customized, in scoped-slot you can get the cell data.\r
        <el-date-picker\r
          v-model="valueCustom"\r
          type="date"\r
          style="margin-top: 20px;"\r
          placeholder="Pick a day"\r
          format="YYYY/MM/DD"\r
          value-format="YYYY-MM-DD"\r
        >\r
          <template #default="cell">\r
            <div class="cell" :class="{ current: cell.isCurrent }">\r
              <span class="text">{{ cell.text }}</span>\r
              <span v-if="isHoliday(cell)" class="holiday" />\r
            </div>\r
          </template>\r
        </el-date-picker>\r
      </div>\r
\r
      <template #controls>\r
        <HstText v-model="valueCustom" title="date input" />\r
        <HstRadio v-model="holidays" title="holidays" :options="holidaysOptions" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
# DatePicker\r
\r
Use Date Picker for date input.\r
\r
## Basic Usage\r
\r
Basic date picker measured by 'day'.\r
\r
The measurement is determined by the \`type\` attribute. You can enable quick options via \`shortcuts\` property. The disabled date is set by \`disabledDate\`, which is a function.\r
\r
## Other measurements\r
\r
You can choose week, month, year or multiple dates by extending the standard date picker component.\r
\r
## Date range\r
\r
Picking a date range is supported.\r
\r
When in range mode, the left and right panels are linked by default. If you want the two panels to switch current months independently, you can use the unlink-panels attribute.\r
\r
## Month range\r
\r
Picking a month range is supported.\r
\r
When in range mode, the left and right panels are linked by default. If you want the two panels to switch current years independently, you can use the \`unlink-panels\` attribute.\r
\r
## Default Value\r
\r
If user hasn't picked a date, shows today's calendar by default. You can use \`default-value\` to set another date. Its value should be parsable by \`new Date()\`.\r
\r
If type is \`daterange\`, \`default-value\` sets the left side calendar.\r
\r
## Date Formats\r
\r
Use \`format\` to control displayed text's format in the input box. Use \`value-format\` to control binding value's format.\r
\r
By default, the component accepts and emits a \`Date\` object.\r
\r
Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.\r
\r
> **WARNING**\r
> Pay attention to capitalization\r
\r
## Default time for start date and end date\r
\r
When picking a date range, you can assign the time part for start date and end date.\r
\r
By default, the time part of start date and end date are both \`00:00:00\`. Setting \`default-time\` can change their time respectively. It accepts an array of up to two Date objects. The first string sets the time for the start date, and the second for the end date.\r
\r
## Set custom content of prefix\r
\r
The content of prefix can be customized.\r
\r
Setting \`prefix-icon\` to component which you import form other .vue or generated by the render function.\r
\r
## Custom content\r
\r
The content of cell can be customized, in scoped-slot you can get the cell data.\r
\r
## Localization\r
\r
The default locale of is English, if you need to use other languages, please check [Internationalization](https://element-plus.gitee.io/en-US/guide/i18n.html)\r
\r
Note, date time locale (month name, first day of the week ...) are also configured in localization.\r
</docs>\r
\r
<style>\r
.demo-date-picker {\r
  display: flex;\r
  width: 100%;\r
  padding: 0;\r
  flex-wrap: wrap;\r
}\r
\r
.demo-date-picker .block {\r
  padding: 30px 0;\r
  text-align: center;\r
  flex: 1;\r
}\r
\r
.demo-date-picker .block:last-child {\r
  border-right: none;\r
}\r
\r
.demo-date-picker .demonstration {\r
  display: block;\r
  color: var(--el-text-color-secondary);\r
  font-size: 14px;\r
  margin-bottom: 20px;\r
}\r
\r
.demo-date-picker .container {\r
  flex: 1;\r
}\r
\r
.demo-date-picker .container .block {\r
  border-right: none;\r
}\r
\r
.demo-date-picker .container:last-child {\r
  border-right: none;\r
}\r
\r
.cell {\r
  height: 30px;\r
  padding: 3px 0;\r
  box-sizing: border-box;\r
}\r
\r
.cell .text {\r
  width: 24px;\r
  height: 24px;\r
  display: block;\r
  margin: 0 auto;\r
  line-height: 24px;\r
  position: absolute;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  border-radius: 50%;\r
}\r
\r
.cell.current .text {\r
  background: #626aef;\r
  color: #fff;\r
}\r
\r
.cell .holiday {\r
  position: absolute;\r
  width: 6px;\r
  height: 6px;\r
  background: var(--el-color-danger);\r
  border-radius: 50%;\r
  bottom: 0px;\r
  left: 50%;\r
  transform: translateX(-50%);\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormDatepickerStoryVue as default
};
