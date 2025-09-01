const __resolved__virtual_storySource_srcComponentsDataProgressStoryVue = `<script setup lang="ts">\r
import { onMounted, ref } from 'vue'\r
import { Check, Minus, Plus } from '@element-plus/icons-vue'\r
import type { ProgressProps } from 'element-plus'\r
\r
const currentPercentage = ref(50)\r
const currentInside = ref(true)\r
const progressPercentageList: { label: string; value: string }[] = [\r
  {\r
    label: 'default',\r
    value: '50',\r
  },\r
  {\r
    label: 'Full',\r
    value: '100',\r
  },\r
]\r
\r
const currentStatus = ref('')\r
const progressStatusList: { label: string; value: ProgressProps['status'] }[] = [\r
  {\r
    label: 'default',\r
    value: '',\r
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
    label: 'exception',\r
    value: 'exception',\r
  },\r
]\r
\r
const progressType = ref('line')\r
const progressTypeList: { label: string; value: string }[] = [\r
  {\r
    label: 'default',\r
    value: 'line',\r
  },\r
  {\r
    label: 'circle',\r
    value: 'circle',\r
  },\r
  {\r
    label: 'dashboard',\r
    value: 'dashboard',\r
  },\r
]\r
\r
const customColor = ref('#409eff')\r
\r
const customColors = [\r
  { color: '#f56c6c', currentPercentage: 20 },\r
  { color: '#e6a23c', currentPercentage: 40 },\r
  { color: '#5cb87a', currentPercentage: 60 },\r
  { color: '#1989fa', currentPercentage: 80 },\r
  { color: '#6f7ad3', currentPercentage: 100 },\r
]\r
\r
function customColorMethod(currentPercentage: number) {\r
  if (currentPercentage < 30)\r
    return '#909399'\r
\r
  if (currentPercentage < 70)\r
    return '#e6a23c'\r
  return '#67c23a'\r
}\r
function increase() {\r
  currentPercentage.value += 10\r
  if (currentPercentage.value > 100)\r
    currentPercentage.value = 100\r
}\r
function decrease() {\r
  currentPercentage.value -= 10\r
  if (currentPercentage.value < 0)\r
    currentPercentage.value = 0\r
}\r
\r
const percentage2 = ref(0)\r
\r
onMounted(() => {\r
  setInterval(() => {\r
    percentage2.value = (percentage2.value % 100) + 10\r
  }, 500)\r
})\r
\r
const indeterminate = ref(true)\r
<\/script>\r
\r
<template>\r
  <Story title="Data/Progress" icon="carbon:progress-bar-round">\r
    <Variant title="Linear progress bar">\r
      <el-progress :percentage="currentPercentage" :status="currentStatus" />\r
      <template #controls>\r
        <HstRadio v-model="currentPercentage" title="Progress percentage" :options="progressPercentageList" />\r
        <HstRadio v-model="currentStatus" title="Progress Status" :options="progressStatusList" />\r
      </template>\r
    </Variant>\r
    <Variant title="Internal percentage">\r
      <el-progress style="margin-bottom: 15px;" :text-inside="currentInside" :stroke-width="26" :percentage="70" :status="currentStatus" />\r
      <el-progress style="margin-bottom: 15px;" :text-inside="currentInside" :stroke-width="24" :percentage="100" :status="currentStatus" />\r
      <el-progress style="margin-bottom: 15px;" :text-inside="currentInside" :stroke-width="22" :percentage="80" :status="currentStatus" />\r
      <el-progress style="margin-bottom: 15px;" :text-inside="currentInside" :stroke-width="20" :percentage="50" :status="currentStatus" />\r
      <template #controls>\r
        <HstCheckbox v-model="currentInside" title="Internal" />\r
        <HstRadio v-model="currentStatus" title="Progress Status" :options="progressStatusList" />\r
      </template>\r
    </Variant>\r
    <Variant title="Custom color">\r
      <el-progress style="margin-bottom: 15px;" :percentage="currentPercentage" :color="customColor" />\r
      <el-progress style="margin-bottom: 15px;" :percentage="currentPercentage" :color="customColorMethod" />\r
      <el-progress style="margin-bottom: 15px;" :percentage="currentPercentage" :color="customColors" />\r
      <el-progress style="margin-bottom: 15px;" :percentage="currentPercentage" :color="customColors" />\r
      <div>\r
        <el-button-group>\r
          <el-button :icon="Minus" @click="decrease" />\r
          <el-button :icon="Plus" @click="increase" />\r
        </el-button-group>\r
      </div>\r
    </Variant>\r
    <Variant title="Circular progress bar" class="demo-type">\r
      <el-progress style="margin-bottom: 15px;" :percentage="0" :type="progressType" />\r
      <el-progress style="margin-bottom: 15px;" :percentage="25" :type="progressType" />\r
      <el-progress style="margin-bottom: 15px;" :percentage="100" :type="progressType" />\r
      <el-progress style="margin-bottom: 15px;" :percentage="70" :type="progressType" />\r
      <el-progress style="margin-bottom: 15px;" :percentage="50" :type="progressType" />\r
      <template #controls>\r
        <HstRadio v-model="progressType" title="Progress type" :options="progressTypeList" />\r
      </template>\r
    </Variant>\r
    <Variant title="Dashboard progress bar" class="demo-type">\r
      <el-progress type="dashboard" :percentage="currentPercentage" :color="customColors" />\r
      <el-progress type="dashboard" :percentage="percentage2" :color="customColors" />\r
      <div>\r
        <el-button-group>\r
          <el-button :icon="Minus" @click="decrease" />\r
          <el-button :icon="Plus" @click="increase" />\r
        </el-button-group>\r
      </div>\r
    </Variant>\r
    <Variant title="Customized content" class="demo-type">\r
      <el-progress :percentage="50">\r
        <el-button text>\r
          Content\r
        </el-button>\r
      </el-progress>\r
      <el-progress\r
        :text-inside="currentInside"\r
        :stroke-width="20"\r
        :percentage="50"\r
        status="exception"\r
      >\r
        <span>Content</span>\r
      </el-progress>\r
      <el-progress type="circle" :percentage="100" status="success">\r
        <el-button type="success" :icon="Check" circle />\r
      </el-progress>\r
      <el-progress type="dashboard" :percentage="80">\r
        <template #default="{ percentage }">\r
          <span class="percentage-value">{{ percentage }}%</span>\r
          <span class="percentage-label">Progressing</span>\r
        </template>\r
      </el-progress>\r
    </Variant>\r
    <Variant title="Indeterminate progress" class="demo-type">\r
      <el-progress :percentage="50" :indeterminate="indeterminate" />\r
      <el-progress :percentage="100" :indeterminate="indeterminate" />\r
      <el-progress\r
        :percentage="100"\r
        status="success"\r
        :indeterminate="indeterminate"\r
        :duration="5"\r
      />\r
      <el-progress\r
        :percentage="100"\r
        status="warning"\r
        :indeterminate="indeterminate"\r
        :duration="1"\r
      />\r
      <el-progress :percentage="50" status="exception" :indeterminate="indeterminate" />\r
    </Variant>\r
    <template #controls>\r
      <HstCheckbox v-model="indeterminate" title="indeterminate" />\r
    </template>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
  ## Linear progress bar\r
\r
  Use percentage attribute to set the percentage. It's required and must be between 0-100. You can custom text format by setting format.\r
\r
  ## Internal percentage\r
\r
  In this case the percentage takes no additional space.\r
\r
  stroke-width attribute decides the width of progress bar, and use text-inside attribute to put description inside the progress bar.\r
\r
  ## Custom color\r
\r
  You can use color attr to set the progress bar color. it accepts color string, function, or array.\r
\r
  ## Circular progress bar\r
\r
  You can specify type attribute to circle to use circular progress bar, and use width attribute to change the size of circle.\r
\r
  ## Dashboard progress bar\r
\r
  You also can specify type attribute to dashboard to use dashboard progress bar.\r
\r
  ## Customized content\r
\r
  Use default slot to add customized content.\r
\r
  ## Indeterminate progress\r
\r
  Use indeterminate attribute to set indeterminate progress, with duration to control the animation duration.\r
</docs>\r
\r
<style scoped>\r
.demo-type {\r
  display: flex;\r
  justify-content: space-around;\r
}\r
\r
.percentage-value {\r
  display: block;\r
  margin-top: 10px;\r
  font-size: 28px;\r
}\r
.percentage-label {\r
  display: block;\r
  margin-top: 10px;\r
  font-size: 12px;\r
}\r
.demo-progress .el-progress--line {\r
  margin-bottom: 15px;\r
  width: 350px;\r
}\r
.demo-progress .el-progress--circle {\r
  margin-right: 15px;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataProgressStoryVue as default
};
