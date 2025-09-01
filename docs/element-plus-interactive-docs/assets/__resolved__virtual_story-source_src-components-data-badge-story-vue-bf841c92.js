const __resolved__virtual_storySource_srcComponentsDataBadgeStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import type { BadgeProps } from 'element-plus'\r
import { CaretBottom, Share } from '@element-plus/icons-vue'\r
\r
const currentValue = ref(12)\r
const stringValue = ref('hot')\r
const currentType = ref<BadgeProps['type']>('danger')\r
const maxValue = ref(10)\r
const isDot = ref(true)\r
\r
const badgeTypeList: Record<'label' & 'value', BadgeProps['type']>[] = [\r
  {\r
    label: 'danger',\r
    value: 'danger',\r
  },\r
  {\r
    label: 'primary',\r
    value: 'primary',\r
  },\r
  {\r
    label: 'success',\r
    value: 'success',\r
  },\r
  {\r
    label: 'warning',\r
    value: 'warning',\r
  },\r
  {\r
    label: 'info',\r
    value: 'info',\r
  },\r
]\r
<\/script>\r
\r
<template>\r
  <Story title="Data/Badge" icon="mdi:bell-badge-outline">\r
    <Variant title="Basic usage">\r
      <el-badge :value="currentValue" :type="currentType" class="item">\r
        <el-button>comments</el-button>\r
      </el-badge>\r
\r
      <el-dropdown trigger="click">\r
        <span class="el-dropdown-link">\r
          Click Me\r
          <el-icon class="el-icon--right"><caret-bottom /></el-icon>\r
        </span>\r
        <template #dropdown>\r
          <el-dropdown-menu>\r
            <el-dropdown-item class="clearfix">\r
              comments\r
              <el-badge :value="currentValue" :type="currentType" class="mark" />\r
            </el-dropdown-item>\r
          </el-dropdown-menu>\r
        </template>\r
      </el-dropdown>\r
\r
      <template #controls>\r
        <HstNumber v-model="currentValue" title="Badge Value" />\r
        <HstRadio v-model="currentType" title="Badge Type" :options="badgeTypeList" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Max value">\r
      <el-badge :value="currentValue" :max="maxValue" class="item">\r
        <el-button>comments</el-button>\r
      </el-badge>\r
\r
      <template #controls>\r
        <HstNumber v-model="currentValue" title="Badge Value" />\r
        <HstNumber v-model="maxValue" title="Max Value" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Customizations">\r
      <el-badge :value="stringValue" class="item">\r
        <el-button>replies</el-button>\r
      </el-badge>\r
\r
      <template #controls>\r
        <HstText v-model="stringValue" title="Badge Value" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Red dot">\r
      <el-badge :is-dot="isDot" class="item">\r
        <el-button class="share-button" :icon="Share" type="primary" />\r
      </el-badge>\r
\r
      <template #controls>\r
        <HstCheckbox v-model="isDot" title="Is Dot" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
Displays the amount of new messages.\r
\r
The amount is defined with \`value\` which accepts \`Number\` or \`String\`.\r
\r
## Max Value\r
\r
You can customize the max value.\r
\r
The max value is defined by property \`max\` which is a \`Number\`. Note that it only works when \`value\` is also a \`Number\`.\r
\r
## Customizations\r
\r
Displays text content other than numbers.\r
\r
When \`value\` is a \`String\`, it can display customized text.\r
\r
## Red Dot\r
\r
Use a red dot to mark content that needs to be noticed.\r
\r
Use the attribute \`is-dot\`. It is a \`Boolean\`.\r
</docs>\r
\r
<style scoped>\r
.item {\r
  margin-top: 10px;\r
  margin-right: 40px;\r
}\r
.el-dropdown {\r
  margin-top: 1.1rem;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataBadgeStoryVue as default
};
