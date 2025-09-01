const __resolved__virtual_storySource_srcComponentsDataCardStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import type { CardProps } from 'element-plus'\r
\r
const header = ref('Card Name')\r
const currentDate = new Date()\r
const bodyStyle = ref<CardProps['bodyStyle']>({ padding: '0px' })\r
const currentShadow = ref<CardProps['shadow']>('always')\r
\r
const shadowTypeList: Record<'label' & 'value', CardProps['shadow']>[] = [\r
  {\r
    label: 'always',\r
    value: 'always',\r
  },\r
  {\r
    label: 'hover',\r
    value: 'hover',\r
  },\r
  {\r
    label: 'never',\r
    value: 'never',\r
  },\r
]\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Data/Card"\r
    icon="majesticons:code-block-line"\r
    :layout="{\r
      type: 'grid',\r
      width: 540,\r
    }"\r
  >\r
    <Variant title="Basic usage">\r
      <el-card class="box-card">\r
        <template #header>\r
          <div class="card-header">\r
            <span>Card name</span>\r
            <el-button class="button" text>\r
              Operation button\r
            </el-button>\r
          </div>\r
        </template>\r
        <div v-for="o in 4" :key="o" class="text item">\r
          {{ \`List item \${o}\` }}\r
        </div>\r
      </el-card>\r
    </Variant>\r
\r
    <Variant title="Simple card">\r
      <el-card class="box-card" :header="header">\r
        <div v-for="o in 4" :key="o" class="text item">\r
          {{ \`List item \${o}\` }}\r
        </div>\r
      </el-card>\r
\r
      <template #controls>\r
        <HstText v-model="header" title="Card Header" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="With images">\r
      <el-row>\r
        <el-col\r
          v-for="(o, index) in 2"\r
          :key="o"\r
          :span="8"\r
          :offset="index > 0 ? 2 : 0"\r
        >\r
          <el-card :body-style="bodyStyle">\r
            <img\r
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"\r
              class="image"\r
            >\r
            <div style="padding: 14px">\r
              <span>Yummy hamburger</span>\r
              <div class="bottom">\r
                <time class="time"> {{ currentDate }} </time>\r
                <el-button text class="button">\r
                  Operating\r
                </el-button>\r
              </div>\r
            </div>\r
          </el-card>\r
        </el-col>\r
      </el-row>\r
\r
      <template #controls>\r
        <HstJson\r
          v-model="bodyStyle"\r
          title="Body Style"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Shadow">\r
      <el-card :shadow="currentShadow">\r
        {{ currentShadow }}\r
      </el-card>\r
\r
      <template #controls>\r
        <HstRadio v-model="currentShadow" title="Shadow" :options="shadowTypeList" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
Card includes title, content and operations.\r
\r
Card is made up of \`header\` and \`body\`. \`header\` is optional, and its content distribution depends on a named slot.\r
\r
## Simple card\r
\r
The header part can be omitted.\r
\r
## With images\r
\r
Display richer content by adding some configs.\r
\r
The \`body-style\` attribute defines CSS style of custom \`body\`. This example also uses \`el-col\` for layout.\r
\r
## Shadow\r
\r
You can define when to show the card shadows\r
\r
The \`shadow\` attribute determines when the card shadows are displayed. It can be \`always\`, \`hover\` or \`never\`.\r
</docs>\r
\r
<style scoped>\r
.card-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.text {\r
  font-size: 14px;\r
}\r
\r
.item {\r
  margin-bottom: 18px;\r
}\r
\r
.box-card {\r
  width: 480px;\r
}\r
\r
.time {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.bottom {\r
  margin-top: 13px;\r
  line-height: 12px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.button {\r
  padding: 0;\r
  min-height: auto;\r
}\r
\r
.image {\r
  width: 100%;\r
  display: block;\r
}\r
\r
.el-card {\r
  margin: 10px;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataCardStoryVue as default
};
