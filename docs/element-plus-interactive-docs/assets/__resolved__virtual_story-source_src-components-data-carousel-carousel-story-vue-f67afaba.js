const __resolved__virtual_storySource_srcComponentsDataCarouselCarouselStoryVue = `<script setup lang="ts">\r
import { isAttribute } from '@/utils'\r
\r
const basicUsage = reactive({\r
  trigger: 'hover',\r
  interval: 3000,\r
  height: 150,\r
  autoplay: true,\r
  arrow: 'hover',\r
  indicatorPosition: '',\r
  type: '',\r
  loop: true,\r
  direction: 'horizontal',\r
  pauseOnHover: true,\r
})\r
\r
const isCardType = computed({\r
  get: () => basicUsage.type === 'card',\r
  set: (flag) => {\r
    basicUsage.type = flag ? 'card' : ''\r
  },\r
})\r
\r
const CarouselBasicSource = computed(() => {\r
  return \`<el-carousel\r
  height="\${basicUsage.height}px"\${\r
  isAttribute(\r
basicUsage.trigger === 'click',\r
'trigger="click"')}\${\r
  isAttribute(\r
basicUsage.direction === 'vertical',\r
'direction="vertical"')}\${\r
  isAttribute(\r
!basicUsage.autoplay,\r
'autoplay="false"')}\${\r
  isAttribute(\r
basicUsage.autoplay && basicUsage.interval !== 3000,\r
\`interval="\${basicUsage.interval}"\`)}\${\r
  isAttribute(\r
basicUsage.arrow !== 'hover',\r
\`arrow="\${basicUsage.arrow}"\`)}\${\r
  isAttribute(\r
basicUsage.indicatorPosition !== '',\r
\`indicator-position="\${basicUsage.indicatorPosition}"\`)}\${\r
  isAttribute(\r
isCardType.value,\r
'type="card"')}\${\r
  isAttribute(\r
!basicUsage.loop,\r
'loop="false"')}\${\r
  isAttribute(\r
!basicUsage.pauseOnHover && basicUsage.autoplay,\r
'pause-on-hover="false"')}\r
>\r
  <el-carousel-item\r
    v-for="item in 3"\r
    :key="item"\r
  >\r
    <h3>{{ item }}</h3>\r
  </el-carousel-item>\r
</el-carousel>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Data/Carousel"\r
    icon="material-symbols:view-carousel-outline-rounded"\r
    :layout="{\r
      type: 'grid',\r
      width: 400,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="CarouselBasicSource"\r
    >\r
      <el-carousel\r
        :height="\`\${basicUsage.height}px\`"\r
        :trigger="basicUsage.trigger"\r
        :autoplay="basicUsage.autoplay"\r
        :interval="basicUsage.interval"\r
        :indicator-position="basicUsage.indicatorPosition"\r
        :arrow="basicUsage.arrow"\r
        :type="basicUsage.type"\r
        :loop="basicUsage.loop"\r
        :direction="basicUsage.direction"\r
        :pause-on-hover="basicUsage.pauseOnHover"\r
      >\r
        <el-carousel-item v-for="item in 3" :key="item">\r
          <h3\r
            class="small justify-center"\r
            text="2xl"\r
            :style="{ lineHeight: \`\${basicUsage.height}px\` }"\r
          >\r
            {{ item }}\r
          </h3>\r
        </el-carousel-item>\r
      </el-carousel>\r
      <template #controls>\r
        <HstButtonGroup\r
          v-model="basicUsage.trigger"\r
          title="Trigger"\r
          :options="[\r
            { label: 'click', value: 'click' },\r
            { label: 'hover', value: 'hover' },\r
          ]"\r
        />\r
        <HstButtonGroup\r
          v-model="basicUsage.direction"\r
          title="Direction"\r
          :options="[\r
            { label: 'horizontal', value: 'horizontal' },\r
            { label: 'vertical', value: 'vertical' },\r
          ]"\r
        />\r
        <HstCheckbox v-model="basicUsage.autoplay" title="Autoplay" />\r
        <HstCheckbox\r
          v-model="basicUsage.pauseOnHover"\r
          title="Pause On Hover"\r
        />\r
        <HstSlider\r
          v-model="basicUsage.interval"\r
          title="Interval"\r
          :min="0"\r
          :max="10000"\r
        />\r
        <HstNumber\r
          v-model="basicUsage.height"\r
          title="Height"\r
        />\r
        <HstButtonGroup\r
          v-model="basicUsage.arrow"\r
          title="Arrow"\r
          :options="[\r
            { label: 'always', value: 'always' },\r
            { label: 'hover', value: 'hover' },\r
            { label: 'never', value: 'never' },\r
          ]"\r
        />\r
        <HstButtonGroup\r
          v-model="basicUsage.indicatorPosition"\r
          title="Indicator Position"\r
          :options="[\r
            { label: 'default', value: '' },\r
            { label: 'outside', value: 'outside' },\r
            { label: 'none', value: 'none' },\r
          ]"\r
        />\r
        <HstCheckbox v-model="isCardType" title="Card Type" />\r
        <HstCheckbox v-model="basicUsage.loop" title="Loop" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
.demonstration {\r
  color: var(--el-text-color-secondary);\r
}\r
\r
.el-carousel__item h3 {\r
  color: #475669;\r
  opacity: 0.75;\r
  line-height: 150px;\r
  margin: 0;\r
  text-align: center;\r
}\r
\r
.el-carousel__item:nth-child(2n) {\r
  background-color: #99a9bf;\r
}\r
\r
.el-carousel__item:nth-child(2n + 1) {\r
  background-color: #d3dce6;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataCarouselCarouselStoryVue as default
};
