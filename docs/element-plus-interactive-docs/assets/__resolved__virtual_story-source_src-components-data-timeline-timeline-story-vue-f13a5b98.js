const __resolved__virtual_storySource_srcComponentsDataTimelineTimelineStoryVue = `<script setup lang="ts">\r
import typeList from '@constants/typeOptions'\r
import { placementList, sizeList } from './constants'\r
import { isAttribute } from '@/utils'\r
\r
const activities = ref([\r
  {\r
    content: 'Event start',\r
    timestamp: '2018-04-15',\r
  },\r
  {\r
    content: 'Approved',\r
    timestamp: '2018-04-13',\r
  },\r
  {\r
    content: 'Success',\r
    timestamp: '2018-04-11',\r
  },\r
])\r
const basicPropsData = reactive({\r
  hideTimestamp: false,\r
  center: false,\r
  placement: 'bottom',\r
  type: '',\r
  color: '',\r
  size: 'normal',\r
  hollow: false,\r
})\r
const basicSource = computed(() => {\r
  return \`<script setup lang="ts">\r
  const activities = [\r
  {\r
    content: 'Event start',\r
    timestamp: '2018-04-15',\r
  },\r
  {\r
    content: 'Approved',\r
    timestamp: '2018-04-13',\r
  },\r
  {\r
    content: 'Success',\r
    timestamp: '2018-04-11',\r
  },\r
]\r
<\\/script>\r
\r
<el-timeline>\r
  <el-timeline-item\r
    v-for="activity in activities"\r
    :key="activity.timestamp"\r
    :timestamp="activity.timestamp"\${isAttribute(\r
basicPropsData.hideTimestamp,\r
'  hide-timestamp',\r
)}\${isAttribute(\r
basicPropsData.center,\r
 '  center',\r
)}\${isAttribute(\r
basicPropsData.placement === 'top',\r
'  placement="top"',\r
)}\${isAttribute(\r
basicPropsData.type !== '',\r
\`  type="\${basicPropsData.type}"\`,\r
)}\${isAttribute(\r
Boolean(basicPropsData.color),\r
\`  color=\${basicPropsData.color}\`,\r
)}\${isAttribute(\r
basicPropsData.size !== 'normal',\r
\`  size=\${basicPropsData.size}\`,\r
)}\${isAttribute(\r
basicPropsData.hollow,\r
'  hollow',\r
)}\r
  >\r
    {{ activity.content }}\r
  </el-timeline-item>\r
</el-timeline>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Data/Timeline" icon="mdi:timeline-clock-outline">\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-timeline>\r
        <el-timeline-item\r
          v-for="(activity, index) in activities"\r
          :key="index"\r
          :timestamp="activity.timestamp"\r
          :hide-timestamp="basicPropsData.hideTimestamp"\r
          :center="basicPropsData.center"\r
          :placement="basicPropsData.placement"\r
          :type="basicPropsData.type"\r
          :color="basicPropsData.color"\r
          :size="basicPropsData.size"\r
          :hollow="basicPropsData.hollow"\r
        >\r
          {{ activity.content }}\r
        </el-timeline-item>\r
      </el-timeline>\r
      <template #controls>\r
        <HstCheckbox v-model="basicPropsData.hideTimestamp" title="hide-timestamp" />\r
        <HstCheckbox v-model="basicPropsData.center" title="Center" />\r
        <HstButtonGroup\r
          v-model="basicPropsData.placement"\r
          title="Placement"\r
          :options="placementList"\r
        />\r
        <HstButtonGroup\r
          v-model="basicPropsData.size"\r
          title="Size"\r
          :options="sizeList"\r
        />\r
        <HstColor v-model="basicPropsData.color" title="Color" />\r
        <HstCheckbox v-model="basicPropsData.hollow" title="Hollow" />\r
        <HstRadio\r
          v-model="basicPropsData.type"\r
          title="Type"\r
          :options="typeList"\r
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
  __resolved__virtual_storySource_srcComponentsDataTimelineTimelineStoryVue as default
};
