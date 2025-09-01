const __resolved__virtual_storySource_srcComponentsDataCollapseCollapseStoryVue = `<script setup lang="ts">\r
import { isAttribute } from '@/utils'\r
\r
const activeNames = ref(['1'])\r
const accordion = ref(false)\r
const firstCollapseItem = reactive({\r
  title: 'Consistency',\r
  disabled: false,\r
})\r
const secondCollapseItem = reactive({\r
  title: 'Feedback',\r
  disabled: false,\r
})\r
const source = computed(() => {\r
  return \`<script setup lang="ts">\r
const activeNames = ref(['1'])\r
<\\/script>\r
\r
<template>\r
    <el-collapse v-model="activeNames">\r
      <el-collapse-item\r
        title="\${firstCollapseItem.title}"\r
        name="1"\${\r
        isAttribute(\r
    firstCollapseItem.disabled,\r
    '      disabled',\r
)}\r
      >\r
        Consistent with real life: in line with the process and logic of real\r
        life, and comply with languages and habits that the users are used to;\r
      </el-collapse-item>\r
      <el-collapse-item\r
        title="\${firstCollapseItem.title}"\r
        name="2"\${\r
        isAttribute(\r
    firstCollapseItem.disabled,\r
    '      disabled',\r
)}\r
      >\r
        Operation feedback: enable the users to clearly perceive their\r
        operations by style updates and interactive effects;\r
      </el-collapse-item>\r
    </el-collapse>\r
</template>\r
\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Data/Collapse" icon="mdi:collapse-all">\r
    <Variant\r
      title="Basic Usage"\r
      :source="source"\r
    >\r
      <el-collapse\r
        v-model="activeNames"\r
        :accordion="accordion"\r
      >\r
        <el-collapse-item\r
          :title="firstCollapseItem.title"\r
          :disabled="firstCollapseItem.disabled"\r
          name="1"\r
        >\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </el-collapse-item>\r
        <el-collapse-item\r
          :title="secondCollapseItem.title"\r
          :disabled="secondCollapseItem.disabled"\r
          name="2"\r
        >\r
          Operation feedback: enable the users to clearly perceive their\r
          operations by style updates and interactive effects;\r
        </el-collapse-item>\r
      </el-collapse>\r
      <template #controls>\r
        <HstCheckbox v-model="accordion" title="Accordion" />\r
        <el-divider border-style="dotted" content-position="left">\r
          <span>First Collapse Item</span>\r
        </el-divider>\r
        <HstText v-model="firstCollapseItem.title" title="Title" />\r
        <HstCheckbox v-model="firstCollapseItem.disabled" title="Disable" />\r
        <el-divider border-style="dotted" content-position="left">\r
          <span>Second Collapse Item</span>\r
        </el-divider>\r
        <HstText v-model="secondCollapseItem.title" title="Title" />\r
        <HstCheckbox v-model="secondCollapseItem.disabled" title="Disable" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataCollapseCollapseStoryVue as default
};
