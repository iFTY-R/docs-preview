const __resolved__virtual_storySource_srcComponentsFormRateStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ChatDotRound, ChatLineRound, ChatRound } from '@element-plus/icons-vue'\r
import type { RateProps } from 'element-plus'\r
\r
const currentRate = ref<RateProps['modelValue']>(0)\r
const maxRate = ref<RateProps['max']>(5)\r
const colors = ['#409eff', '#67c23a', '#FF9900']\r
const sizeValue = ref<RateProps['size']>('small')\r
const sizeValueOptions: { label: string; 'value': RateProps['size'] }[] = [\r
  {\r
    label: 'small',\r
    value: 'small',\r
  },\r
  {\r
    label: 'default',\r
    value: 'default',\r
  },\r
  {\r
    label: 'large',\r
    value: 'large',\r
  },\r
]\r
const allowedHalf = ref(true)\r
const auxiliaryText = ref<RateProps['texts']>(['oops', 'disappointed', 'normal', 'good', 'great'])\r
const showText = ref(true)\r
const disabled = ref(true)\r
const showScore = ref(true)\r
const clearable = ref<RateProps['clearable']>(true)\r
const icons = [ChatRound, ChatLineRound, ChatDotRound]\r
<\/script>\r
\r
<template>\r
  <Story title="Form/Rate" icon="material-symbols:star-rate-half-rounded">\r
    <Variant title="Basic Usage">\r
      <!-- <el-rate v-model="rate" /> -->\r
      <el-rate v-model="currentRate" :max="maxRate" />\r
      <template #controls>\r
        <HstSlider v-model="currentRate" title="Rate" :max="maxRate" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Sizes">\r
      <el-rate v-model="currentRate" :size="sizeValue" />\r
      <template #controls>\r
        <HstRadio v-model="sizeValue" title="Sizes" :options="sizeValueOptions" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Half-selection allowed">\r
      <el-rate v-model="currentRate" :allow-half="allowedHalf" />\r
      <template #controls>\r
        <HstCheckbox v-model="allowedHalf" title="allowedHalf" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Auxiliary text">\r
      <el-rate v-model="currentRate" :texts="auxiliaryText" :show-text="showText" />\r
      <template #controls>\r
        <HstCheckbox v-model="showText" title="showText" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Clearable">\r
      <el-rate v-model="currentRate" :clearable="clearable" />\r
      <template #controls>\r
        <HstCheckbox v-model="clearable" title="Clearable" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="More kinds of icon">\r
      <el-rate v-model="currentRate" :icons="icons" :void-icon="ChatRound" :colors="colors" />\r
    </Variant>\r
\r
    <Variant title="Readonly">\r
      <el-rate\r
        v-model="currentRate" :disabled="disabled" :show-score="showScore"\r
        score-template="{value} points"\r
      />\r
      <template #controls>\r
        <HstCheckbox v-model="disabled" title="Readonly" />\r
        <HstCheckbox v-model="showScore" title="ShowScore" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
The scores are divided into three levels by default, and the scores and emotional tendencies can be graded using an array of colors (by default, no colors are distinguished). The colors corresponding to the three levels are set using the \`colors\` property, while their corresponding two thresholds are set via \`low-threshold\` and \`high-threshold\`.\r
\r
## Sizes\r
\r
## Half-selection\r
\r
Attribute \`allow-half\` allows half stars\r
\r
## Auxiliary Text\r
\r
Expressing the corresponding score directly with auxiliary text\r
Setting the \`show-text\` property for the component will display the auxiliary text on the right-hand side. The auxiliary text can be specified for each score by setting \`texts\`. \`texts\` is an array whose length should be equal to the maximum \`max\`.\r
\r
## Clearable\r
\r
When you click the same value again, you can reset the value to 0.\r
\r
## More kinds of icons\r
\r
When there are multiple levels of ratings, different types of icons can be used to distinguish the rating levels.\r
Setting the \`icon-classes\` property allows you to customize the icons for different segments. If you pass in an array, there are 3 elements, which are the class names corresponding to the 3 segments; if you pass in an object, you can customize the segments, with the key being the segment's bounds value and the key being the corresponding class name. This example also uses \`void-icon\` to specify the class name of the icon when it is not selected.\r
\r
## Read-only\r
\r
Read-only ratings are used to display scores, allowing half-stars to appear.\r
Setting the \`disabled\` property for a component means that the component is read-only. If \`show-score\` is set in this case, the current score will be displayed on the right-hand side. In addition, you can use the attribute \`score-template\` to provide a scoring template. The template is a string containing \`{value}\`, which will be replaced with the current score.\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormRateStoryVue as default
};
