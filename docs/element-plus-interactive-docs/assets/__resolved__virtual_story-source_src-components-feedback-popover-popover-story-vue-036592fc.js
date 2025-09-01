const __resolved__virtual_storySource_srcComponentsFeedbackPopoverPopoverStoryVue = `<script setup lang="ts">\r
import type { PopoverProps } from 'element-plus'\r
import placementOptions from '@/constants/placementOptions'\r
\r
const basicData = reactive({\r
  effect: 'dark',\r
  content: 'content',\r
  placement: 'bottom' as PopoverProps['placement'],\r
  visible: null as PopoverProps['visible'],\r
  disabled: false,\r
  offset: 0,\r
  showAfter: 0,\r
  showArrow: true,\r
  hideAfter: 0,\r
  enterable: true,\r
  trigger: 'hover' as PopoverProps['trigger'],\r
})\r
\r
const basicSource = computed(() => {\r
  return \`<el-popover\${isAttribute(\r
    basicData.effect !== 'dark',\r
    'effect="light"',\r
  )}\${isAttribute(\r
    basicData.content !== '',\r
    \`content="\${basicData.content}"\`,\r
  )}\${isAttribute(\r
    basicData.placement !== 'bottom',\r
    \`placement="\${basicData.placement}"\`,\r
  )}\${isAttribute(\r
    basicData.visible !== null,\r
    \`:visible="\${basicData.visible}"\`,\r
  )}\${isAttribute(\r
    basicData.disabled,\r
    'disabled',\r
  )}\${isAttribute(\r
    basicData.offset !== 0,\r
    \`:offset="\${basicData.offset}"\`,\r
  )}\${isAttribute(\r
    basicData.showAfter !== 0,\r
    \`:show-after="\${basicData.showAfter}"\`,\r
  )}\${isAttribute(\r
    !basicData.showArrow,\r
    ':show-arrow="false"',\r
  )}\${isAttribute(\r
    basicData.hideAfter !== 0,\r
    \`:hide-after="\${basicData.hideAfter}"\`,\r
  )}\${isAttribute(\r
    !basicData.enterable,\r
    ':enterable="false"',\r
  )}\${isAttribute(\r
    basicData.trigger !== 'hover',\r
    \`trigger="\${basicData.trigger}"\`,\r
  )}\r
>\r
  <template #reference>\r
    <el-button>el-popover</el-button>\r
  </template>\r
</el-popover>\`\r
})\r
<\/script>\r
\r
<!-- icon from https://icones.js.org/collection/all?s=popover -->\r
<template>\r
  <Story title="Feedback/Popover" icon="mdi-light:tooltip-text">\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-popover\r
        :effect="basicData.effect"\r
        :content="basicData.content"\r
        :placement="basicData.placement"\r
        :visible="basicData.visible"\r
        :disabled="basicData.disabled"\r
        :offset="basicData.offset"\r
        :show-after="basicData.showAfter"\r
        :show-arrow="basicData.showArrow"\r
        :hide-after="basicData.hideAfter"\r
        :enterable="basicData.enterable"\r
        :trigger="basicData.trigger"\r
      >\r
        <template #reference>\r
          <el-button>\r
            el-popover\r
          </el-button>\r
        </template>\r
      </el-popover>\r
      <template #controls>\r
        <HstButtonGroup\r
          v-model="basicData.effect" title="effetc"\r
          :options="[\r
            {\r
              value: 'light',\r
              label: 'light',\r
            },\r
            {\r
              value: 'dark',\r
              label: 'dark',\r
            },\r
          ]"\r
        />\r
        <HstText\r
          v-model="basicData.content"\r
          title="content"\r
        />\r
        <HstSelect\r
          v-model="basicData.placement" title="placement"\r
          :options="placementOptions"\r
        />\r
        <HstCheckbox v-model="basicData.disabled" title="disabled" />\r
        <HstButtonGroup\r
          v-model="basicData.visible"\r
          :style="useElDisplay(!basicData.disabled)"\r
          title="visible"\r
          :options="[\r
            {\r
              value: true,\r
              label: 'true',\r
            },\r
            {\r
              value: false,\r
              label: 'false',\r
            },\r
            {\r
              value: null,\r
              label: 'null',\r
            },\r
          ]"\r
        />\r
        <HstNumber v-model="basicData.offset" title="offset" />\r
        <HstNumber v-model="basicData.showAfter" title="show-after" />\r
        <HstNumber v-model="basicData.hideAfter" title="hide-after" />\r
        <HstCheckbox v-model="basicData.showArrow" title="show-arrow" />\r
        <HstCheckbox v-model="basicData.enterable" title="enterable" />\r
        <HstSelect\r
          v-model="basicData.trigger"\r
          title="trigger"\r
          :options="[\r
            {\r
              value: 'hover',\r
              label: 'hover',\r
            },\r
            {\r
              value: 'focus',\r
              label: 'focus',\r
            },\r
            {\r
              value: 'click',\r
              label: 'click',\r
            },\r
          ]"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFeedbackPopoverPopoverStoryVue as default
};
