const __resolved__virtual_storySource_srcComponentsFormInputStoryVue = `<script setup lang="ts">\r
import { computed, ref } from 'vue'\r
import { Calendar, Search } from '@element-plus/icons-vue'\r
import type { InputProps } from 'element-plus'\r
\r
const input1 = ref('')\r
const input2 = ref('')\r
const input3 = ref('')\r
const input4 = ref('')\r
const input5 = ref('')\r
const input6 = ref('')\r
const input7 = ref('')\r
const input8 = ref('')\r
const input9 = ref('')\r
const input10 = ref('')\r
const input11 = ref('')\r
const input12 = ref('')\r
const textarea = ref('')\r
const textarea1 = ref('')\r
const textarea2 = ref('')\r
const select = ref('')\r
const text = ref('')\r
const isDisabled = ref(true)\r
const isClearable = ref(true)\r
const showPassword = ref(true)\r
const isAutoSize = ref(true)\r
const withIcon = ref('attributes')\r
const rows = ref(2)\r
const autoSizeConfig = ref({ minRows: 2, maxRows: 4 })\r
const size = ref('default')\r
const maxlength = ref(10)\r
const inputSizeList: Record<'label' & 'value', InputProps['size']>[] = [\r
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
const withIconList: Array<{ label: string; value: string }> = [\r
  {\r
    label: 'use slot',\r
    value: 'slot',\r
  },\r
  {\r
    label: 'use attributes',\r
    value: 'attributes',\r
  },\r
]\r
\r
const useSlot = computed(() => withIcon.value === 'slot')\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Form/Input"\r
    icon="iconoir:input-field"\r
    :layout="{ type: 'grid', width: 500 }"\r
  >\r
    <Variant title="Basic Usage">\r
      <el-input v-model="input1" placeholder="Please input" />\r
    </Variant>\r
    <Variant title="Disabled">\r
      <el-input v-model="input2" :disabled="isDisabled" placeholder="Please input" />\r
      <template #controls>\r
        <HstCheckbox v-model="isDisabled" title="Disabled" />\r
      </template>\r
    </Variant>\r
    <Variant title="Clearable">\r
      <el-input v-model="input3" :clearable="isClearable" placeholder="Please input" />\r
      <template #controls>\r
        <HstCheckbox v-model="isClearable" title="Clearable" />\r
      </template>\r
    </Variant>\r
    <Variant title="Formatter">\r
      <el-input\r
        v-model="input4"\r
        placeholder="Please input"\r
        :formatter="(value:string) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"\r
        :parser="(value:string) => value.replace(/\\$\\s?|(,*)/g, '')"\r
      />\r
    </Variant>\r
    <Variant title="Password box">\r
      <el-input\r
        v-model="input5"\r
        type="password"\r
        placeholder="Please input password"\r
        :show-password="showPassword"\r
      />\r
      <template #controls>\r
        <HstCheckbox v-model="showPassword" title="ShowPassword" />\r
      </template>\r
    </Variant>\r
    <Variant title="Input with icon">\r
      <template v-if="useSlot">\r
        <el-input v-model="input6" placeholder="Pick a date">\r
          <template #suffix>\r
            <el-icon class="el-input__icon">\r
              <calendar />\r
            </el-icon>\r
          </template>\r
        </el-input>\r
        <el-input v-model="input7" class="mt-4" placeholder="Type something">\r
          <template #prefix>\r
            <el-icon class="el-input__icon">\r
              <search />\r
            </el-icon>\r
          </template>\r
        </el-input>\r
      </template>\r
      <template v-else>\r
        <el-input v-model="input6" placeholder="Pick a date" :suffix-icon="Calendar" />\r
        <el-input v-model="input7" class="mt-4" placeholder="Type something" :prefix-icon="Search" />\r
      </template>\r
      <template #controls>\r
        <HstSelect\r
          v-model="withIcon"\r
          title="With Icon"\r
          :options="withIconList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Textarea">\r
      <el-input\r
        v-model="textarea"\r
        :rows="rows"\r
        type="textarea"\r
        placeholder="Please input"\r
      />\r
      <template #controls>\r
        <HstNumber v-model="rows" title="Rows" />\r
      </template>\r
    </Variant>\r
    <Variant title="Autosize Textarea">\r
      <el-input\r
        v-model="textarea1"\r
        autosize\r
        type="textarea"\r
        placeholder="Please input"\r
      />\r
      <div style="margin: 20px 0" />\r
      <el-input\r
        v-model="textarea2"\r
        :autosize="autoSizeConfig"\r
        type="textarea"\r
        placeholder="Please input"\r
      />\r
      <template #controls>\r
        <HstCheckbox v-model="isAutoSize" title="AutoSize" />\r
        <HstNumber v-model="autoSizeConfig.minRows" title="minRows" />\r
        <HstNumber v-model="autoSizeConfig.maxRows" title="maxRows" />\r
      </template>\r
    </Variant>\r
    <Variant title="Mixed input">\r
      <div>\r
        <el-input v-model="input8" placeholder="Please input">\r
          <template #prepend>\r
            Http://\r
          </template>\r
        </el-input>\r
      </div>\r
      <div class="mt-4">\r
        <el-input v-model="input9" placeholder="Please input">\r
          <template #append>\r
            .com\r
          </template>\r
        </el-input>\r
      </div>\r
      <div class="mt-4">\r
        <el-input\r
          v-model="input10"\r
          placeholder="Please input"\r
          class="input-with-select"\r
        >\r
          <template #prepend>\r
            <el-select v-model="select" placeholder="Select" style="width: 115px">\r
              <el-option label="Restaurant" value="1" />\r
              <el-option label="Order No." value="2" />\r
              <el-option label="Tel" value="3" />\r
            </el-select>\r
          </template>\r
          <template #append>\r
            <el-button :icon="Search" />\r
          </template>\r
        </el-input>\r
      </div>\r
      <div class="mt-4">\r
        <el-input\r
          v-model="input11"\r
          placeholder="Please input"\r
          class="input-with-select"\r
        >\r
          <template #prepend>\r
            <el-button :icon="Search" />\r
          </template>\r
          <template #append>\r
            <el-select v-model="select" placeholder="Select" style="width: 115px">\r
              <el-option label="Restaurant" value="1" />\r
              <el-option label="Order No." value="2" />\r
              <el-option label="Tel" value="3" />\r
            </el-select>\r
          </template>\r
        </el-input>\r
      </div>\r
    </Variant>\r
    <Variant title="Sizes">\r
      <el-input\r
        v-model="input12"\r
        :size="size"\r
        placeholder="Please Input"\r
      />\r
      <template #controls>\r
        <HstSelect\r
          v-model="size"\r
          title="Size"\r
          :options="inputSizeList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Limit length">\r
      <el-input\r
        v-model="text"\r
        :maxlength="maxlength"\r
        placeholder="Please input"\r
        show-word-limit\r
        type="text"\r
      />\r
      <div style="margin: 20px 0" />\r
      <el-input\r
        v-model="textarea"\r
        :maxlength="maxlength"\r
        placeholder="Please input"\r
        show-word-limit\r
        type="textarea"\r
      />\r
      <template #controls>\r
        <HstNumber v-model="maxlength" title="Limit length" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style>\r
.mt-4{\r
  margin-top: 4px;\r
}\r
</style>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
Input is a controlled component, it **always shows Vue binding value**.\r
\r
Under normal circumstances, \`input\` event should be handled. Its handler should update component's binding value (or use \`v-model\`). Otherwise, input box's value will not change.\r
\r
Do not support \`v-model\` modifiers.\r
\r
## Disabled\r
\r
Disable the Input with the \`disabled\` attribute.\r
\r
## Clearable\r
\r
Make the Input clearable with the \`clearable\` attribute.\r
\r
## Formatter\r
\r
Display value within it's situation with \`formatter\`, and we usually use \`parser\` at the same time.\r
\r
## Password box\r
\r
Make a toggle-able password Input with the \`show-password\` attribute.\r
\r
## Input with icon\r
\r
Add an icon to indicate input type.\r
\r
To add icons in Input, you can simply use \`prefix-icon\` and \`suffix-icon\` attributes. Also, the \`prefix\` and \`suffix\` named slots works as well.\r
\r
## Textarea\r
\r
Resizable for entering multiple lines of text information. Add attribute \`type="textarea"\` to change \`input\` into native \`textarea\`.\r
\r
Control the height by setting the \`rows\` prop.\r
\r
## Autosize Textarea\r
\r
Setting the \`autosize\` prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to \`autosize\` to specify the minimum and maximum number of lines the textarea can automatically adjust.\r
\r
## Mixed input\r
\r
Prepend or append an element, generally a label or a button.\r
\r
Use \`slot\` to distribute elements that prepend or append to Input.\r
\r
## Sizes\r
\r
Add \`size\` attribute to change the size of Input. In addition to the default size, there are two other options: \`large\`, \`small\`.\r
\r
## Limit length\r
\r
\`maxlength\` and \`minlength\` attributes of input, they declare a limit on the number of characters a user can input. The "number of characters" is measured using JavaScript string length.Setting the \`maxlength\` prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting \`show-word-limit\` to \`true\` at the same time.\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormInputStoryVue as default
};
