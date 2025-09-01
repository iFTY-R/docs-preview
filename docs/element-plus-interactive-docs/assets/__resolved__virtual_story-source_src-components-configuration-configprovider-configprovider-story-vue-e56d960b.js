const __resolved__virtual_storySource_srcComponentsConfigurationConfigproviderConfigproviderStoryVue = `<script setup lang="ts">\r
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'\r
import en from 'element-plus/dist/locale/en.mjs'\r
\r
const language = ref('en')\r
const locale = computed(() => (language.value === 'zhCn' ? zhCn : en))\r
\r
const basicSource = computed(() => {\r
  return \`<script lang="ts" setup>\r
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'\r
import en from 'element-plus/dist/locale/en.mjs'\r
<\\/script>\r
\r
<el-config-provider locale="\${language.value}">\r
  <el-table :data="[]" />\r
  <el-pagination :total="5" />\r
</el-config-provider>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Configuration/ConfigProvider" icon="icon-park-outline:config">\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-config-provider\r
        :locale="locale"\r
      >\r
        <el-table :data="[]" />\r
        <el-pagination :total="5" />\r
      </el-config-provider>\r
      <template #controls>\r
        <HstButtonGroup\r
          v-model="language"\r
          title="Language"\r
          :options="[\r
            { label: 'zhCn', value: 'zhCn' },\r
            { label: 'en', value: 'en' },\r
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
  __resolved__virtual_storySource_srcComponentsConfigurationConfigproviderConfigproviderStoryVue as default
};
