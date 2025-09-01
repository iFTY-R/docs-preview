const __resolved__virtual_storySource_srcComponentsDataCalendarCalendarStoryVue = `<script setup lang="ts">\r
const value = ref(new Date())\r
const range = ref([new Date(), new Date()])\r
const basicSource = computed(() => {\r
  return \`<script lang="ts" setup>\r
import { ref } from 'vue'\r
const value = ref(new Date())\r
<\\/script>\r
\r
<template>\r
  <el-calendar v-model="value" />\r
</template>\r
\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Data/Calendar"\r
    icon="ph:calendar-light"\r
    :layout="{\r
      type: 'grid',\r
      width: 600,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
      :range="range"\r
    >\r
      <el-calendar v-model="value" />\r
      <template #controls>\r
        <!--  -->\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataCalendarCalendarStoryVue as default
};
