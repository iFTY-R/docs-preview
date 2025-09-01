const __resolved__virtual_storySource_srcComponentsNavigationStepsStepsStoryVue = `<script setup lang="ts">\r
import { stateOptions } from './constants'\r
\r
const basicData = reactive({\r
  active: 0,\r
  direction: 'horizontal',\r
  processStatus: 'process',\r
  finishStatus: 'finish',\r
  alignCenter: false,\r
  simple: false,\r
})\r
\r
const basicDataTitles = reactive({\r
  step1: 'step 1',\r
  step2: 'step 2',\r
  step3: 'step 3',\r
})\r
\r
const basicDatadescriptions = reactive({\r
  step1: '',\r
  step2: '',\r
  step3: '',\r
})\r
\r
const basicSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { ref } from 'vue'\r
const active = ref(0)\r
<\\/script>\r
\r
<el-steps\r
  v-model="active"\${isAttribute(\r
    basicData.simple,\r
    'simple',\r
  )}\${isAttribute(\r
    basicData.alignCenter && !basicData.simple,\r
    'align-center',\r
  )}\${isAttribute(\r
    basicData.direction === 'vertical' && !basicData.simple,\r
    'direction="vertical"',\r
  )}\${isAttribute(\r
    basicData.processStatus !== 'process',\r
    \`process-status="\${basicData.processStatus}"\`,\r
  )}\${isAttribute(\r
    basicData.finishStatus !== 'finish',\r
    \`finish-status="\${basicData.finishStatus}"\`,\r
  )}\r
>\r
  <el-step\r
    title="\${basicDataTitles.step1}"\${isAttribute(\r
    Boolean(basicDatadescriptions.step1) && !basicData.simple,\r
    \`  description="\${basicDatadescriptions.step1}"\`,\r
  )}\r
  />\r
  <el-step\r
    title="\${basicDataTitles.step2}"\${isAttribute(\r
    Boolean(basicDatadescriptions.step2) && !basicData.simple,\r
    \`  description="\${basicDatadescriptions.step2}"\`,\r
  )}\r
  />\r
  <el-step\r
    title="\${basicDataTitles.step3}"\${isAttribute(\r
    Boolean(basicDatadescriptions.step3) && !basicData.simple,\r
    \`  description="\${basicDatadescriptions.step3}"\`,\r
  )}\r
  />\r
</el-steps>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Navigation/Steps"\r
    icon="fluent:arrow-step-in-right-16-regular"\r
    :layout="{\r
      type: 'grid',\r
      width: 600,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <div :style="{ height: basicData.direction === 'vertical' ? '300px' : '' }">\r
        <el-steps\r
          :active="basicData.active"\r
          :direction="basicData.direction"\r
          :process-status="basicData.processStatus"\r
          :finish-status="basicData.finishStatus"\r
          :align-center="basicData.alignCenter"\r
          :simple="basicData.simple"\r
        >\r
          <el-step :title="basicDataTitles.step1" :description="basicDatadescriptions.step1" />\r
          <el-step :title="basicDataTitles.step2" :description="basicDatadescriptions.step2" />\r
          <el-step :title="basicDataTitles.step3" :description="basicDatadescriptions.step3" />\r
        </el-steps>\r
      </div>\r
      <template #controls>\r
        <HstInputNumber v-model="basicData.active" title="Active" :min="0" :max="3" />\r
        <HstCheckbox v-model="basicData.simple" title="Simple" />\r
        <HstCheckbox v-model="basicData.alignCenter" title="AlignCenter" :style="useElDisplay(!basicData.simple)" />\r
        <HstButtonGroup\r
          v-model="basicData.direction"\r
          title="Direction"\r
          :options="[{\r
            label: 'vertical',\r
            value: 'vertical',\r
          }, {\r
            label: 'horizontal',\r
            value: 'horizontal',\r
          }]"\r
          :style="useElDisplay(!basicData.simple)"\r
        />\r
        <HstSelect v-model="basicData.processStatus" title="ProcessStatus" :options="stateOptions" />\r
        <HstSelect v-model="basicData.finishStatus" title="finishStatus" :options="stateOptions" />\r
        <el-divider border-style="dotted" content-position="left">\r
          <span>title</span>\r
        </el-divider>\r
        <HstText v-model="basicDataTitles.step1" title="Step 1" />\r
        <HstText v-model="basicDataTitles.step2" title="Step 2" />\r
        <HstText v-model="basicDataTitles.step3" title="Step 3" />\r
        <div :style="useElDisplay(!basicData.simple)" style="flex-direction: column;">\r
          <el-divider border-style="dotted" content-position="left">\r
            <span>description</span>\r
          </el-divider>\r
          <HstText v-model="basicDatadescriptions.step1" title="Step 1" />\r
          <HstText v-model="basicDatadescriptions.step2" title="Step 2" />\r
          <HstText v-model="basicDatadescriptions.step3" title="Step 3" />\r
        </div>\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsNavigationStepsStepsStoryVue as default
};
