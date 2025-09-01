const __resolved__virtual_storySource_srcComponentsFormCheckboxStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import type { CheckboxProps, CheckboxValueType } from 'element-plus'\r
import { logEvent } from 'histoire/client'\r
\r
const size = ref<CheckboxProps['size']>('default')\r
const disabled = ref(false)\r
const checkAll = ref(false)\r
const isIndeterminate = ref(true)\r
const border = ref(true)\r
const checkList = ref(['selected and disabled', 'Option A'])\r
const max = ref(2)\r
const min = ref(1)\r
const checkedCities = ref(['Shanghai', 'Beijing'])\r
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\r
const sizeOptions: {\r
  label: CheckboxProps['size']\r
  value: CheckboxProps['size']\r
}[] = [\r
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
function handleCheckAllChange(val: CheckboxValueType) {\r
  checkedCities.value = val ? cities : []\r
  isIndeterminate.value = false\r
  logEvent('checkboxChange', val)\r
}\r
function handleCheckedCitiesChange(value: CheckboxValueType[]) {\r
  const checkedCount = value.length\r
  checkAll.value = checkedCount === cities.length\r
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length\r
  logEvent('checkboxGroupChange', value)\r
}\r
function checkboxChange(value: CheckboxValueType) {\r
  logEvent('checkboxChange', { value })\r
}\r
function checkboxGroupChange(value: CheckboxValueType[]) {\r
  logEvent('checkboxGroupChange', value)\r
}\r
<\/script>\r
\r
<template>\r
  <Story title="Form/Checkbox" icon="mdi:format-list-checkbox">\r
    <Variant title="Basic Usage">\r
      <el-checkbox\r
        label="option1"\r
        :size="size"\r
        :disabled="disabled"\r
        @change="checkboxChange"\r
      />\r
      <template #controls>\r
        <HstRadio v-model="size" :options="sizeOptions" title="Size" />\r
        <HstCheckbox v-model="disabled" title="Disable" />\r
      </template>\r
    </Variant>\r
    <Variant title="Checkbox group">\r
      <el-checkbox-group v-model="checkList" @change="checkboxGroupChange">\r
        <el-checkbox label="Option A" />\r
        <el-checkbox label="Option B" />\r
        <el-checkbox label="Option C" />\r
        <el-checkbox label="disabled" disabled />\r
        <el-checkbox\r
          label="selected and disabled"\r
          disabled\r
          @change="checkboxChange"\r
        />\r
      </el-checkbox-group>\r
    </Variant>\r
    <Variant title="Indeterminate">\r
      <el-checkbox\r
        v-model="checkAll"\r
        :indeterminate="isIndeterminate"\r
        @change="handleCheckAllChange"\r
      >\r
        Check all\r
      </el-checkbox>\r
      <el-checkbox-group\r
        v-model="checkedCities"\r
        @change="handleCheckedCitiesChange"\r
      >\r
        <el-checkbox v-for="city in cities" :key="city" :label="city">\r
          {{ city }}\r
        </el-checkbox>\r
      </el-checkbox-group>\r
    </Variant>\r
    <Variant title="Max/Min item checked">\r
      <el-checkbox-group\r
        v-model="checkedCities"\r
        :min="min"\r
        :max="max"\r
        @change="checkboxGroupChange"\r
      >\r
        <el-checkbox v-for="city in cities" :key="city" :label="city">\r
          {{ city }}\r
        </el-checkbox>\r
      </el-checkbox-group>\r
      <template #controls>\r
        <HstNumber v-model="min" title="Min" />\r
        <HstNumber v-model="max" title="Max" />\r
      </template>\r
    </Variant>\r
    <Variant title="Button style">\r
      <el-checkbox-group\r
        v-model="checkedCities"\r
        :size="size"\r
        @change="checkboxGroupChange"\r
      >\r
        <el-checkbox-button\r
          v-for="city in cities"\r
          :key="city"\r
          :label="city"\r
          :disabled="disabled"\r
        >\r
          {{ city }}\r
        </el-checkbox-button>\r
      </el-checkbox-group>\r
      <template #controls>\r
        <HstRadio v-model="size" :options="sizeOptions" title="Size" />\r
        <HstCheckbox v-model="disabled" title="Disable" />\r
      </template>\r
    </Variant>\r
    <Variant title="With borders">\r
      <el-checkbox\r
        label="Option1"\r
        :size="size"\r
        :border="border"\r
        :disabled="disabled"\r
        @change="checkboxChange"\r
      />\r
      <template #controls>\r
        <HstRadio v-model="size" :options="sizeOptions" title="Size" />\r
        <HstCheckbox v-model="border" title="Border" />\r
        <HstCheckbox v-model="disabled" title="Disable" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic Usage\r
Checkbox can be used alone to switch between two states.\r
\r
Define \`v-model\`(bind variable) in \`el-checkbox\`. The default value is a \`Boolean\` for single \`checkbox\`, and it becomes \`true\` when selected. Content inside the \`el-checkbox\` tag will become the description following the button of the checkbox.\r
\r
## Checkbox group\r
It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.\r
\r
\`checkbox-group\` element can manage multiple checkboxes in one group by using \`v-model\` which is bound as an \`Array\`. Inside the \`el-checkbox\` element, \`label\` is the value of the checkbox. If no content is nested in that tag, \`label\` will be rendered as the description following the button of the checkbox. \`label\` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.\r
\r
## Indeterminate\r
The \`indeterminate\` property can help you to achieve a 'check all' effect.\r
\r
## Minimum / Maximum items checked\r
The min and max properties can help you to limit the number of checked items.\r
\r
## Button style\r
Checkbox with button styles.\r
\r
You just need to change \`el-checkbox\` element into \`el-checkbox-button\` element. We also provide \`size\` attribute.\r
\r
## With borders\r
The \`border\` attribute adds a border to Checkboxes.\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormCheckboxStoryVue as default
};
