const __resolved__virtual_storySource_srcComponentsBasicLayoutLayoutStoryVue = `<script setup lang="ts">\r
import { justifyOptions } from './constants'\r
\r
// Basic Usage\r
const basicData = reactive({\r
  span: 6,\r
  gutter: 0,\r
  offset: 0,\r
  justify: 'start',\r
  align: 'top',\r
  push: 0,\r
  pull: 0,\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Basic/Layout"\r
    icon="lucide:layout-dashboard"\r
    :layout="{\r
      type: 'grid',\r
      width: 600,\r
    }"\r
  >\r
    <Variant title="Basic Usage">\r
      <el-row\r
        :gutter="basicData.gutter"\r
        :justify="basicData.justify"\r
      >\r
        <el-col\r
          v-for="item in 4"\r
          :key="item"\r
          :span="basicData.span"\r
          :offset="basicData.offset"\r
          :push="basicData.push"\r
          :pull="basicData.pull"\r
        >\r
          <div\r
            class="grid-item"\r
            :class="item % 2 ? 'grid-item-dark' : 'grid-item-light'"\r
          />\r
        </el-col>\r
      </el-row>\r
      <template #controls>\r
        <HstSlider\r
          v-model="basicData.gutter"\r
          title="Gutter"\r
          :min="0"\r
          :max="60"\r
        />\r
        <HstSlider\r
          v-model="basicData.span"\r
          title="Span"\r
          :min="0"\r
          :max="24"\r
        />\r
        <HstSlider\r
          v-model="basicData.offset"\r
          title="Offset"\r
          :min="0"\r
          :max="24"\r
        />\r
        <HstSlider\r
          v-model="basicData.push"\r
          title="Push"\r
          :min="0"\r
          :max="24"\r
        />\r
        <HstSlider\r
          v-model="basicData.pull"\r
          title="Pull"\r
          :min="0"\r
          :max="24"\r
        />\r
        <HstRadio\r
          v-model="basicData.justify"\r
          title="Justify"\r
          :options="justifyOptions"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style lang="scss">\r
.el-col {\r
  margin-bottom: 10px;\r
}\r
\r
.grid-item{\r
  min-height: 36px;\r
}\r
\r
.grid-item-light {\r
  background: #d3dce6;\r
}\r
.grid-item-dark {\r
  background: #e5e9f2;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsBasicLayoutLayoutStoryVue as default
};
