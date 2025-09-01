const __resolved__virtual_storySource_srcComponentsNavigationDropdownDropdownStoryVue = `<script setup lang="ts">\r
import type { TypeOptions } from '@/constants/typeOptions'\r
import typeOptions from '@/constants/typeOptions'\r
import sizeOptions from '@/constants/sizeOptions'\r
import type { PlacementOptions } from '@/constants/placementOptions'\r
import placementOptions from '@/constants/placementOptions'\r
\r
const basicData = reactive({\r
  split: true,\r
  type: '' as TypeOptions,\r
  size: 'default',\r
  disabled: false,\r
  placement: 'bottom' as PlacementOptions,\r
  trigger: 'hover' as 'hover' | 'click',\r
  hideOnClick: true,\r
  showTimeout: 250,\r
  hideTimeout: 150,\r
  item: {\r
    disabled: true,\r
    divided: true,\r
  },\r
})\r
\r
const basicSource = computed(() => {\r
  return \`<el-dropdown\${isAttribute(\r
    basicData.split,\r
    ':split-button="true"',\r
  )}\${isAttribute(\r
    basicData.split && basicData.type !== '',\r
    \`type="\${basicData.type}"\`,\r
  )}\${isAttribute(\r
    basicData.split && basicData.size !== 'default',\r
    \`size="\${basicData.size}"\`,\r
  )}\${isAttribute(\r
    basicData.disabled,\r
    ':disabled="true"',\r
  )}\${isAttribute(\r
    basicData.placement !== 'bottom',\r
    \`placement="\${basicData.placement}"\`,\r
  )}\${isAttribute(\r
    basicData.trigger !== 'hover',\r
    \`trigger="\${basicData.trigger}"\`,\r
  )}\${isAttribute(\r
    basicData.trigger === 'hover' && basicData.showTimeout !== 250,\r
    \`:show-timeout="\${basicData.showTimeout}"\`,\r
  )}\${isAttribute(\r
    basicData.trigger === 'hover' && basicData.hideTimeout !== 150,\r
    \`:hide-timeout="\${basicData.hideTimeout}"\`,\r
  )}\${isAttribute(\r
    !basicData.hideOnClick,\r
    ':hide-on-click="false"',\r
  )}\r
>\r
  Dropdown List\r
  <template #dropdown>\r
    <el-dropdown-menu>\r
      <el-dropdown-item>Action 1</el-dropdown-item>\r
      <el-dropdown-item>Action 2</el-dropdown-item>\r
      <el-dropdown-item>Action 3</el-dropdown-item>\r
      <el-dropdown-item\${basicData.item.disabled ? ' disabled' : ''}>\r
        Action 4\r
      </el-dropdown-item>\r
      <el-dropdown-item\${basicData.item.divided ? ' divided' : ''}>\r
        Action 5\r
      </el-dropdown-item>\r
    </el-dropdown-menu>\r
  </template>\r
</el-dropdown>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Navigation/Dropdown" icon="carbon:list-dropdown">\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-dropdown\r
        :split-button="basicData.split"\r
        :type="basicData.type"\r
        :size="basicData.size"\r
        :disabled="basicData.disabled"\r
        :placement="basicData.placement"\r
        :trigger="basicData.trigger"\r
        :hide-on-click="basicData.hideOnClick"\r
        :show-timeout="basicData.showTimeout"\r
        :hide-timeout="basicData.hideTimeout"\r
      >\r
        Dropdown List\r
        <template #dropdown>\r
          <el-dropdown-menu>\r
            <el-dropdown-item>Action 1</el-dropdown-item>\r
            <el-dropdown-item>Action 2</el-dropdown-item>\r
            <el-dropdown-item>Action 3</el-dropdown-item>\r
            <el-dropdown-item :disabled="basicData.item.disabled">\r
              Action 4\r
            </el-dropdown-item>\r
            <el-dropdown-item :divided="basicData.item.divided">\r
              Action 5\r
            </el-dropdown-item>\r
          </el-dropdown-menu>\r
        </template>\r
      </el-dropdown>\r
      <template #controls>\r
        <HstCheckbox\r
          v-model="basicData.split"\r
          title="split-button"\r
        />\r
        <div :style="useElDisplay(basicData.split, 'block')">\r
          <HstSelect\r
            v-model="basicData.type"\r
            :options="typeOptions"\r
            title="type"\r
          />\r
          <HstSelect\r
            v-model="basicData.size"\r
            :options="sizeOptions"\r
            title="size"\r
          />\r
        </div>\r
        <HstCheckbox\r
          v-model="basicData.disabled"\r
          title="disabled"\r
        />\r
        <HstSelect\r
          v-model="basicData.placement"\r
          :options="placementOptions"\r
          title="placement"\r
        />\r
        <HstSelect\r
          v-model="basicData.trigger"\r
          :options="['hover', 'click']"\r
          title="trigger"\r
        />\r
        <div :style="useElDisplay(basicData.trigger === 'hover', 'block')">\r
          <HstInputNumber\r
            v-model="basicData.showTimeout"\r
            title="showTimeout"\r
          />\r
          <HstInputNumber\r
            v-model="basicData.hideTimeout"\r
            title="hideTimeout"\r
          />\r
        </div>\r
        <HstCheckbox\r
          v-model="basicData.hideOnClick"\r
          title="hideOnClick"\r
        />\r
        <HstDivider content="dropdown-item" />\r
        <HstCheckbox\r
          v-model="basicData.item.disabled"\r
          title="item disabled"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.item.divided"\r
          title="item divided"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsNavigationDropdownDropdownStoryVue as default
};
