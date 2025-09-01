const __resolved__virtual_storySource_srcComponentsFeedbackNotificationNotificationStoryVue = `<script setup lang="ts">\r
import type { NotificationProps } from 'element-plus'\r
import { ElNotification } from 'element-plus'\r
import { positionList, typeList } from './constants'\r
import { isAttribute } from '@/utils'\r
\r
// Basic-Notification\r
const basicNotificationData = reactive({\r
  title: 'title',\r
  message: 'message',\r
  type: ref<NotificationProps['type']>(''),\r
  typeList,\r
})\r
function basicNotificationOpen() {\r
  ElNotification({\r
    title: basicNotificationData.title,\r
    message: basicNotificationData.message,\r
    type: basicNotificationData.type,\r
  })\r
}\r
const basicSource = computed(() => {\r
  return \`<script setup lang="ts">\r
  const basicNotificationOpen = () => {\r
    ElNotification({\r
      title: '\${basicNotificationData.title}',\r
      message: '\${basicNotificationData.message}',\${isAttribute(\r
        basicNotificationData.type !== '',\r
        \`    type: '\${basicNotificationData.type}'\`)}\r
    })\r
  }\r
<\\/script>\r
\r
<template>\r
  <el-button @click="basicNotificationOpen">\r
    basicNotification\r
  </el-button> \r
</template>\`\r
})\r
\r
// CustomClose-Notification\r
const customCloseNotificationData = reactive({\r
  title: 'title',\r
  message: 'message',\r
  duration: ref<NotificationProps['duration']>(4500),\r
  showClose: ref<NotificationProps['showClose']>(true),\r
})\r
function customCloseNotificationOpen() {\r
  ElNotification({\r
    title: customCloseNotificationData.title,\r
    message: customCloseNotificationData.message,\r
    duration: customCloseNotificationData.duration,\r
    showClose: customCloseNotificationData.showClose,\r
  })\r
}\r
const customCloseSource = computed(() => {\r
  return \`<script setup lang="ts">\r
  const customCloseNotificationOpen = () => {\r
    ElNotification({\r
      title: '\${customCloseNotificationData.title}',\r
      message: '\${customCloseNotificationData.message}',\r
      duration: \${customCloseNotificationData.duration},\${isAttribute(\r
        !customCloseNotificationData.showClose,\r
        \`    showClose: \${customCloseNotificationData.showClose}\`)}\r
    })\r
  }\r
<\\/script>\r
\r
<template>\r
  <el-button @click="customCloseNotificationOpen">\r
    customCloseNotification\r
  </el-button> \r
</template>\`\r
})\r
\r
// Position-Notification\r
const positionNotificationData = reactive({\r
  title: 'title',\r
  message: 'message',\r
  position: ref<NotificationProps['position']>('top-right'),\r
  offset: ref<NotificationProps['offset']>(0),\r
  positionList,\r
})\r
function positionNotificationOpen() {\r
  ElNotification({\r
    title: positionNotificationData.title,\r
    message: positionNotificationData.message,\r
    position: positionNotificationData.position,\r
    offset: positionNotificationData.offset,\r
  })\r
}\r
const positionSource = computed(() => {\r
  return \`<script setup lang="ts">\r
  const positionNotificationOpen = () => {\r
    ElNotification({\r
      title: '\${positionNotificationData.title}',\r
      message: '\${positionNotificationData.message}',\${isAttribute(\r
          positionNotificationData.offset !== 0,\r
          \`    offset: \${positionNotificationData.offset}\`,\r
        )}\${\r
        isAttribute(\r
          positionNotificationData.position !== 'top-right',\r
          \`    position: '\${positionNotificationData.position}'\`,\r
        )\r
      }\r
    })\r
  }\r
<\\/script>\r
\r
<template>\r
  <el-button @click="positionNotificationOpen">\r
    positionNotification\r
  </el-button> \r
</template>\`\r
})\r
\r
// htmlMessage-Notification\r
const htmlMessageNotificationData = reactive({\r
  title: 'title',\r
  message: 'message',\r
  dangerouslyUseHTMLString: ref<NotificationProps['dangerouslyUseHTMLString']>(true),\r
})\r
function htmlMessageNotificationOpen() {\r
  ElNotification({\r
    title: htmlMessageNotificationData.title,\r
    dangerouslyUseHTMLString: htmlMessageNotificationData.dangerouslyUseHTMLString,\r
    message: htmlMessageNotificationData.message,\r
  })\r
}\r
const htmlMessageNotificationSource = computed(() => {\r
  return \`<script setup lang="ts">\r
  const htmlMessageNotificationOpen = () => {\r
    ElNotification({\r
      title: '\${htmlMessageNotificationData.title}',\r
      message: '\${htmlMessageNotificationData.message}',\r
      dangerouslyUseHTMLString: \${htmlMessageNotificationData.dangerouslyUseHTMLString},\r
    })\r
  }\r
<\\/script>\r
\r
<template>\r
  <el-button @click="htmlMessageNotificationOpen">\r
    htmlMessageNotification\r
  </el-button> \r
</template>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Feedback/Notification" icon="ri:notification-badge-line">\r
    <Variant title="Basic Usage" :source="basicSource">\r
      <el-button @click="basicNotificationOpen">\r
        basicNotification\r
      </el-button>\r
      <template #controls>\r
        <HstText v-model="basicNotificationData.title" title="Title" />\r
        <HstText v-model="basicNotificationData.message" title="Message" />\r
        <HstRadio\r
          v-model="basicNotificationData.type"\r
          title="Type"\r
          :options="basicNotificationData.typeList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Custom Show" :source="customCloseSource" icon="mdi:close-circle-multiple-outline">\r
      <el-button @click="customCloseNotificationOpen">\r
        customCloseNotification\r
      </el-button>\r
      <template #controls>\r
        <HstText v-model="customCloseNotificationData.title" title="Title" />\r
        <HstText v-model="customCloseNotificationData.message" title="Message" />\r
        <HstNumber v-model="customCloseNotificationData.duration" title="Duration" />\r
        <HstCheckbox v-model="customCloseNotificationData.showClose" title="ShowClose" />\r
      </template>\r
    </Variant>\r
    <Variant title="Position" :source="positionSource" icon="fluent:position-to-back-24-regular">\r
      <el-button @click="positionNotificationOpen">\r
        positionNotification\r
      </el-button>\r
      <template #controls>\r
        <HstText v-model="positionNotificationData.title" title="Title" />\r
        <HstText v-model="positionNotificationData.message" title="Message" />\r
        <HstNumber v-model="positionNotificationData.offset" title="Offset" />\r
        <HstRadio\r
          v-model="positionNotificationData.position"\r
          title="Position"\r
          :options="positionNotificationData.positionList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="HTML Message" :source="htmlMessageNotificationSource" icon="bi:filetype-html">\r
      <el-button @click="htmlMessageNotificationOpen">\r
        htmlMessageNotification\r
      </el-button>\r
      <template #controls>\r
        <HstText v-model="htmlMessageNotificationData.title" title="Title" />\r
        <HstCheckbox v-model="htmlMessageNotificationData.dangerouslyUseHTMLString" title="useHTMLString" />\r
        <HstTextarea v-model="htmlMessageNotificationData.message" title="Message" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
  .el-notification__title {\r
    min-height: 30px !important;\r
  }\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFeedbackNotificationNotificationStoryVue as default
};
